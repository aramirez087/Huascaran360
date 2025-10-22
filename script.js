document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.main-nav__toggle');
    const navList = document.querySelector('.main-nav__list');

    if (navToggle && navList) {
        navToggle.addEventListener('click', () => {
            const expanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', String(!expanded));
            navList.classList.toggle('is-open');
        });

        navList.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                if (navList.classList.contains('is-open')) {
                    navList.classList.remove('is-open');
                    navToggle.setAttribute('aria-expanded', 'false');
                }
            });
        });
    }

    const accordionItems = document.querySelectorAll('.accordion__item');
    accordionItems.forEach((item) => {
        const button = item.querySelector('button');
        const panel = item.querySelector('.accordion__panel');
        if (!button || !panel) return;

        button.addEventListener('click', () => {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';

            accordionItems.forEach((otherItem) => {
                const otherButton = otherItem.querySelector('button');
                const otherPanel = otherItem.querySelector('.accordion__panel');
                if (!otherButton || !otherPanel) return;

                if (otherItem === item) return;
                otherButton.setAttribute('aria-expanded', 'false');
                otherItem.classList.remove('is-open');
                otherPanel.setAttribute('hidden', '');
            });

            if (isExpanded) {
                button.setAttribute('aria-expanded', 'false');
                item.classList.remove('is-open');
                panel.setAttribute('hidden', '');
            } else {
                button.setAttribute('aria-expanded', 'true');
                item.classList.add('is-open');
                panel.removeAttribute('hidden');
            }
        });

        if (button.getAttribute('aria-expanded') === 'true') {
            item.classList.add('is-open');
            panel.removeAttribute('hidden');
        } else {
            panel.setAttribute('hidden', '');
        }
    });

    const animatedFrames = document.querySelectorAll('.media-frame[data-animate]');
    if (animatedFrames.length) {
        const observer = new IntersectionObserver(
            (entries, obs) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        obs.unobserve(entry.target);
                    }
                });
            },
            {
                threshold: 0.35,
            },
        );

        animatedFrames.forEach((frame) => observer.observe(frame));
    }

    const videoModal = document.querySelector('[data-video-modal]');
    if (videoModal) {
        const modalFrame = videoModal.querySelector('.video-modal__frame iframe');
        const modalDialog = videoModal.querySelector('.video-modal__dialog');
        const closeElements = videoModal.querySelectorAll('[data-video-close]');
        const triggers = document.querySelectorAll('[data-video-trigger]');
        let lastFocusedTrigger = null;

        const buildVideoSrc = (base) => {
            if (!base) return '';
            const separator = base.includes('?') ? '&' : '?';
            return `${base}${separator}rel=0&modestbranding=1&autoplay=1`;
        };

        const openModal = (src, trigger) => {
            if (!modalFrame) return;
            lastFocusedTrigger = trigger;
            modalFrame.src = buildVideoSrc(src);
            videoModal.classList.add('is-active');
            videoModal.setAttribute('aria-hidden', 'false');
            document.body.classList.add('modal-open');
            requestAnimationFrame(() => modalDialog?.focus());
        };

        const closeModal = () => {
            if (!modalFrame) return;
            videoModal.classList.remove('is-active');
            videoModal.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('modal-open');
            modalFrame.src = '';
            lastFocusedTrigger?.focus();
            lastFocusedTrigger = null;
        };

        triggers.forEach((trigger) => {
            trigger.addEventListener('click', (event) => {
                const container = trigger.closest('[data-video-src]');
                const src = container?.getAttribute('data-video-src');
                if (!src) return;
                event.preventDefault();
                openModal(src, trigger);
            });
        });

        closeElements.forEach((element) => {
            element.addEventListener('click', closeModal);
        });

        window.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && videoModal.classList.contains('is-active')) {
                closeModal();
            }
        });
    }

    // Garmin Details Button - Opens in new tab
    const garminTrigger = document.querySelector('[data-garmin-details]');
    if (garminTrigger) {
        garminTrigger.addEventListener('click', () => {
            // Open Garmin Connect page in a new tab
            window.open('https://connect.garmin.com/modern/activity/20591906496', '_blank', 'noopener,noreferrer');
        });
    }

    const carousels = document.querySelectorAll('[data-carousel]');
    if (carousels.length) {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

        carousels.forEach((carousel, carouselIndex) => {
            const viewport = carousel.querySelector('[data-carousel-viewport]');
            const track = viewport?.querySelector('.carousel__track');
            const slides = track ? Array.from(track.children) : [];
            const prevButton = carousel.querySelector('[data-carousel-prev]');
            const nextButton = carousel.querySelector('[data-carousel-next]');
            const dotsContainer = carousel.querySelector('[data-carousel-dots]');
            const progressBar = carousel.querySelector('[data-carousel-progress]');
            const autoplayDelay = parseInt(carousel.getAttribute('data-carousel-autoplay') || '', 10);

            if (!viewport || !track || !slides.length) {
                return;
            }

            let currentIndex = 0;
            let autoplayTimer = null;
            const dots = [];

            if (progressBar) {
                progressBar.style.transform = 'scaleX(0)';
            }

            slides.forEach((slide, index) => {
                slide.setAttribute('aria-hidden', index === 0 ? 'false' : 'true');
                slide.dataset.carouselIndex = String(index);
                if (dotsContainer) {
                    const dot = document.createElement('button');
                    dot.type = 'button';
                    dot.className = 'carousel__dot';
                    dot.setAttribute('aria-label', `Mostrar imagen ${index + 1} de ${slides.length}`);
                    if (index === 0) {
                        dot.classList.add('is-active');
                        dot.setAttribute('aria-pressed', 'true');
                    } else {
                        dot.setAttribute('aria-pressed', 'false');
                    }

                    dot.addEventListener('click', () => {
                        if (currentIndex === index) return;
                        goToSlide(index);
                    });

                    dotsContainer.appendChild(dot);
                    dots.push(dot);
                }
            });

            const setSlidePosition = () => {
                track.style.transform = `translateX(-${currentIndex * 100}%)`;
            };

            const updateSlides = () => {
                slides.forEach((slide, index) => {
                    const isActive = index === currentIndex;
                    slide.classList.toggle('is-active', isActive);
                    slide.setAttribute('aria-hidden', isActive ? 'false' : 'true');
                });

                dots.forEach((dot, index) => {
                    const isActive = index === currentIndex;
                    dot.classList.toggle('is-active', isActive);
                    dot.setAttribute('aria-pressed', isActive ? 'true' : 'false');
                });
            };

            const resetProgress = () => {
                if (!progressBar) return;
                progressBar.style.transitionDuration = '0ms';
                progressBar.style.transform = 'scaleX(0)';
                void progressBar.offsetWidth;
            };

            const startProgress = () => {
                if (!progressBar) return;
                progressBar.style.transitionDuration = `${autoplayDelay}ms`;
                progressBar.style.transform = 'scaleX(1)';
            };

            const stopAutoplay = () => {
                if (autoplayTimer) {
                    window.clearTimeout(autoplayTimer);
                    autoplayTimer = null;
                }
                resetProgress();
            };

            const startAutoplay = () => {
                if (!autoplayDelay || Number.isNaN(autoplayDelay) || prefersReducedMotion.matches) {
                    stopAutoplay();
                    return;
                }

                stopAutoplay();
                requestAnimationFrame(() => {
                    startProgress();
                });

                autoplayTimer = window.setTimeout(() => {
                    goToSlide((currentIndex + 1) % slides.length, true);
                }, autoplayDelay);
            };

            const goToSlide = (index, fromAutoplay = false) => {
                const total = slides.length;
                const targetIndex = ((index % total) + total) % total;

                if (targetIndex === currentIndex && !fromAutoplay) {
                    return;
                }

                currentIndex = targetIndex;
                setSlidePosition();
                updateSlides();
                resetProgress();

                if (!fromAutoplay) {
                    startAutoplay();
                } else {
                    startAutoplay();
                }
            };

            setSlidePosition();
            updateSlides();
            startAutoplay();

            prevButton?.addEventListener('click', () => goToSlide(currentIndex - 1));
            nextButton?.addEventListener('click', () => goToSlide(currentIndex + 1));

            carousel.addEventListener('keydown', (event) => {
                if (event.key === 'ArrowRight') {
                    event.preventDefault();
                    goToSlide(currentIndex + 1);
                } else if (event.key === 'ArrowLeft') {
                    event.preventDefault();
                    goToSlide(currentIndex - 1);
                }
            });

            carousel.addEventListener('pointerenter', stopAutoplay);
            carousel.addEventListener('pointerleave', startAutoplay);
            carousel.addEventListener('focusin', stopAutoplay);
            carousel.addEventListener('focusout', (event) => {
                if (!carousel.contains(event.relatedTarget)) {
                    startAutoplay();
                }
            });

            prefersReducedMotion.addEventListener('change', (event) => {
                if (event.matches) {
                    stopAutoplay();
                } else {
                    startAutoplay();
                }
            });
        });
    }

    // Contact form submission to n8n
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const formMessage = contactForm.querySelector('.form-message');
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;

            // Disable button and show loading state
            submitButton.disabled = true;
            submitButton.textContent = 'Enviando...';

            // Get form data
            const formData = new FormData(contactForm);
            const data = {
                fecha: new Date().toISOString().split('T')[0], // Current date in YYYY-MM-DD format
                nombre: formData.get('nombre'),
                email: formData.get('email'),
                telefono: formData.get('telefono'),
                mensaje: formData.get('mensaje') || ''
            };

            try {
                const response = await fetch('https://n8n.automationbeast.win/webhook/914b6381-87d1-4b9b-a86e-391341abfaca', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });

                if (response.ok) {
                    formMessage.textContent = '¡Gracias! Tu mensaje ha sido enviado correctamente.';
                    formMessage.style.color = '#22c55e';
                    formMessage.style.display = 'block';
                    contactForm.reset();
                } else {
                    throw new Error('Error en la respuesta del servidor');
                }
            } catch (error) {
                formMessage.textContent = 'Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.';
                formMessage.style.color = '#ef4444';
                formMessage.style.display = 'block';
                console.error('Error:', error);
            } finally {
                // Re-enable button
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;

                // Hide message after 5 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 5000);
            }
        });
    }

    // Sticky CTA bar on scroll
    const stickyCta = document.querySelector('[data-sticky-cta]');
    if (stickyCta) {
        let lastScrollY = window.scrollY;
        let ticking = false;

        const updateStickyCta = () => {
            const scrollY = window.scrollY;
            const heroHeight = 800; // Show after scrolling past hero

            // Check if footer is in viewport
            const footer = document.querySelector('.site-footer');
            const footerRect = footer ? footer.getBoundingClientRect() : null;
            const isFooterVisible = footerRect && footerRect.top < window.innerHeight;

            if (scrollY > heroHeight && !isFooterVisible) {
                stickyCta.classList.add('is-visible');
                stickyCta.setAttribute('aria-hidden', 'false');
            } else {
                stickyCta.classList.remove('is-visible');
                stickyCta.setAttribute('aria-hidden', 'true');
            }

            lastScrollY = scrollY;
            ticking = false;
        };

        const requestTick = () => {
            if (!ticking) {
                window.requestAnimationFrame(updateStickyCta);
                ticking = true;
            }
        };

        window.addEventListener('scroll', requestTick, { passive: true });
        updateStickyCta(); // Check initial state
    }

    // Registration form submission with automatic PayPal redirection
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        const formMessage = registrationForm.querySelector('[data-form-message]');
        const submitButton = registrationForm.querySelector('[data-registration-button]');
        const buttonText = submitButton.querySelector('[data-button-text]');
        const buttonLoader = submitButton.querySelector('[data-button-loader]');
        const pricingInfo = registrationForm.querySelector('[data-pricing-info]');
        const priceDisplay = registrationForm.querySelector('[data-price-display]');

        registrationForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            // Validate form
            if (!registrationForm.checkValidity()) {
                registrationForm.reportValidity();
                return;
            }

            // Disable button and show loading state
            submitButton.disabled = true;
            buttonText.style.display = 'none';
            buttonLoader.style.display = 'inline';

            // Get form data
            const formData = new FormData(registrationForm);
            const data = {
                nombre: formData.get('nombre'),
                email: formData.get('email'),
                telefono: formData.get('telefono'),
                categoria: formData.get('categoria'),
                mensaje: formData.get('mensaje') || ''
            };

            try {
                const response = await fetch(N8N_WEBHOOK_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });

                const result = await response.json();

                if (response.ok && result.success) {
                    // Show price info before redirect
                    if (pricingInfo && priceDisplay) {
                        const priceTypeLabel = {
                            'early_bird': 'Early Bird',
                            'stage_2': 'Etapa 2',
                            'regular': 'Tarifa Regular'
                        }[result.priceType] || result.priceType;

                        priceDisplay.textContent = `USD $${result.price} (${priceTypeLabel})`;
                        pricingInfo.style.display = 'block';
                    }

                    // Show success message
                    formMessage.textContent = `¡Inscripción procesada! Serás redirigido a PayPal para completar el pago de USD $${result.price}. Número de factura: ${result.invoiceNumber}`;
                    formMessage.style.color = '#22c55e';
                    formMessage.style.display = 'block';

                    // Redirect to PayPal after 2 seconds
                    setTimeout(() => {
                        window.location.href = result.paypalUrl;
                    }, 2000);
                } else {
                    throw new Error(result.error || 'Error en la respuesta del servidor');
                }
            } catch (error) {
                formMessage.textContent = error.message || 'Hubo un error al procesar tu inscripción. Por favor, intenta nuevamente o contacta al equipo organizador.';
                formMessage.style.color = '#ef4444';
                formMessage.style.display = 'block';
                console.error('Error:', error);

                // Re-enable button
                submitButton.disabled = false;
                buttonText.style.display = 'inline';
                buttonLoader.style.display = 'none';

                // Hide message after 7 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 7000);
            }
        });
    }
});
