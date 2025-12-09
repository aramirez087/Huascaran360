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

    // Wizard Form Logic
    const wizardForm = document.querySelector('.wizard-form');
    if (wizardForm) {
        const steps = wizardForm.querySelectorAll('.wizard-step');
        const progressSteps = wizardForm.querySelectorAll('.wizard-progress__step');
        const nextButtons = wizardForm.querySelectorAll('[data-wizard-next]');
        const prevButtons = wizardForm.querySelectorAll('[data-wizard-prev]');
        let currentStep = 1;
        const totalSteps = steps.length;

        // Initialize progress attribute
        wizardForm.setAttribute('data-wizard-progress', '1');

        // Validate current step fields
        const validateStep = (stepNumber) => {
            const currentStepEl = wizardForm.querySelector(`[data-wizard-step="${stepNumber}"]`);
            if (!currentStepEl) return true;

            const requiredFields = currentStepEl.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach(field => {
                const formField = field.closest('.form-field');

                // Remove previous error state
                if (formField) {
                    formField.classList.remove('has-error');
                }

                if (!field.value || (field.type === 'select-one' && !field.value)) {
                    isValid = false;
                    if (formField) {
                        formField.classList.add('has-error');
                    }
                }

                // Email validation
                if (field.type === 'email' && field.value) {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(field.value)) {
                        isValid = false;
                        if (formField) {
                            formField.classList.add('has-error');
                        }
                    }
                }
            });

            return isValid;
        };

        // Go to a specific step
        const goToStep = (targetStep, direction = 'forward') => {
            if (targetStep < 1 || targetStep > totalSteps) return;

            // Validate before going forward
            if (direction === 'forward' && !validateStep(currentStep)) {
                // Shake animation for invalid step
                const currentStepEl = wizardForm.querySelector(`[data-wizard-step="${currentStep}"]`);
                currentStepEl.style.animation = 'none';
                currentStepEl.offsetHeight; // Trigger reflow
                currentStepEl.style.animation = 'shake 0.5s ease';
                return;
            }

            // Update step visibility
            steps.forEach((step, index) => {
                const stepNumber = index + 1;
                if (stepNumber === targetStep) {
                    step.classList.add('is-active');
                } else {
                    step.classList.remove('is-active');
                }
            });

            // Update progress indicator
            progressSteps.forEach((progressStep, index) => {
                const stepNumber = index + 1;
                progressStep.classList.remove('is-active', 'is-completed');

                if (stepNumber < targetStep) {
                    progressStep.classList.add('is-completed');
                } else if (stepNumber === targetStep) {
                    progressStep.classList.add('is-active');
                }
            });

            // Update progress bar
            wizardForm.setAttribute('data-wizard-progress', String(targetStep));
            currentStep = targetStep;

            // Scroll to form top smoothly
            wizardForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };

        // Add shake animation for validation errors
        const shakeStyle = document.createElement('style');
        shakeStyle.textContent = `
            @keyframes shake {
                0%, 100% { transform: translateX(0); }
                10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
                20%, 40%, 60%, 80% { transform: translateX(5px); }
            }
        `;
        document.head.appendChild(shakeStyle);

        // Next button handlers
        nextButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                goToStep(currentStep + 1, 'forward');
            });
        });

        // Previous button handlers
        prevButtons.forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                goToStep(currentStep - 1, 'backward');
            });
        });

        // Click on progress step (only for completed steps)
        progressSteps.forEach((progressStep, index) => {
            progressStep.addEventListener('click', () => {
                const targetStep = index + 1;
                // Only allow going back to completed steps
                if (targetStep < currentStep) {
                    goToStep(targetStep, 'backward');
                }
            });
            // Add cursor pointer for completed steps
            progressStep.style.cursor = 'pointer';
        });

        // Clear error on input change
        wizardForm.addEventListener('input', (e) => {
            const formField = e.target.closest('.form-field');
            if (formField && formField.classList.contains('has-error')) {
                if (e.target.value) {
                    formField.classList.remove('has-error');
                }
            }
        });

        // Handle Enter key to advance
        wizardForm.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && e.target.tagName !== 'TEXTAREA') {
                e.preventDefault();
                if (currentStep < totalSteps) {
                    goToStep(currentStep + 1, 'forward');
                }
            }
        });
    }

    // Contact form submission to /api/contact
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

            try {
                // Get form data
                const formData = new FormData(contactForm);

                // Handle File Upload (Step 5)
                const fileInput = contactForm.querySelector('input[type="file"]');
                let comprobanteData = null;

                if (fileInput && fileInput.files.length > 0) {
                    const file = fileInput.files[0];

                    // Simple size check (4MB limit)
                    if (file.size > 4 * 1024 * 1024) {
                        throw new Error('El archivo es demasiado grande. Máximo 4MB.');
                    }

                    // Convert to Base64
                    const toBase64 = (file) => new Promise((resolve, reject) => {
                        const reader = new FileReader();
                        reader.readAsDataURL(file);
                        reader.onload = () => resolve(reader.result);
                        reader.onerror = error => reject(error);
                    });

                    comprobanteData = await toBase64(file);
                } else if (fileInput && fileInput.hasAttribute('required')) {
                    throw new Error('Por favor sube el comprobante de pago.');
                }

                const data = {
                    // Personal Data
                    nombre: formData.get('nombre'),
                    id_document: formData.get('id_document'),
                    fecha_nacimiento: formData.get('fecha_nacimiento') || null,
                    sexo: formData.get('sexo'),
                    nacionalidad: formData.get('nacionalidad'),
                    direccion: formData.get('direccion') || '',
                    telefono: formData.get('telefono'),
                    email: formData.get('email'),
                    // Race Data
                    equipo: formData.get('equipo') || '',
                    numero_placa: formData.get('numero_placa') || '',
                    talla_camiseta: formData.get('talla_camiseta'),
                    tipo_sangre: formData.get('tipo_sangre'),
                    // Emergency Contact
                    contacto_emergencia: formData.get('contacto_emergencia'),
                    telefono_emergencia: formData.get('telefono_emergencia'),
                    // Other
                    autorizacion_imagen: formData.get('autorizacion_imagen') === 'true',
                    redes_sociales: formData.get('redes_sociales') || '',
                    mensaje: formData.get('mensaje') || '',
                    // Payment Proof
                    comprobante: comprobanteData
                };

                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });

                const result = await response.json();

                if (response.ok && result.success) {
                    formMessage.textContent = '¡Gracias! Tu inscripción ha sido recibida correctamente. Te contactaremos pronto.';
                    formMessage.style.color = '#22c55e';
                    formMessage.style.display = 'block';
                    contactForm.reset();

                    // Reset wizard to step 1
                    if (typeof goToStep === 'function') {
                        window.location.reload(); // Simplest way to reset wizard state completely
                    }
                } else {
                    throw new Error(result.error || 'Error en la respuesta del servidor');
                }
            } catch (error) {
                formMessage.textContent = error.message || 'Hubo un error al enviar la inscripción. Por favor, intenta nuevamente.';
                formMessage.style.color = '#ef4444';
                formMessage.style.display = 'block';
                console.error('Contact form error:', error);
            } finally {
                // Re-enable button
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;

                // Hide message after 8 seconds
                setTimeout(() => {
                    formMessage.style.display = 'none';
                }, 8000);
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
                // Use Vercel API endpoint instead of n8n
                const response = await fetch('/api/register', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });

                const result = await response.json();

                if (response.ok && result.success) {
                    // Show price info
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
                    formMessage.innerHTML = `
                        <strong>¡Inscripción exitosa! 🎉</strong><br><br>
                        <strong>Número de registro:</strong> ${result.invoiceNumber}<br>
                        <strong>Monto:</strong> USD $${result.price}<br><br>
                        En los próximos días recibirás un email con las instrucciones de pago.<br>
                        Por favor revisa tu bandeja de entrada (y spam).<br><br>
                        <strong>Email de confirmación enviado a:</strong> ${result.email}
                    `;
                    formMessage.style.color = '#22c55e';
                    formMessage.style.display = 'block';

                    // Reset form
                    registrationForm.reset();

                    // Re-enable button
                    submitButton.disabled = false;
                    buttonText.style.display = 'inline';
                    buttonLoader.style.display = 'none';
                } else {
                    // Show detailed error for debugging
                    const errorDetails = result.details ? `\n\nDetalles: ${result.details}\n\n${result.stack || ''}` : '';
                    throw new Error((result.error || 'Error en la respuesta del servidor') + errorDetails);
                }
            } catch (error) {
                // Show full error message for debugging
                formMessage.textContent = error.message || 'Hubo un error al procesar tu inscripción. Por favor, intenta nuevamente o contacta al equipo organizador.';
                formMessage.style.color = '#ef4444';
                formMessage.style.display = 'block';
                formMessage.style.whiteSpace = 'pre-wrap'; // Show line breaks

                // Also log to console
                console.error('Registration error:', error);

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
