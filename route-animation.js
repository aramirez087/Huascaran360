// Huascarán 360 MTB - Interactive Route Animation
// Powered by Mapbox GL JS, GSAP, and GPX data

class RouteAnimation {
    constructor() {
        this.map = null;
        this.routeData = [];
        this.currentIndex = 0;
        this.animationTimeline = null;
        this.isPlaying = false;
        this.is3DMode = false;
        this.marker = null;

        this.init();
    }

    async init() {
        console.log('🚀 RouteAnimation initializing...');

        if (typeof mapboxgl === 'undefined') {
            console.error('❌ Mapbox GL JS not loaded');
            return;
        }

        if (typeof MAPBOX_TOKEN === 'undefined') {
            console.error('❌ MAPBOX_TOKEN not defined');
            return;
        }

        console.log('✅ Mapbox GL JS loaded');
        mapboxgl.accessToken = MAPBOX_TOKEN;

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
            console.log('📍 Loading GPX file...');
            const response = await fetch('huascaran.gpx');

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const gpxText = await response.text();
            console.log(`📄 GPX file loaded: ${gpxText.length} characters`);

            const parser = new DOMParser();
            const gpxDoc = parser.parseFromString(gpxText, 'text/xml');

            const trackPoints = gpxDoc.querySelectorAll('trkpt');
            console.log(`📊 Found ${trackPoints.length} track points`);

            // Sample every Nth point to reduce data (every 50th point for smooth animation)
            const samplingRate = 50;
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

            console.log(`Loaded ${this.routeData.length} route points`);
        } catch (error) {
            console.error('Error loading GPX:', error);
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
            console.error('❌ Map container #routeMap not found!');
            return;
        }

        if (this.routeData.length === 0) {
            console.error('❌ No route data loaded!');
            return;
        }

        console.log('🗺️ Initializing Mapbox map...');

        // Calculate center point
        const centerLat = this.routeData.reduce((sum, p) => sum + p.lat, 0) / this.routeData.length;
        const centerLon = this.routeData.reduce((sum, p) => sum + p.lon, 0) / this.routeData.length;

        console.log(`📍 Map center: ${centerLat.toFixed(4)}, ${centerLon.toFixed(4)}`);

        this.map = new mapboxgl.Map({
            container: 'routeMap',
            style: 'mapbox://styles/mapbox/satellite-streets-v12',
            center: [centerLon, centerLat],
            zoom: 10,
            pitch: 0,
            bearing: 0,
            terrain: { source: 'mapbox-dem', exaggeration: 1.5 }
        });

        this.map.on('error', (e) => {
            console.error('❌ Map error:', e);
        });

        this.map.on('load', () => {
            console.log('✅ Map loaded successfully!');

            // Add terrain source
            this.map.addSource('mapbox-dem', {
                'type': 'raster-dem',
                'url': 'mapbox://mapbox.mapbox-terrain-dem-v1',
                'tileSize': 512,
                'maxzoom': 14
            });

            // Add route line
            this.map.addSource('route', {
                'type': 'geojson',
                'data': {
                    'type': 'Feature',
                    'properties': {},
                    'geometry': {
                        'type': 'LineString',
                        'coordinates': this.routeData.map(p => [p.lon, p.lat])
                    }
                }
            });

            this.map.addLayer({
                'id': 'route',
                'type': 'line',
                'source': 'route',
                'layout': {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
                'paint': {
                    'line-color': '#d92532',
                    'line-width': 4,
                    'line-opacity': 0.8
                }
            });

            // Add animated progress line
            this.map.addSource('route-progress', {
                'type': 'geojson',
                'data': {
                    'type': 'Feature',
                    'properties': {},
                    'geometry': {
                        'type': 'LineString',
                        'coordinates': []
                    }
                }
            });

            this.map.addLayer({
                'id': 'route-progress',
                'type': 'line',
                'source': 'route-progress',
                'layout': {
                    'line-join': 'round',
                    'line-cap': 'round'
                },
                'paint': {
                    'line-color': '#fcbf49',
                    'line-width': 6,
                    'line-opacity': 1
                }
            });

            // Add start marker
            const startEl = document.createElement('div');
            startEl.className = 'route-marker route-marker--start';
            startEl.innerHTML = '🚴';
            new mapboxgl.Marker(startEl)
                .setLngLat([this.routeData[0].lon, this.routeData[0].lat])
                .addTo(this.map);

            // Add finish marker
            const finishEl = document.createElement('div');
            finishEl.className = 'route-marker route-marker--finish';
            finishEl.innerHTML = '🏁';
            const lastPoint = this.routeData[this.routeData.length - 1];
            new mapboxgl.Marker(finishEl)
                .setLngLat([lastPoint.lon, lastPoint.lat])
                .addTo(this.map);

            // Add animated cyclist marker
            const cyclistEl = document.createElement('div');
            cyclistEl.className = 'route-marker route-marker--cyclist';
            cyclistEl.innerHTML = '🚵';
            this.marker = new mapboxgl.Marker(cyclistEl)
                .setLngLat([this.routeData[0].lon, this.routeData[0].lat])
                .addTo(this.map);

            // Fit map to route bounds
            const bounds = this.routeData.reduce((bounds, point) => {
                return bounds.extend([point.lon, point.lat]);
            }, new mapboxgl.LngLatBounds(
                [this.routeData[0].lon, this.routeData[0].lat],
                [this.routeData[0].lon, this.routeData[0].lat]
            ));

            this.map.fitBounds(bounds, {
                padding: 60,
                duration: 0
            });
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
        btn3D?.addEventListener('click', () => this.toggle3D());
    }

    play() {
        if (this.isPlaying) return;

        this.isPlaying = true;
        document.querySelector('[data-route-play]').style.display = 'none';
        document.querySelector('[data-route-pause]').style.display = 'flex';

        const duration = 30; // 30 seconds for full animation
        const updateInterval = 0.1; // Update every 100ms

        this.animationTimeline = gsap.timeline({
            onComplete: () => {
                this.pause();
            }
        });

        // Animate through all route points
        for (let i = this.currentIndex + 1; i < this.routeData.length; i++) {
            const point = this.routeData[i];
            const progress = i / (this.routeData.length - 1);
            const time = progress * duration;

            this.animationTimeline.to({}, {
                duration: updateInterval,
                onStart: () => {
                    this.updateProgress(i);
                }
            }, time);
        }
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

        // Reset map view
        const bounds = this.routeData.reduce((bounds, point) => {
            return bounds.extend([point.lon, point.lat]);
        }, new mapboxgl.LngLatBounds(
            [this.routeData[0].lon, this.routeData[0].lat],
            [this.routeData[0].lon, this.routeData[0].lat]
        ));

        this.map.fitBounds(bounds, {
            padding: 60,
            duration: 1000
        });
    }

    toggle3D() {
        this.is3DMode = !this.is3DMode;
        const btn = document.querySelector('[data-route-3d]');

        if (this.is3DMode) {
            btn.classList.add('active');
            this.map.easeTo({
                pitch: 60,
                bearing: -20,
                duration: 1500
            });
        } else {
            btn.classList.remove('active');
            this.map.easeTo({
                pitch: 0,
                bearing: 0,
                duration: 1500
            });
        }
    }

    updateProgress(index) {
        this.currentIndex = index;
        const point = this.routeData[index];

        // Update marker position with GSAP animation
        if (this.marker) {
            gsap.to(this.marker.getLngLat(), {
                lng: point.lon,
                lat: point.lat,
                duration: 0.2,
                onUpdate: () => {
                    this.marker.setLngLat([point.lon, point.lat]);
                }
            });
        }

        // Update progress line
        const progressCoords = this.routeData.slice(0, index + 1).map(p => [p.lon, p.lat]);
        this.map.getSource('route-progress')?.setData({
            'type': 'Feature',
            'properties': {},
            'geometry': {
                'type': 'LineString',
                'coordinates': progressCoords
            }
        });

        // Update stats
        const progress = (index / (this.routeData.length - 1)) * 100;
        document.querySelector('[data-route-distance]').textContent =
            `${point.distance.toFixed(1)} km`;
        document.querySelector('[data-route-elevation]').textContent =
            `${Math.round(point.elevation)} m`;
        document.querySelector('[data-route-progress]').textContent =
            `${Math.round(progress)}%`;

        // Animate stats with GSAP
        gsap.from('[data-route-stats]', {
            scale: 1.05,
            duration: 0.2,
            ease: 'power2.out'
        });

        // Pan map to follow marker in 3D mode
        if (this.is3DMode && this.isPlaying) {
            this.map.panTo([point.lon, point.lat], {
                duration: 200
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
                this.map.flyTo({
                    center: [point.lon, point.lat],
                    zoom: 13,
                    duration: 1500
                });
            }
        });
    }
}

// Initialize when DOM and all dependencies are ready
function initRouteAnimation() {
    // Check if all dependencies are loaded
    if (typeof mapboxgl === 'undefined') {
        console.warn('⏳ Waiting for Mapbox GL JS to load...');
        setTimeout(initRouteAnimation, 100);
        return;
    }

    if (typeof gsap === 'undefined') {
        console.warn('⏳ Waiting for GSAP to load...');
        setTimeout(initRouteAnimation, 100);
        return;
    }

    if (typeof MAPBOX_TOKEN === 'undefined') {
        console.warn('⏳ Waiting for MAPBOX_TOKEN to be defined...');
        setTimeout(initRouteAnimation, 100);
        return;
    }

    console.log('✅ All dependencies loaded, initializing route animation');
    new RouteAnimation();
}

// Start initialization when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRouteAnimation);
} else {
    initRouteAnimation();
}
