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
});
