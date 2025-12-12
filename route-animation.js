// Huascarán 360 MTB - Interactive Route Animation
// Powered by Leaflet, OpenStreetMap, GSAP, and GPX data

class RouteAnimation {
    constructor() {
        this.map = null;
        this.routeData = [];
        this.currentIndex = 0;
        this.animationTween = null;
        this.isPlaying = false;
        this.currentLayer = 'street';

        this.marker = null;
        this.routeLine = null;
        this.progressGlowLine = null;
        this.progressLine = null;
        this.progressCoords = [];

        this.baseDuration = 45;
        this.speedSteps = [0.5, 1, 1.5, 2, 3];
        this.speedMultiplier = 1;
        this.hasIntroPlayed = false;

        this.speedBtn = null;
        this.speedLabelEl = null;
        this.currentFacing = null;

        this.elevationCtx = null;
        this.elevationBaseImage = null;
        this.elevationGeom = null;
        this.elevationListenersSet = false;
        this.resizeTimer = null;

        this.init();
    }

    async init() {
        if (typeof L === 'undefined') {
            return;
        }

        await this.loadGPX();
        this.initMap();
        this.setupControls();
        this.setupStats();
        this.drawElevationProfile();

        window.addEventListener('resize', () => this.handleResize());
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
            const trackPoints = Array.from(gpxDoc.querySelectorAll('trkpt'));

            if (trackPoints.length === 0) {
                return;
            }

            const rawPoints = trackPoints.map((point) => {
                const lat = parseFloat(point.getAttribute('lat'));
                const lon = parseFloat(point.getAttribute('lon'));
                const eleNode = point.querySelector('ele');
                const elevation = eleNode ? parseFloat(eleNode.textContent) : 0;
                return { lat, lon, elevation };
            });

            const targetSpacingKm = 0.12; // ~120m between animated points
            let totalDistance = 0;
            let distanceSinceKept = 0;
            let lastRaw = rawPoints[0];

            this.routeData = [{
                ...rawPoints[0],
                distance: 0,
                segmentDistance: 0,
                gradient: 0
            }];

            for (let i = 1; i < rawPoints.length; i++) {
                const curr = rawPoints[i];
                const stepDist = this.calculateDistance(lastRaw.lat, lastRaw.lon, curr.lat, curr.lon);
                distanceSinceKept += stepDist;
                lastRaw = curr;

                if (distanceSinceKept >= targetSpacingKm || i === rawPoints.length - 1) {
                    totalDistance += distanceSinceKept;
                    this.routeData.push({
                        ...curr,
                        distance: totalDistance,
                        segmentDistance: distanceSinceKept,
                        gradient: 0
                    });
                    distanceSinceKept = 0;
                }
            }

            for (let i = 1; i < this.routeData.length; i++) {
                const prev = this.routeData[i - 1];
                const curr = this.routeData[i];
                const horizontalM = curr.segmentDistance * 1000;
                const elevDiff = curr.elevation - prev.elevation;
                curr.gradient = horizontalM > 0 ? (elevDiff / horizontalM) * 100 : 0;
            }
        } catch (error) {
            // Silent fail if GPX can't be loaded
        }
    }

    calculateDistance(lat1, lon1, lat2, lon2) {
        const R = 6371; // Earth's radius in km
        const dLat = this.toRad(lat2 - lat1);
        const dLon = this.toRad(lon2 - lon1);
        const a = Math.sin(dLat / 2) ** 2 +
            Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
            Math.sin(dLon / 2) ** 2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return R * c;
    }

    toRad(degrees) {
        return degrees * Math.PI / 180;
    }

    initMap() {
        const mapContainer = document.getElementById('routeMap');
        if (!mapContainer || this.routeData.length === 0) {
            return;
        }

        const centerLat = this.routeData.reduce((sum, p) => sum + p.lat, 0) / this.routeData.length;
        const centerLon = this.routeData.reduce((sum, p) => sum + p.lon, 0) / this.routeData.length;

        this.map = L.map('routeMap', {
            center: [centerLat, centerLon],
            zoom: 10,
            zoomControl: true
        });

        this.streetLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 19
        }).addTo(this.map);

        this.satelliteLayer = L.tileLayer(
            'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            {
                attribution: '© Esri, Maxar, Earthstar Geographics',
                maxZoom: 19
            }
        );

        const routeCoords = this.routeData.map(p => [p.lat, p.lon]);

        this.routeLine = L.polyline(routeCoords, {
            color: '#d92532',
            weight: 4,
            opacity: 0.45,
            dashArray: '8 12',
            lineCap: 'round',
            smoothFactor: 1,
            className: 'route-line route-line--base'
        }).addTo(this.map);

        this.progressGlowLine = L.polyline([], {
            color: '#fcbf49',
            weight: 12,
            opacity: 0.35,
            lineCap: 'round',
            smoothFactor: 1,
            className: 'route-line route-line--glow'
        }).addTo(this.map);

        this.progressLine = L.polyline([], {
            color: '#fcbf49',
            weight: 6,
            opacity: 1,
            lineCap: 'round',
            smoothFactor: 1,
            className: 'route-line route-line--progress'
        }).addTo(this.map);

        const startIcon = L.divIcon({
            html: '🚩',
            className: 'route-marker route-marker--start',
            iconSize: [32, 32],
            iconAnchor: [16, 16]
        });
        L.marker([this.routeData[0].lat, this.routeData[0].lon], { icon: startIcon })
            .addTo(this.map);

        const finishIcon = L.divIcon({
            html: '🏁',
            className: 'route-marker route-marker--finish',
            iconSize: [32, 32],
            iconAnchor: [16, 16]
        });
        const lastPoint = this.routeData[this.routeData.length - 1];
        L.marker([lastPoint.lat, lastPoint.lon], { icon: finishIcon })
            .addTo(this.map);

        const cyclistIcon = L.divIcon({
            html: '🚴‍♂️',
            className: 'route-marker route-marker--cyclist',
            iconSize: [40, 40],
            iconAnchor: [20, 20]
        });
        this.marker = L.marker([this.routeData[0].lat, this.routeData[0].lon], {
            icon: cyclistIcon,
            zIndexOffset: 1000,
            opacity: 0
        }).addTo(this.map);

        this.map.fitBounds(this.routeLine.getBounds(), {
            padding: [60, 60]
        });
    }

    setupControls() {
        const playBtn = document.querySelector('[data-route-play]');
        const pauseBtn = document.querySelector('[data-route-pause]');
        const resetBtn = document.querySelector('[data-route-reset]');
        const btn3D = document.querySelector('[data-route-3d]');
        const controls = document.querySelector('.route__controls');

        playBtn?.addEventListener('click', () => this.play());
        pauseBtn?.addEventListener('click', () => this.pause());
        resetBtn?.addEventListener('click', () => this.reset());
        btn3D?.addEventListener('click', () => this.toggleLayer());

        if (controls && !controls.querySelector('[data-route-speed]')) {
            const speedBtn = document.createElement('button');
            speedBtn.className = 'route__control-btn route__control-btn--speed';
            speedBtn.setAttribute('data-route-speed', '');
            speedBtn.setAttribute('aria-label', 'Cambiar velocidad');
            speedBtn.innerHTML = '<span class="route__speed-label">1x</span>';
            controls.insertBefore(speedBtn, controls.firstChild);
            this.speedBtn = speedBtn;
            this.speedLabelEl = speedBtn.querySelector('.route__speed-label');
            speedBtn.addEventListener('click', () => this.cycleSpeed());
        }
    }

    setupStats() {
        const stats = document.querySelector('[data-route-stats]');
        if (!stats) {
            return;
        }

        if (!stats.querySelector('[data-route-gradient]')) {
            const gradientItem = document.createElement('div');
            gradientItem.className = 'route__stat-item';
            gradientItem.innerHTML = `
                <span class="route__stat-label">Pendiente</span>
                <span class="route__stat-value" data-route-gradient>0%</span>
            `;
            stats.appendChild(gradientItem);
        }

        if (!stats.querySelector('[data-route-speed]')) {
            const speedItem = document.createElement('div');
            speedItem.className = 'route__stat-item';
            speedItem.innerHTML = `
                <span class="route__stat-label">Velocidad</span>
                <span class="route__stat-value" data-route-speed>1x</span>
            `;
            stats.appendChild(speedItem);
        }
    }

    cycleSpeed() {
        const currentIdx = this.speedSteps.indexOf(this.speedMultiplier);
        const nextIdx = (currentIdx + 1) % this.speedSteps.length;
        this.setSpeed(this.speedSteps[nextIdx]);
    }

    setSpeed(multiplier) {
        this.speedMultiplier = multiplier;

        if (this.speedLabelEl) {
            this.speedLabelEl.textContent = `${multiplier}x`;
        }

        const speedStat = document.querySelector('[data-route-speed]');
        if (speedStat) {
            speedStat.textContent = `${multiplier}x`;
        }

        if (this.animationTween) {
            this.animationTween.timeScale(multiplier);
        }

        this.updateCyclistAnimationSpeed();
    }

    play() {
        if (this.isPlaying) return;

        const totalPoints = this.routeData.length - 1;
        if (this.currentIndex >= totalPoints) {
            this.reset();
        }

        this.isPlaying = true;
        document.querySelector('[data-route-play]')?.style.setProperty('display', 'none');
        document.querySelector('[data-route-pause]')?.style.setProperty('display', 'flex');

        if (this.marker) {
            this.marker.setOpacity(1);
        }
        this.ensureCyclistInner();
        this.marker?.getElement()?.classList.add('is-playing');
        this.updateCyclistAnimationSpeed();
        this.updateCyclistFacing(this.currentIndex);

        if (this.animationTween) {
            this.animationTween.resume();
            this.animationTween.timeScale(this.speedMultiplier);
            return;
        }

        const startAnimation = () => {
            const duration = this.baseDuration;
            const startIndex = this.currentIndex;
            const endIndex = totalPoints;

            const remainingProgress = (endIndex - startIndex) / totalPoints;
            const remainingDuration = duration * remainingProgress;

            const animationProgress = { value: startIndex };

            this.animationTween = gsap.to(animationProgress, {
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
                    this.pause(true);
                    this.animationTween = null;
                }
            });

            this.animationTween.timeScale(this.speedMultiplier);
        };

        if (!this.hasIntroPlayed && this.currentIndex === 0 && this.map) {
            this.hasIntroPlayed = true;
            const start = this.routeData[0];
            this.map.flyTo([start.lat, start.lon], 12, { duration: 2 });
            gsap.delayedCall(1.8, startAnimation);
        } else {
            startAnimation();
        }
    }

    pause(fromComplete = false) {
        this.isPlaying = false;
        document.querySelector('[data-route-play]')?.style.setProperty('display', 'flex');
        document.querySelector('[data-route-pause]')?.style.setProperty('display', 'none');

        this.marker?.getElement()?.classList.remove('is-playing');

        if (this.animationTween && !fromComplete) {
            this.animationTween.pause();
        }
    }

    reset() {
        this.pause();
        this.currentIndex = 0;
        this.progressCoords = [];
        this.updateProgress(0);

        if (this.animationTween) {
            this.animationTween.kill();
            this.animationTween = null;
        }

        if (this.marker) {
            this.marker.setOpacity(0);
        }

        if (this.map && this.routeLine) {
            this.map.fitBounds(this.routeLine.getBounds(), {
                padding: [60, 60],
                duration: 1
            });
        }
    }

    toggleLayer() {
        const btn = document.querySelector('[data-route-3d]');
        if (!this.map) return;

        if (this.currentLayer === 'street') {
            this.map.removeLayer(this.streetLayer);
            this.map.addLayer(this.satelliteLayer);
            this.currentLayer = 'satellite';
            btn?.classList.add('active');
            btn?.setAttribute('aria-label', 'Vista de mapa');
        } else {
            this.map.removeLayer(this.satelliteLayer);
            this.map.addLayer(this.streetLayer);
            this.currentLayer = 'street';
            btn?.classList.remove('active');
            btn?.setAttribute('aria-label', 'Vista satélite');
        }
    }

    updateProgress(index) {
        const previousIndex = this.currentIndex;
        this.currentIndex = index;

        const point = this.routeData[index];

        if (this.marker) {
            this.marker.setLatLng([point.lat, point.lon]);
        }
        this.updateCyclistFacing(index);

        if (index === 0 || index < previousIndex) {
            this.progressCoords = this.routeData.slice(0, index + 1).map(p => [p.lat, p.lon]);
        } else {
            for (let i = previousIndex + 1; i <= index; i++) {
                const p = this.routeData[i];
                this.progressCoords.push([p.lat, p.lon]);
            }
        }

        this.progressLine?.setLatLngs(this.progressCoords);
        this.progressGlowLine?.setLatLngs(this.progressCoords);

        const progress = (index / (this.routeData.length - 1)) * 100;
        const distanceEl = document.querySelector('[data-route-distance]');
        const elevationEl = document.querySelector('[data-route-elevation]');
        const progressEl = document.querySelector('[data-route-progress]');
        const gradientEl = document.querySelector('[data-route-gradient]');

        if (distanceEl) distanceEl.textContent = `${point.distance.toFixed(1)} km`;
        if (elevationEl) elevationEl.textContent = `${Math.round(point.elevation)} m`;
        if (progressEl) progressEl.textContent = `${Math.round(progress)}%`;
        if (gradientEl) gradientEl.textContent = `${point.gradient.toFixed(1)}%`;

        this.updateElevationIndicator(index);

        if (this.isPlaying && this.map) {
            const lookAhead = Math.min(index + 8, this.routeData.length - 1);
            const aheadPoint = this.routeData[lookAhead];
            const targetLat = (point.lat + aheadPoint.lat) / 2;
            const targetLon = (point.lon + aheadPoint.lon) / 2;

            this.map.panTo([targetLat, targetLon], {
                animate: true,
                duration: 0.6,
                easeLinearity: 0.15
            });
        }
    }

    ensureCyclistInner() {
        const el = this.marker?.getElement();
        if (!el || el.querySelector('.route-marker__inner')) return;

        const inner = document.createElement('div');
        inner.className = 'route-marker__inner';

        const glyph = document.createElement('div');
        glyph.className = 'route-marker__glyph';
        glyph.textContent = el.textContent || '🚴‍♂️';

        el.textContent = '';
        inner.appendChild(glyph);
        el.appendChild(inner);
    }

    updateCyclistAnimationSpeed() {
        const el = this.marker?.getElement();
        if (!el) return;

        const multiplier = Number(this.speedMultiplier || 1);
        const clamped = Math.min(3, Math.max(0.5, multiplier));
        const seconds = Math.max(0.45, Math.min(1.4, 0.95 / clamped));
        el.style.setProperty('--bike-bob-duration', `${seconds.toFixed(2)}s`);
    }

    updateCyclistFacing(index) {
        const el = this.marker?.getElement();
        if (!el || this.routeData.length < 2) return;

        this.ensureCyclistInner();

        const maxIndex = this.routeData.length - 1;
        const nextIndex = index < maxIndex ? index + 1 : Math.max(0, index - 1);
        const a = this.routeData[index];
        const b = this.routeData[nextIndex];

        let dx = 0;
        if (this.map?.latLngToContainerPoint) {
            const pA = this.map.latLngToContainerPoint([a.lat, a.lon]);
            const pB = this.map.latLngToContainerPoint([b.lat, b.lon]);
            dx = pB.x - pA.x;
            if (Math.abs(dx) < 2) return;
        } else {
            dx = b.lon - a.lon;
            if (Math.abs(dx) < 0.00002) return;
        }

        const facing = dx >= 0 ? 'west' : 'east';
        if (facing === this.currentFacing) return;
        this.currentFacing = facing;

        el.classList.toggle('is-facing-west', facing === 'west');
        el.classList.toggle('is-facing-east', facing === 'east');
    }

    drawElevationProfile() {
        const canvas = document.getElementById('elevationCanvas');
        const container = document.getElementById('elevationProfile');
        if (!canvas || !container || this.routeData.length === 0) return;

        const ctx = canvas.getContext('2d');
        this.elevationCtx = ctx;

        const width = container.clientWidth;
        const height = 150;
        const padding = 20;

        canvas.width = width;
        canvas.height = height;

        const elevations = this.routeData.map(p => p.elevation);
        const minEle = Math.min(...elevations);
        const maxEle = Math.max(...elevations);
        const eleRange = Math.max(maxEle - minEle, 1);

        ctx.clearRect(0, 0, width, height);

        const gradient = ctx.createLinearGradient(0, 0, 0, height);
        gradient.addColorStop(0, 'rgba(217, 37, 50, 0.35)');
        gradient.addColorStop(1, 'rgba(217, 37, 50, 0.05)');

        ctx.beginPath();
        ctx.moveTo(padding, height - padding);

        this.routeData.forEach((point, i) => {
            const x = padding + (i / (this.routeData.length - 1)) * (width - 2 * padding);
            const y = height - padding - ((point.elevation - minEle) / eleRange) * (height - 2 * padding);
            ctx.lineTo(x, y);
        });

        ctx.lineTo(width - padding, height - padding);
        ctx.closePath();
        ctx.fillStyle = gradient;
        ctx.fill();

        ctx.beginPath();
        this.routeData.forEach((point, i) => {
            const x = padding + (i / (this.routeData.length - 1)) * (width - 2 * padding);
            const y = height - padding - ((point.elevation - minEle) / eleRange) * (height - 2 * padding);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });
        ctx.strokeStyle = '#d92532';
        ctx.lineWidth = 2;
        ctx.stroke();

        this.elevationBaseImage = ctx.getImageData(0, 0, width, height);
        this.elevationGeom = { width, height, padding, minEle, eleRange };

        if (!this.elevationListenersSet) {
            this.elevationListenersSet = true;
            canvas.addEventListener('mousemove', (e) => this.onElevationMove(e));
            canvas.addEventListener('mouseleave', () => this.onElevationLeave());
            canvas.addEventListener('click', (e) => this.onElevationClick(e));
        }

        this.updateElevationIndicator(this.currentIndex);
    }

    onElevationMove(e) {
        if (!this.elevationGeom) return;

        const canvas = e.currentTarget;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const { width, padding } = this.elevationGeom;
        const index = Math.round(((x - padding) / (width - 2 * padding)) * (this.routeData.length - 1));

        if (index >= 0 && index < this.routeData.length) {
            const point = this.routeData[index];
            const tooltip = document.querySelector('[data-elevation-tooltip]');
            if (!tooltip) return;

            tooltip.style.display = 'block';
            tooltip.style.left = `${x}px`;
            tooltip.querySelector('[data-tooltip-elevation]').textContent = `${Math.round(point.elevation)} m`;
            tooltip.querySelector('[data-tooltip-distance]').textContent = `${point.distance.toFixed(1)} km`;
        }
    }

    onElevationLeave() {
        document.querySelector('[data-elevation-tooltip]')?.style.setProperty('display', 'none');
    }

    onElevationClick(e) {
        if (!this.elevationGeom || !this.map) return;

        const canvas = e.currentTarget;
        const rect = canvas.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const { width, padding } = this.elevationGeom;
        const index = Math.round(((x - padding) / (width - 2 * padding)) * (this.routeData.length - 1));

        if (index >= 0 && index < this.routeData.length) {
            const wasPlaying = this.isPlaying;

            if (this.animationTween) {
                this.animationTween.kill();
                this.animationTween = null;
            }
            this.isPlaying = false;

            this.updateProgress(index);
            const point = this.routeData[index];
            this.map.flyTo([point.lat, point.lon], 13, { duration: 1.2 });

            if (wasPlaying) {
                this.play();
            }
        }
    }

    updateElevationIndicator(index) {
        if (!this.elevationCtx || !this.elevationBaseImage || !this.elevationGeom) return;

        const ctx = this.elevationCtx;
        const { width, height, padding, minEle, eleRange } = this.elevationGeom;

        ctx.putImageData(this.elevationBaseImage, 0, 0);

        const x = padding + (index / (this.routeData.length - 1)) * (width - 2 * padding);
        const point = this.routeData[index];
        const y = height - padding - ((point.elevation - minEle) / eleRange) * (height - 2 * padding);

        ctx.save();
        ctx.strokeStyle = 'rgba(252, 191, 73, 0.9)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(x, padding);
        ctx.lineTo(x, height - padding);
        ctx.stroke();

        ctx.fillStyle = '#fcbf49';
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }

    handleResize() {
        clearTimeout(this.resizeTimer);
        this.resizeTimer = setTimeout(() => this.drawElevationProfile(), 150);
    }
}

function initRouteAnimation() {
    if (typeof L === 'undefined' || typeof gsap === 'undefined') {
        setTimeout(initRouteAnimation, 100);
        return;
    }

    new RouteAnimation();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRouteAnimation);
} else {
    initRouteAnimation();
}
