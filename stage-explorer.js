class StageExplorer {
    constructor(root) {
        this.root = root;
        this.shell = root.querySelector('[data-stage-shell]');
        this.stages = [
            {
                number: '01',
                day: 'Miércoles 13 mayo',
                title: 'Carhuaz - Purhuay',
                route: 'Carhuaz - Purhuay',
                start: 'Carhuaz',
                finish: 'Purhuay',
                distanceLabel: '60 km',
                climbLabel: '1,200 m+',
                terrain: 'Valles rápidos y ascensos sostenidos',
                badge: 'Etapa de apertura',
                caption: 'Apertura rápida.',
                description: 'Inicio veloz entre valles y altura media.',
                imageWebp: 'images/Etapas/Etapa1.webp',
                imagePng: 'images/Etapas/Etapa1.png',
                imageAlt: 'Afiche oficial de la Etapa 1 de Huascarán 360 MTB',
                gpx: 'images/Etapas/H360_Etapa 1 (13 de mayo).gpx',
                accent: '#d7a552',
                accentRgb: '215, 165, 82'
            },
            {
                number: '02',
                day: 'Jueves 14 mayo',
                title: 'Portachuelo - Yanama',
                route: 'Portachuelo - Yanama',
                start: 'Portachuelo',
                finish: 'Yanama',
                distanceLabel: '60-75 km',
                climbLabel: '1,500 m+',
                terrain: 'Alta montaña y descenso largo',
                badge: 'Techo del evento',
                caption: 'La cumbre del evento.',
                description: 'Portachuelo arriba, descenso largo después.',
                imageWebp: 'images/Etapas/Etapa2.webp',
                imagePng: 'images/Etapas/Etapa2.png',
                imageAlt: 'Afiche oficial de la Etapa 2 de Huascarán 360 MTB',
                gpx: 'images/Etapas/H360_Etapa 2 (14 de mayo).gpx',
                accent: '#e2b86c',
                accentRgb: '226, 184, 108'
            },
            {
                number: '03',
                day: 'Viernes 15 mayo',
                title: 'Yanama - Chacas',
                route: 'Yanama - Chacas',
                start: 'Yanama',
                finish: 'Chacas',
                distanceLabel: '55 km',
                climbLabel: '1,500 m+',
                terrain: 'Paso de montaña y bajada técnica',
                badge: 'Conexión andina',
                caption: 'Cambio de ritmo.',
                description: 'Pupash y bajada técnica hacia Chacas.',
                imageWebp: 'images/Etapas/Etapa3.webp',
                imagePng: 'images/Etapas/Etapa3.png',
                imageAlt: 'Afiche oficial de la Etapa 3 de Huascarán 360 MTB',
                gpx: 'images/Etapas/H360_Etapa 3 (15 de mayo).gpx',
                accent: '#8da97a',
                accentRgb: '141, 169, 122'
            },
            {
                number: '04',
                day: 'Sábado 16 mayo',
                title: 'Chacas - Olímpica - Carhuaz',
                route: 'Chacas - Olímpica - Carhuaz',
                start: 'Chacas',
                finish: 'Carhuaz',
                distanceLabel: '70 km',
                climbLabel: '2,000 m+',
                terrain: 'Single track, ascenso duro y final de maratón',
                badge: 'Gran final',
                caption: 'Cierre sin tregua.',
                description: 'Singletrack, Olímpica y regreso largo a meta.',
                imageWebp: 'images/Etapas/Etapa4.webp',
                imagePng: 'images/Etapas/Etapa4.png',
                imageAlt: 'Afiche oficial de la Etapa 4 de Huascarán 360 MTB',
                gpx: 'images/Etapas/H360_Etapa 4 (16 de mayo).gpx',
                accent: '#c98256',
                accentRgb: '201, 130, 86'
            }
        ];

        this.refs = {
            panel: root.querySelector('#stageExplorerPanel'),
            nav: root.querySelector('.stage-explorer__nav'),
            triggers: Array.from(root.querySelectorAll('[data-stage-trigger]')),
            imageSource: root.querySelector('[data-stage-image-webp]'),
            image: root.querySelector('[data-stage-image]'),
            posterButton: root.querySelector('[data-stage-open-poster]'),
            badges: Array.from(root.querySelectorAll('[data-stage-badge]')),
            routes: Array.from(root.querySelectorAll('[data-stage-route]')),
            caption: root.querySelector('[data-stage-caption]'),
            day: root.querySelector('[data-stage-day]'),
            title: root.querySelector('[data-stage-title]'),
            description: root.querySelector('[data-stage-description]'),
            distance: root.querySelector('[data-stage-distance]'),
            climb: root.querySelector('[data-stage-climb]'),
            altitude: root.querySelector('[data-stage-altitude]'),
            progress: root.querySelector('[data-stage-progress]'),
            start: root.querySelector('[data-stage-start]'),
            finish: root.querySelector('[data-stage-finish]'),
            maxAlt: root.querySelector('[data-stage-max-alt]'),
            terrain: root.querySelector('[data-stage-terrain]'),
            optimization: root.querySelector('[data-stage-optimization]'),
            progressBar: root.querySelector('[data-stage-progress-bar]'),
            progressCopy: root.querySelector('[data-stage-progress-copy]'),
            prev: root.querySelector('[data-stage-prev]'),
            next: root.querySelector('[data-stage-next]'),
            play: root.querySelector('[data-stage-play]'),
            playLabel: root.querySelector('[data-stage-play-label]'),
            layer: root.querySelector('[data-stage-layer]'),
            map: root.querySelector('#stageMap'),
            lightbox: root.querySelector('[data-stage-lightbox]'),
            lightboxImageSource: root.querySelector('[data-stage-lightbox-image-webp]'),
            lightboxImage: root.querySelector('[data-stage-lightbox-image]'),
            lightboxCloseButtons: Array.from(root.querySelectorAll('[data-stage-lightbox-close]')),
            gpxDownload: root.querySelector('[data-stage-gpx-download]')
        };

        this.numberFormatter = new Intl.NumberFormat('es-PE');
        this.cache = new Map();
        this.activeIndex = 0;
        this.currentIndex = 0;
        this.currentLayer = 'street';
        this.routeData = [];
        this.progressCoords = [];
        this.animationTween = null;
        this.isPlaying = false;
        this.isVisible = false;
        this.userPaused = false;
        this.pendingStageToken = 0;
        this.resizeTimer = null;
        this.isLightboxOpen = false;
        this.lastFocusedElement = null;
        this.prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

        this.init();
    }

    async init() {
        if (!this.refs.map || typeof L === 'undefined' || typeof gsap === 'undefined') {
            return;
        }

        this.initMap();
        this.mountLightbox();
        this.bindEvents();
        this.observeVisibility();
        await this.activateStage(0, { autoplay: false });

        window.addEventListener('resize', () => {
            clearTimeout(this.resizeTimer);
            this.resizeTimer = window.setTimeout(() => {
                this.map?.invalidateSize(false);
            }, 160);
        });

        this.prefersReducedMotion.addEventListener('change', (event) => {
            if (event.matches) {
                this.pause();
            } else if (this.isVisible && !this.isPlaying && !this.userPaused && this.currentIndex === 0) {
                this.play();
            }
        });
    }

    initMap() {
        this.map = L.map(this.refs.map, {
            center: [-9.21, -77.39],
            zoom: 10,
            zoomControl: false,
            dragging: false,
            scrollWheelZoom: false,
            doubleClickZoom: false,
            boxZoom: false,
            keyboard: false,
            touchZoom: false,
            preferCanvas: true
        });

        this.streetLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '© OpenStreetMap contributors',
            maxZoom: 18
        }).addTo(this.map);

        this.satelliteLayer = L.tileLayer(
            'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
            {
                attribution: '© Esri, Maxar, Earthstar Geographics',
                maxZoom: 18
            }
        );

        this.routeGroup = L.featureGroup().addTo(this.map);
    }

    bindEvents() {
        this.refs.triggers.forEach((trigger) => {
            trigger.addEventListener('click', () => {
                const index = Number(trigger.dataset.stageIndex || 0);
                this.activateStage(index, { autoplay: true });
            });
        });

        this.refs.prev?.addEventListener('click', () => {
            this.activateStage(this.activeIndex - 1, { autoplay: true });
        });

        this.refs.next?.addEventListener('click', () => {
            this.activateStage(this.activeIndex + 1, { autoplay: true });
        });

        this.refs.play?.addEventListener('click', () => {
            if (this.isPlaying) {
                this.userPaused = true;
                this.pause();
            } else {
                this.userPaused = false;
                this.play();
            }
        });

        this.refs.layer?.addEventListener('click', () => this.toggleLayer());
        this.refs.posterButton?.addEventListener('click', () => this.openLightbox());
        this.refs.lightboxCloseButtons.forEach((button) => {
            button.addEventListener('click', () => this.closeLightbox());
        });
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && this.isLightboxOpen) {
                this.closeLightbox();
            }
        });

        this.root.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowRight') {
                event.preventDefault();
                this.activateStage(this.activeIndex + 1, { autoplay: true });
            } else if (event.key === 'ArrowLeft') {
                event.preventDefault();
                this.activateStage(this.activeIndex - 1, { autoplay: true });
            }
        });
    }

    mountLightbox() {
        if (!this.refs.lightbox || this.refs.lightbox.parentElement === document.body) {
            return;
        }

        document.body.appendChild(this.refs.lightbox);
    }

    observeVisibility() {
        if (!('IntersectionObserver' in window)) {
            this.isVisible = true;
            return;
        }

        this.visibilityObserver = new IntersectionObserver((entries) => {
            const entry = entries[0];
            this.isVisible = entry?.isIntersecting || false;

            if (!this.isVisible) {
                this.pause();
                return;
            }

            if (!this.prefersReducedMotion.matches && !this.userPaused && !this.isPlaying && this.currentIndex === 0) {
                this.play();
            }
        }, {
            threshold: 0.35
        });

        this.visibilityObserver.observe(this.root);
    }

    async activateStage(index, options = {}) {
        const total = this.stages.length;
        const nextIndex = ((index % total) + total) % total;
        const stage = this.stages[nextIndex];
        const token = ++this.pendingStageToken;
        const autoplay = Boolean(options.autoplay);

        this.activeIndex = nextIndex;
        this.userPaused = !autoplay;
        this.pause();
        this.resetProgressState();
        this.updateNavigation();
        this.applyStageTheme(stage);
        this.updateStageCopy(stage);

        this.refs.play?.setAttribute('disabled', 'true');
            this.refs.progressCopy.textContent = 'Cargando track de la etapa...';
            this.refs.optimization.textContent = 'Resumiendo el GPX para que el recorrido se vea fluido en web.';

        try {
            const payload = await this.ensureStageData(stage);
            if (token !== this.pendingStageToken) {
                return;
            }

            this.routeData = payload.routeData;
            this.stageMetrics = payload;
            this.renderRoute(stage, payload);
            this.updateMetrics(payload);
            this.updateProgress(0);
            this.updatePlayButton();

            this.refs.play?.removeAttribute('disabled');

            if (autoplay && this.isVisible && !this.prefersReducedMotion.matches) {
                this.play();
            }
        } catch (error) {
            this.refs.play?.removeAttribute('disabled');
            this.refs.progressCopy.textContent = 'No se pudo cargar la vista GPX de esta etapa.';
            this.refs.optimization.textContent = 'El afiche sigue disponible mientras revisamos el track.';
        }
    }

    async ensureStageData(stage) {
        if (this.cache.has(stage.gpx)) {
            return this.cache.get(stage.gpx);
        }

        const response = await fetch(encodeURI(stage.gpx));
        if (!response.ok) {
            throw new Error(`No se pudo cargar ${stage.gpx}`);
        }

        const gpxText = await response.text();
        const data = this.parseGPX(gpxText);
        this.cache.set(stage.gpx, data);
        return data;
    }

    parseGPX(gpxText) {
        const parser = new DOMParser();
        const gpxDoc = parser.parseFromString(gpxText, 'text/xml');
        const rawTrackPoints = Array.from(gpxDoc.getElementsByTagName('trkpt'));
        const trackPoints = rawTrackPoints.length
            ? rawTrackPoints
            : Array.from(gpxDoc.getElementsByTagNameNS('*', 'trkpt'));

        if (!trackPoints.length) {
            throw new Error('GPX sin track points');
        }

        const readEle = (point) => {
            const eleNode = point.getElementsByTagName('ele')[0] || point.getElementsByTagNameNS('*', 'ele')[0];
            return eleNode ? parseFloat(eleNode.textContent || '0') : 0;
        };

        const rawPoints = trackPoints.map((point) => ({
            lat: parseFloat(point.getAttribute('lat') || '0'),
            lon: parseFloat(point.getAttribute('lon') || '0'),
            elevation: readEle(point)
        }));

        const targetSpacingKm = 0.09;
        let totalDistance = 0;
        let distanceSinceKept = 0;
        let lastRaw = rawPoints[0];
        let maxElevation = rawPoints[0].elevation;

        // Keep one point roughly every 90 m so the web animation stays smooth.
        const routeData = [{
            ...rawPoints[0],
            distance: 0,
            segmentDistance: 0
        }];

        for (let i = 1; i < rawPoints.length; i++) {
            const current = rawPoints[i];
            const stepDistance = this.calculateDistance(lastRaw.lat, lastRaw.lon, current.lat, current.lon);
            distanceSinceKept += stepDistance;
            lastRaw = current;
            maxElevation = Math.max(maxElevation, current.elevation);

            if (distanceSinceKept >= targetSpacingKm || i === rawPoints.length - 1) {
                totalDistance += distanceSinceKept;
                routeData.push({
                    ...current,
                    distance: totalDistance,
                    segmentDistance: distanceSinceKept
                });
                distanceSinceKept = 0;
            }
        }

        return {
            rawPointsCount: rawPoints.length,
            simplifiedCount: routeData.length,
            maxElevation,
            totalDistance,
            animationDuration: Math.max(10, Math.min(18, totalDistance * 0.22)),
            routeData
        };
    }

    calculateDistance(lat1, lon1, lat2, lon2) {
        const earthRadiusKm = 6371;
        const dLat = this.toRad(lat2 - lat1);
        const dLon = this.toRad(lon2 - lon1);
        const a = Math.sin(dLat / 2) ** 2 +
            Math.cos(this.toRad(lat1)) * Math.cos(this.toRad(lat2)) *
            Math.sin(dLon / 2) ** 2;
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        return earthRadiusKm * c;
    }

    toRad(value) {
        return value * Math.PI / 180;
    }

    applyStageTheme(stage) {
        this.shell?.style.setProperty('--stage-accent', stage.accent);
        this.shell?.style.setProperty('--stage-accent-rgb', stage.accentRgb);
        if (this.shell) {
            this.shell.dataset.stageNumber = stage.number;
        }
    }

    updateNavigation() {
        const navIsScrollable = Boolean(this.refs.nav) && this.refs.nav.scrollWidth > this.refs.nav.clientWidth + 8;

        this.refs.triggers.forEach((trigger, index) => {
            const isActive = index === this.activeIndex;
            trigger.classList.toggle('is-active', isActive);
            trigger.setAttribute('aria-selected', isActive ? 'true' : 'false');

            if (isActive && navIsScrollable) {
                const nav = this.refs.nav;
                const scrollLeft = trigger.offsetLeft - nav.offsetLeft - (nav.clientWidth / 2) + (trigger.clientWidth / 2);
                nav.scrollTo({
                    left: scrollLeft,
                    behavior: 'smooth'
                });
            }
        });
    }

    updateStageCopy(stage) {
        if (this.refs.imageSource) {
            this.refs.imageSource.srcset = stage.imageWebp;
        }
        if (this.refs.image) {
            this.refs.image.src = stage.imagePng;
            this.refs.image.alt = stage.imageAlt;
        }
        if (this.refs.lightboxImageSource) {
            this.refs.lightboxImageSource.srcset = stage.imageWebp;
        }
        if (this.refs.lightboxImage) {
            this.refs.lightboxImage.src = stage.imagePng;
            this.refs.lightboxImage.alt = `${stage.imageAlt} ampliado`;
        }

        this.refs.badges.forEach((element) => {
            element.textContent = stage.badge;
        });
        this.refs.routes.forEach((element) => {
            element.textContent = stage.route;
        });
        this.refs.caption.textContent = stage.caption;
        this.refs.day.textContent = stage.day;
        this.refs.title.textContent = stage.title;
        this.refs.description.textContent = stage.description;
        this.refs.distance.textContent = stage.distanceLabel;
        this.refs.climb.textContent = stage.climbLabel;
        this.refs.start.textContent = stage.start;
        this.refs.finish.textContent = stage.finish;
        if (this.refs.terrain) {
            this.refs.terrain.textContent = stage.terrain;
        }
        if (this.refs.gpxDownload) {
            this.refs.gpxDownload.href = encodeURI(stage.gpx);
            this.refs.gpxDownload.setAttribute('download', `H360_Etapa${stage.number}.gpx`);
            this.refs.gpxDownload.setAttribute('aria-label', `Descargar archivo GPX de la Etapa ${stage.number}`);
        }
        this.refs.maxAlt.textContent = '--';
        this.refs.altitude.textContent = '0 m';
        this.refs.progress.textContent = '0%';
        this.refs.progressBar.style.transform = 'scaleX(0)';
    }

    updateMetrics(payload) {
        this.refs.maxAlt.textContent = `${this.numberFormatter.format(Math.round(payload.maxElevation))} m`;
            this.refs.optimization.textContent = `${this.numberFormatter.format(payload.rawPointsCount)} puntos a ${this.numberFormatter.format(payload.simplifiedCount)} nodos.`;
    }

    renderRoute(stage, payload) {
        this.routeGroup.clearLayers();
        this.progressCoords = [];

        const routeCoords = payload.routeData.map((point) => [point.lat, point.lon]);

        this.routeLine = L.polyline(routeCoords, {
            color: 'rgba(255, 255, 255, 0.62)',
            weight: 4,
            opacity: 0.7,
            dashArray: '10 14',
            lineCap: 'round',
            smoothFactor: 1,
            className: 'stage-route stage-route--base'
        });

        this.progressGlowLine = L.polyline([], {
            color: `rgba(${stage.accentRgb}, 0.34)`,
            weight: 12,
            opacity: 1,
            lineCap: 'round',
            smoothFactor: 1,
            className: 'stage-route stage-route--glow'
        });

        this.progressLine = L.polyline([], {
            color: stage.accent,
            weight: 6,
            opacity: 1,
            lineCap: 'round',
            smoothFactor: 1,
            className: 'stage-route stage-route--progress'
        });

        const startIcon = L.divIcon({
            html: '<span class="stage-map__pin">S</span>',
            className: 'stage-map__pin-wrapper',
            iconSize: [28, 28],
            iconAnchor: [14, 14]
        });

        const finishIcon = L.divIcon({
            html: '<span class="stage-map__pin stage-map__pin--finish">F</span>',
            className: 'stage-map__pin-wrapper',
            iconSize: [28, 28],
            iconAnchor: [14, 14]
        });

        const riderIcon = L.divIcon({
            html: '<span class="stage-map__pulse"></span>',
            className: 'stage-map__marker',
            iconSize: [18, 18],
            iconAnchor: [9, 9]
        });

        this.startMarker = L.marker(routeCoords[0], { icon: startIcon });
        this.finishMarker = L.marker(routeCoords[routeCoords.length - 1], { icon: finishIcon });
        this.marker = L.marker(routeCoords[0], {
            icon: riderIcon,
            zIndexOffset: 1000,
            opacity: 0
        });

        this.routeGroup.addLayer(this.routeLine);
        this.routeGroup.addLayer(this.progressGlowLine);
        this.routeGroup.addLayer(this.progressLine);
        this.routeGroup.addLayer(this.startMarker);
        this.routeGroup.addLayer(this.finishMarker);
        this.routeGroup.addLayer(this.marker);

        const bounds = this.routeLine.getBounds();
        window.requestAnimationFrame(() => {
            this.map.invalidateSize(false);
            this.map.fitBounds(bounds, {
                padding: [32, 32]
            });
        });
    }

    resetProgressState() {
        if (this.animationTween) {
            this.animationTween.kill();
            this.animationTween = null;
        }
        this.currentIndex = 0;
        this.progressCoords = [];
        this.marker?.setOpacity(0);
        this.progressLine?.setLatLngs([]);
        this.progressGlowLine?.setLatLngs([]);
        this.refs.progressBar.style.transform = 'scaleX(0)';
        this.refs.progress.textContent = '0%';
        this.updatePlayButton();
    }

    play() {
        if (!this.routeData.length || this.isPlaying) {
            return;
        }

        const totalPoints = this.routeData.length - 1;
        if (totalPoints <= 0) {
            return;
        }

        if (this.currentIndex >= totalPoints) {
            this.resetProgressState();
            this.updateProgress(0);
        }

        this.isPlaying = true;
        this.marker?.setOpacity(1);
        this.updatePlayButton();

        if (this.animationTween) {
            this.animationTween.resume();
            return;
        }

        const progressState = { value: this.currentIndex };
        const remainingProgress = (totalPoints - this.currentIndex) / totalPoints;
        const duration = (this.stageMetrics?.animationDuration || 12) * remainingProgress;

        this.animationTween = gsap.to(progressState, {
            value: totalPoints,
            duration,
            ease: 'none',
            onUpdate: () => {
                const index = Math.round(progressState.value);
                if (index !== this.currentIndex && index < this.routeData.length) {
                    this.updateProgress(index);
                }
            },
            onComplete: () => {
                this.updateProgress(totalPoints);
                this.isPlaying = false;
                this.animationTween = null;
                this.updatePlayButton();
            this.refs.progressCopy.textContent = 'Etapa completada. Puedes repetirla o pasar a la siguiente.';
            }
        });
    }

    pause() {
        this.isPlaying = false;
        if (this.animationTween) {
            this.animationTween.pause();
        }
        this.updatePlayButton();
    }

    toggleLayer() {
        if (!this.map) {
            return;
        }

        const layerButton = this.refs.layer;
        if (this.currentLayer === 'street') {
            this.map.removeLayer(this.streetLayer);
            this.map.addLayer(this.satelliteLayer);
            this.currentLayer = 'satellite';
            layerButton?.classList.add('active');
            layerButton?.setAttribute('aria-label', 'Cambiar a vista de mapa');
        } else {
            this.map.removeLayer(this.satelliteLayer);
            this.map.addLayer(this.streetLayer);
            this.currentLayer = 'street';
            layerButton?.classList.remove('active');
            layerButton?.setAttribute('aria-label', 'Cambiar a vista satélite');
        }
    }

    updateProgress(index) {
        if (!this.routeData.length) {
            return;
        }

        const previousIndex = this.currentIndex;
        this.currentIndex = index;
        const point = this.routeData[index];
        const totalDistance = this.routeData[this.routeData.length - 1].distance;

        if (index === 0 || index < previousIndex) {
            this.progressCoords = this.routeData.slice(0, index + 1).map((entry) => [entry.lat, entry.lon]);
        } else {
            for (let i = previousIndex + 1; i <= index; i++) {
                const entry = this.routeData[i];
                this.progressCoords.push([entry.lat, entry.lon]);
            }
        }

        this.marker?.setLatLng([point.lat, point.lon]);
        this.progressLine?.setLatLngs(this.progressCoords);
        this.progressGlowLine?.setLatLngs(this.progressCoords);

        const progress = (index / (this.routeData.length - 1)) * 100;
        this.refs.altitude.textContent = `${this.numberFormatter.format(Math.round(point.elevation))} m`;
        this.refs.progress.textContent = `${Math.round(progress)}%`;
        this.refs.progressBar.style.transform = `scaleX(${Math.max(0, Math.min(1, progress / 100))})`;

        if (this.isPlaying && this.map) {
            const lookAheadIndex = Math.min(index + 7, this.routeData.length - 1);
            const aheadPoint = this.routeData[lookAheadIndex];
            const targetLat = (point.lat + aheadPoint.lat) / 2;
            const targetLon = (point.lon + aheadPoint.lon) / 2;

            this.map.panTo([targetLat, targetLon], {
                animate: true,
                duration: 0.45,
                easeLinearity: 0.15
            });
        }

        if (!this.isPlaying && index === 0) {
            this.refs.progressCopy.textContent = `${totalDistance.toFixed(1)} km listos para animar.`;
            return;
        }

        this.refs.progressCopy.textContent = `${point.distance.toFixed(1)} de ${totalDistance.toFixed(1)} km recorridos.`;
    }

    updatePlayButton() {
        const playButton = this.refs.play;
        const playLabel = this.refs.playLabel;
        if (!playButton || !playLabel) {
            return;
        }

        const atEnd = this.routeData.length > 1 && this.currentIndex >= this.routeData.length - 1 && !this.isPlaying;
        playButton.classList.toggle('is-playing', this.isPlaying);

        if (this.isPlaying) {
            playLabel.textContent = 'Pausar';
            playButton.setAttribute('aria-label', 'Pausar animación');
        } else if (atEnd) {
            playLabel.textContent = 'Repetir';
            playButton.setAttribute('aria-label', 'Repetir animación');
        } else {
            playLabel.textContent = 'Animar';
            playButton.setAttribute('aria-label', 'Reproducir animación');
        }
    }

    openLightbox() {
        if (!this.refs.lightbox) {
            return;
        }

        this.lastFocusedElement = document.activeElement instanceof HTMLElement
            ? document.activeElement
            : null;
        this.refs.lightbox.hidden = false;
        this.refs.lightbox.classList.add('is-open');
        this.refs.lightbox.setAttribute('aria-hidden', 'false');
        document.body.classList.add('stage-lightbox-open');
        this.isLightboxOpen = true;
        this.refs.lightboxCloseButtons[0]?.focus();
    }

    closeLightbox() {
        if (!this.refs.lightbox) {
            return;
        }

        this.refs.lightbox.hidden = true;
        this.refs.lightbox.classList.remove('is-open');
        this.refs.lightbox.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('stage-lightbox-open');
        this.isLightboxOpen = false;
        this.lastFocusedElement?.focus?.();
        this.lastFocusedElement = null;
    }
}

function initStageExplorer() {
    if (typeof L === 'undefined' || typeof gsap === 'undefined') {
        window.setTimeout(initStageExplorer, 100);
        return;
    }

    const root = document.querySelector('.stage-explorer');
    if (!root) {
        return;
    }

    new StageExplorer(root);
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initStageExplorer);
} else {
    initStageExplorer();
}
