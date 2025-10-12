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
});
