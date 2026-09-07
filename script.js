/* ==========================================================
   YOKBANGUN.ID — Interactive Scripts
   Text Animations, Stacking Cards, Accordion, Slider & Lightbox
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ── 1. Varied & Silky Smooth Reveal Animations via Intersection Observer ──
    const revealElements = document.querySelectorAll(
        '.reveal-text, .reveal-mask, .reveal-tag, .reveal-quote, .reveal-card, .reveal-fade-up, .reveal-btn'
    );

    if ('IntersectionObserver' in window && revealElements.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -30px 0px'
        });

        revealElements.forEach(el => revealObserver.observe(el));
    } else {
        // Fallback for older browsers
        revealElements.forEach(el => el.classList.add('revealed'));
    }

    // ── 2. Navbar Scroll Effect & Active Highlight ──
    const header = document.getElementById('header');
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section[id]');

    function handleNavbarScroll() {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        const scrollPosition = window.scrollY + 200;
        sections.forEach(sec => {
            const top = sec.offsetTop;
            const height = sec.offsetHeight;
            const id = sec.getAttribute('id');
            if (scrollPosition >= top && scrollPosition < top + height) {
                navItems.forEach(item => {
                    item.classList.remove('active');
                    if (item.getAttribute('href') === `#${id}`) {
                        item.classList.add('active');
                    }
                });
            }
        });
    }

    window.addEventListener('scroll', handleNavbarScroll, { passive: true });
    handleNavbarScroll();

    // ── 3. Mobile Nav Drawer Toggle ──
    const navToggle = document.getElementById('navToggle');
    const mainNav = document.getElementById('mainNav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
            document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
        });

        navItems.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });

        document.addEventListener('click', (e) => {
            if (mainNav.classList.contains('active') && !mainNav.contains(e.target) && !navToggle.contains(e.target)) {
                navToggle.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // ── 4. Stacking Cards GSAP ScrollTrigger ──
    const stackCards = document.querySelectorAll('.project-item-card');

    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches && window.innerWidth > 860) {
            stackCards.forEach((card) => {
                gsap.from(card, {
                    scale: 0.94,
                    opacity: 0.45,
                    ease: 'none',
                    scrollTrigger: {
                        trigger: card,
                        start: 'top 92%',
                        end: 'top 48%',
                        scrub: true
                    }
                });
            });
        }
    }

    // Whole card click navigation to its project detail page (Mecasa UX)
    stackCards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (e.target.closest('a') || e.target.closest('.project-thumb-box')) return;
            const link = card.querySelector('.project-action-link');
            if (link && link.href) {
                window.location.href = link.href;
            }
        });
    });

    // ── 5. Horizontal Expanding Accordion Cards (Services) ──
    const serviceCards = document.querySelectorAll('.service-card');

    if (serviceCards.length > 0) {
        serviceCards.forEach(card => {
            // Hover interaction (for mouse/desktop)
            card.addEventListener('mouseenter', () => {
                if (window.innerWidth > 860) {
                    serviceCards.forEach(c => c.classList.remove('active'));
                    card.classList.add('active');
                }
            });

            // Click / Tap interaction (for tablet & mobile)
            card.addEventListener('click', () => {
                serviceCards.forEach(c => c.classList.remove('active'));
                card.classList.add('active');
            });

            // Accessibility: Enter or Space key
            card.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    serviceCards.forEach(c => c.classList.remove('active'));
                    card.classList.add('active');
                }
            });
        });
    }


    // ── 7. Architectural Gallery Category Filter ──
    const filterBtns = document.querySelectorAll('.filter-btn');
    const galleryCards = document.querySelectorAll('.gallery-card');

    if (filterBtns.length > 0 && galleryCards.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filterVal = btn.getAttribute('data-filter');
                galleryCards.forEach(card => {
                    const category = card.getAttribute('data-category');
                    if (filterVal === 'all' || category === filterVal) {
                        card.classList.remove('hidden');
                    } else {
                        card.classList.add('hidden');
                    }
                });
            });
        });
    }

    // ── 8. Lightbox Modal for Gallery Images ──
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImg = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');

    const zoomTriggers = document.querySelectorAll('.gallery-card, .project-thumb-box');

    zoomTriggers.forEach(item => {
        item.addEventListener('click', (e) => {
            // Prevent triggering lightbox if clicked an action button or link
            if (e.target.closest('a') || e.target.closest('button')) {
                return;
            }

            const img = item.querySelector('img');
            if (img && lightboxModal && lightboxImg) {
                lightboxImg.src = img.src;
                const captionTitle = item.querySelector('h4, .project-item-title');
                const captionSub = item.querySelector('.gallery-caption span, .project-location-meta');
                
                let captionText = img.alt || 'YOK BANGUN.ID Arsitektur & Konstruksi';
                if (captionTitle) {
                    captionText = captionTitle.textContent;
                    if (captionSub) {
                        captionText += ` — ${captionSub.textContent}`;
                    }
                }

                if (lightboxCaption) {
                    lightboxCaption.textContent = captionText;
                }

                lightboxModal.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    function closeLightbox() {
        if (lightboxModal) {
            lightboxModal.classList.remove('active');
            document.body.style.overflow = '';
        }
    }

    if (lightboxClose) {
        lightboxClose.addEventListener('click', closeLightbox);
    }

    if (lightboxModal) {
        lightboxModal.addEventListener('click', (e) => {
            if (e.target === lightboxModal) {
                closeLightbox();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('active')) {
            closeLightbox();
        }
    });

    // ── 9. Smooth Scrolling for Anchor Links with Header Offset ──
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetEl = document.querySelector(targetId);
                if (targetEl) {
                    e.preventDefault();
                    const headerHeight = header ? header.offsetHeight : 0;
                    const elPos = targetEl.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPos = elPos - headerHeight;

                    window.scrollTo({
                        top: offsetPos,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

});
