 // Toggle mobile menu
        function toggleNav() {
            const navLinks = document.getElementsByClassName('nav-links');
            navLinks.classList.toggle('active');
        }

        // Smooth scroll for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
                if (window.innerWidth < 768) {
                    toggleNav();
                }
            });
        });

        // Intersection Observer for scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    if(entry.target.classList.contains('game-card')) {
                        entry.target.style.transitionDelay = `${entry.target.dataset.delay || 0}s`;
                    }
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -50px 0px'
        });

        // Observe all sections and components
        document.querySelectorAll('section, .game-card, .contributors').forEach(el => {
            observer.observe(el);
        });

        // Initial load animations
        window.addEventListener('load', () => {
            document.querySelectorAll('#home h1, #home p').forEach(el => {
                el.style.opacity = '1';
            });
        });