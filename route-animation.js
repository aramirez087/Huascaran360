// Huascarán 360 MTB - Interactive Route Animation
// Powered by Leaflet, OpenStreetMap, GSAP, and GPX data

class RouteAnimation {
    constructor() {
        this.map = null;
        this.routeData = [];
        this.currentIndex = 0;
        this.animationTimeline = null;
        this.isPlaying = false;
        this.is3DMode = false;
        this.marker = null;
        this.routeLine = null;
        this.progressLine = null;
        this.currentLayer = 'street'; // 'street' or 'satellite'

        this.init();
    }

    async init() {
        if (typeof L === 'undefined') {
            return;
        }

        // Parse GPX file
        await this.loadGPX();

        // Initialize map
        this.initMap();

        // Setup controls
        this.setupControls();

        // Draw elevation profile
        this.drawElevationProfile();
    }

    async loadGPX() {
        try {
            const response = await fetch('huascaran-lite.gpx');

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const gpxText = await response.text();

            const parser = new DOMParser();
            const gpxDoc = parser.parseFromString(gpxText, 'text/xml');

            const trackPoints = gpxDoc.querySelectorAll('trkpt');

            // Use every 10th point for smooth animation (GPX already optimized to ~25m spacing)
            const samplingRate = 10;
            let totalDistance = 0;

            trackPoints.forEach((point, index) => {
                if (index % samplingRate === 0 || index === trackPoints.length - 1) {
                    const lat = parseFloat(point.getAttribute('lat'));
                    const lon = parseFloat(point.getAttribute('lon'));
                    const eleNode = point.querySelector('ele');
                    const elevation = eleNode ? parseFloat(eleNode.textContent) : 0;

                    if (this.routeData.length > 0) {
                        const lastPoint = this.routeData[this.routeData.length - 1];
                        const dist = this.calculateDistance(
                            lastPoint.lat, lastPoint.lon,
                            lat, lon
                        );
                        totalDistance += dist;
                    }

                    this.routeData.push({
                        lat,
                        lon,
                        elevation,
                        distance: totalDistance
                    });
                }
            });
        } catch (error) {
            // Error loading GPX
        }
    }

    calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371; // Earth's radius in km
        const dLat = this.toRad(lat2 - lat1);
        const dLon = this.toRad(lon2 - lon1);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
                  Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
                  Math.sin(dLon / 2) * Math.sin(dLon / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }

    toRad(degrees) {
        return degrees * Math.PI / 180;
    }

    initMap() {
        const mapContainer = document.getElementById('routeMap');
        if (!mapContainer) {
            return;
        }

        if (this.routeData.length === 0) {
            return;
        }

        // Calculate center point
        const centerLat = this.routeData.reduce((sum, p) => sum + p.lat, 0) / this.routeData.length;
        const centerLon = this.routeData.reduce((sum, p) => sum + p.lon, 0) / this.routeData.length;

        // Create map with OpenStreetMap tiles
        this.map = L.map('routeMap', {
            center: [centerLat, centerLon],
            zoom: 10,
            zoomControl: true
        });

        // Add OpenStreetMap base layer (default)
        this.streetLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 19
        }).addTo(this.map);

        // Add satellite layer (Esri World Imagery - free alternative)
        this.satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
            attribution: '© Esri, Maxar, Earthstar Geographics',
            maxZoom: 19
        });

        // Create route line coordinates
        const routeCoords = this.routeData.map(p => [p.lat, p.lon]);

        // Add full route line (grey/red)
        this.routeLine = L.polyline(routeCoords, {
            color: '#d92532',
            weight: 4,
            opacity: 0.6,
            smoothFactor: 1
        }).addTo(this.map);

        // Add progress line (yellow - will be updated during animation)
        this.progressLine = L.polyline([], {
            color: '#fcbf49',
            weight: 6,
            opacity: 1,
            smoothFactor: 1
        }).addTo(this.map);

        // Add start marker (green flag)
        const startIcon = L.divIcon({
            html: '🚩',
            className: 'route-marker route-marker--start',
            iconSize: [32, 32],
            iconAnchor: [16, 16]
        });
        L.marker([this.routeData[0].lat, this.routeData[0].lon], { icon: startIcon })
            .addTo(this.map);

        // Add finish marker (checkered flag)
        const finishIcon = L.divIcon({
            html: '🏁',
            className: 'route-marker route-marker--finish',
            iconSize: [32, 32],
            iconAnchor: [16, 16]
        });
        const lastPoint = this.routeData[this.routeData.length - 1];
        L.marker([lastPoint.lat, lastPoint.lon], { icon: finishIcon })
            .addTo(this.map);

        // Add animated cyclist marker (hidden initially, appears on play)
        const cyclistIcon = L.divIcon({
            html: '🚵',
            className: 'route-marker route-marker--cyclist',
            iconSize: [40, 40],
            iconAnchor: [20, 20]
        });
        this.marker = L.marker([this.routeData[0].lat, this.routeData[0].lon], {
            icon: cyclistIcon,
            zIndexOffset: 1000,
            opacity: 0
        }).addTo(this.map);

        // Fit map to route bounds
        this.map.fitBounds(this.routeLine.getBounds(), {
            padding: [60, 60]
        });
    }

    setupControls() {
        const playBtn = document.querySelector('[data-route-play]');
        const pauseBtn = document.querySelector('[data-route-pause]');
        const resetBtn = document.querySelector('[data-route-reset]');
        const btn3D = document.querySelector('[data-route-3d]');

        playBtn?.addEventListener('click', () => this.play());
        pauseBtn?.addEventListener('click', () => this.pause());
        resetBtn?.addEventListener('click', () => this.reset());
        btn3D?.addEventListener('click', () => this.toggleLayer());
    }

    play() {
        if (this.isPlaying) return;

        this.isPlaying = true;
        document.querySelector('[data-route-play]').style.display = 'none';
        document.querySelector('[data-route-pause]').style.display = 'flex';

        // Show the cyclist marker when animation starts
        if (this.marker) {
            this.marker.setOpacity(1);
        }

        const duration = 30; // 30 seconds for full animation
        const totalPoints = this.routeData.length - 1;
        const startIndex = this.currentIndex;
        const endIndex = totalPoints;

        // Calculate remaining duration based on current progress
        const remainingProgress = (endIndex - startIndex) / totalPoints;
        const remainingDuration = duration * remainingProgress;

        // Create animation object to track progress
        const animationProgress = { value: startIndex };

        this.animationTimeline = gsap.to(animationProgress, {
            value: endIndex,
            duration: remainingDuration,
            ease: 'none',
            onUpdate: () => {
                const index = Math.round(animationProgress.value);
                if (index !== this.currentIndex && index < this.routeData.length) {
                    this.updateProgress(index);
                }
            },
            onComplete: () => {
                this.updateProgress(endIndex);
                this.pause();
            }
        });
    }

    pause() {
        this.isPlaying = false;
        document.querySelector('[data-route-play]').style.display = 'flex';
        document.querySelector('[data-route-pause]').style.display = 'none';

        if (this.animationTimeline) {
            this.animationTimeline.pause();
        }
    }

    reset() {
        this.pause();
        this.currentIndex = 0;
        this.updateProgress(0);

        if (this.animationTimeline) {
            this.animationTimeline.kill();
            this.animationTimeline = null;
        }

        // Hide the cyclist marker on reset
        if (this.marker) {
            this.marker.setOpacity(0);
        }

        // Reset map view
        this.map.fitBounds(this.routeLine.getBounds(), {
            padding: [60, 60],
            duration: 1
        });
    }

    toggleLayer() {
        const btn = document.querySelector('[data-route-3d]');

        if (this.currentLayer === 'street') {
            // Switch to satellite
            this.map.removeLayer(this.streetLayer);
            this.map.addLayer(this.satelliteLayer);
            this.currentLayer = 'satellite';
            btn.classList.add('active');
            btn.setAttribute('aria-label', 'Vista de mapa');
        } else {
            // Switch to street
            this.map.removeLayer(this.satelliteLayer);
            this.map.addLayer(this.streetLayer);
            this.currentLayer = 'street';
            btn.classList.remove('active');
            btn.setAttribute('aria-label', 'Vista satélite');
        }
    }

    updateProgress(index) {
        this.currentIndex = index;
        const point = this.routeData[index];

        // Update marker position directly (no nested animation to avoid conflicts)
        if (this.marker) {
            this.marker.setLatLng([point.lat, point.lon]);
        }

        // Update progress line
        const progressCoords = this.routeData.slice(0, index + 1).map(p => [p.lat, p.lon]);
        this.progressLine.setLatLngs(progressCoords);

        // Update stats
        const progress = (index / (this.routeData.length - 1)) * 100;
        document.querySelector('[data-route-distance]').textContent =
            `${point.distance.toFixed(1)} km`;
        document.querySelector('[data-route-elevation]').textContent =
            `${Math.round(point.elevation)} m`;
        document.querySelector('[data-route-progress]').textContent =
            `${Math.round(progress)}%`;

        // Pan map to follow marker when playing (with smooth animation)
        if (this.isPlaying) {
            this.map.panTo([point.lat, point.lon], {
                animate: true,
                duration: 0.5,
                easeLinearity: 0.25
            });
        }
    }

    drawElevationProfile() {
        const canvas = document.getElementById('elevationCanvas');
        if (!canvas || this.routeData.length === 0) return;

        const ctx = canvas.getContext('2d');
        const container = document.getElementById('elevationProfile');

        // Set canvas size
        canvas.width = container.clientWidth;
        canvas.height = 150;

        const width = canvas.width;
        const height = canvas.height;
        const padding = 20;

        // Find min/max elevation
        const elevations = this.routeData.map(p => p.elevation);
        const minEle = Math.min(...elevations);
        const maxEle = Math.max(...elevations);
        const eleRange = maxEle - minEle;

        // Clear canvas
        ctx.clearRect(0, 0, width, height);

        // Draw gradient fill
        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, 'rgba(217, 37, 50, 0.3)');
        gradient.addColorStop(1, 'rgba(217, 37, 50, 0.05)');

        ctx.beginPath();
        ctx.moveTo(padding, height - padding);

        this.routeData.forEach((point, index) => {
            const x = padding + (index / (this.routeData.length - 1)) * (width - 2 * padding);
            const y = height - padding - ((point.elevation - minEle) / eleRange) * (height - 2 * padding);

            if (index === 0) {
                ctx.lineTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });

        ctx.lineTo(width - padding, height - padding);
        ctx.closePath();
        ctx.fillStyle = gradient;
        ctx.fill();

        // Draw line
        ctx.beginPath();
        this.routeData.forEach((point, index) => {
            const x = padding + (index / (this.routeData.length - 1)) * (width - 2 * padding);
            const y = height - padding - ((point.elevation - minEle) / eleRange) * (height - 2 * padding);

            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }
        });
        ctx.strokeStyle = '#d92532';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Add interactivity
        canvas.addEventListener('mousemove', (e) => {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const index = Math.round(((x - padding) / (width - 2 * padding)) * (this.routeData.length - 1));

            if (index >= 0 && index < this.routeData.length) {
                const point = this.routeData[index];
                const tooltip = document.querySelector('[data-elevation-tooltip]');

                tooltip.style.display = 'block';
                tooltip.style.left = `${x}px`;
                tooltip.querySelector('[data-tooltip-elevation]').textContent =
                    `${Math.round(point.elevation)} m`;
                tooltip.querySelector('[data-tooltip-distance]').textContent =
                    `${point.distance.toFixed(1)} km`;
            }
        });

        canvas.addEventListener('mouseleave', () => {
            document.querySelector('[data-elevation-tooltip]').style.display = 'none';
        });

        canvas.addEventListener('click', (e) => {
            const rect = canvas.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const index = Math.round(((x - padding) / (width - 2 * padding)) * (this.routeData.length - 1));

            if (index >= 0 && index < this.routeData.length) {
                this.updateProgress(index);
                const point = this.routeData[index];
                this.map.flyTo([point.lat, point.lon], 13, {
                    duration: 1.5
                });
            }
        });
    }
}

// Initialize when DOM and all dependencies are ready
function initRouteAnimation() {
    // Check if all dependencies are loaded
    if (typeof L === 'undefined') {
        setTimeout(initRouteAnimation, 100);
        return;
    }

    if (typeof gsap === 'undefined') {
        setTimeout(initRouteAnimation, 100);
        return;
    }

    new RouteAnimation();
}

// Start initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRouteAnimation);
} else {
    initRouteAnimation();
}
