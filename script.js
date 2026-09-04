/* ==========================================================
   YOK BANGUN.ID — Interactive Script
   Carousel, Filters, Lightbox, Navbar & Mobile Navigation
   ========================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // ── 1. Navbar Scroll Effect & Active Highlighting ──
    const header = document.getElementById('header');
    const navItems = document.querySelectorAll('.nav-item');
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Active section on scroll
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
    }, { passive: true });

    // ── 2. Mobile Menu Toggle ──
    const navToggle = document.getElementById('navToggle');
    const mainNav = document.getElementById('mainNav');

    if (navToggle && mainNav) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
            document.body.style.overflow = mainNav.classList.contains('active') ? 'hidden' : '';
        });

        // Close menu on item click
        navItems.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }

    // ── 3. Selected Projects Carousel Slider ──
    const carouselTrack = document.getElementById('projectCarousel');
    const prevBtn = document.getElementById('prevSlide');
    const nextBtn = document.getElementById('nextSlide');

    if (carouselTrack && prevBtn && nextBtn) {
        let currentIndex = 0;

        function getVisibleSlides() {
            if (window.innerWidth <= 820) return 1;
            if (window.innerWidth <= 1100) return 2;
            return 3;
        }

        function updateCarousel() {
            const slides = carouselTrack.querySelectorAll('.project-slide');
            const totalSlides = slides.length;
            const visible = getVisibleSlides();
            const maxIndex = Math.max(0, totalSlides - visible);

            if (currentIndex > maxIndex) currentIndex = maxIndex;
            if (currentIndex < 0) currentIndex = 0;

            const slideWidth = slides[0].getBoundingClientRect().width;
            const gap = 28; // matches CSS gap
            const offset = currentIndex * (slideWidth + gap);
            carouselTrack.style.transform = `translateX(-${offset}px)`;

            // Button state styling
            prevBtn.style.opacity = currentIndex === 0 ? '0.4' : '1';
            nextBtn.style.opacity = currentIndex === maxIndex ? '0.4' : '1';
        }

        nextBtn.addEventListener('click', () => {
            const slides = carouselTrack.querySelectorAll('.project-slide');
            const visible = getVisibleSlides();
            const maxIndex = Math.max(0, slides.length - visible);
            if (currentIndex < maxIndex) {
                currentIndex++;
                updateCarousel();
            }
        });

        prevBtn.addEventListener('click', () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });

        window.addEventListener('resize', updateCarousel);
        updateCarousel();
    }

    // ── 4. Architectural Concepts Gallery Filter ──
    const filterTags = document.querySelectorAll('.filter-tag');
    const masonryItems = document.querySelectorAll('.masonry-item');

    filterTags.forEach(tag => {
        tag.addEventListener('click', () => {
            const filter = tag.getAttribute('data-filter');

            filterTags.forEach(t => t.classList.remove('active'));
            tag.classList.add('active');

            masonryItems.forEach(item => {
                const category = item.getAttribute('data-category');
                if (filter === 'all' || category === filter) {
                    item.classList.remove('hidden');
                } else {
                    item.classList.add('hidden');
                }
            });
        });
    });

    // ── 5. Lightbox Modal for Architectural Images (Gallery & Field Portfolio) ──
    const lightboxModal = document.getElementById('lightboxModal');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxCaption = document.getElementById('lightboxCaption');
    const lightboxClose = document.getElementById('lightboxClose');

    const zoomableElements = document.querySelectorAll('.masonry-card img, .mosaic-main img, .mosaic-thumb img');

    zoomableElements.forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', (e) => {
            e.stopPropagation();
            lightboxImage.src = img.src;
            lightboxCaption.textContent = img.alt || 'YOK BANGUN.ID Galeri Arsitektur';
            lightboxModal.classList.add('active');
            document.body.style.overflow = 'hidden';
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
            if (e.target === lightboxModal || e.target === lightboxClose) {
                closeLightbox();
            }
        });
    }

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightboxModal && lightboxModal.classList.contains('active')) {
            closeLightbox();
        }
    });

    // ── 6. Smooth Scrolling for Anchor Links ──
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    const headerHeight = header ? header.offsetHeight : 0;
                    const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - headerHeight;

                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

});
