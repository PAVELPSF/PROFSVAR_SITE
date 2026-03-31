document.addEventListener('DOMContentLoaded', function() {
    
    // Header Scrolled Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
    
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.getElementById('navLinks');
    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', function() {
            const isOpen = this.innerHTML === '✕';
            this.innerHTML = isOpen ? '☰' : '✕';
            if (!isOpen) {
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '100%';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.background = 'rgba(255,255,255,0.98)';
                navLinks.style.padding = '32px 24px';
                navLinks.style.boxShadow = '0 8px 32px rgba(0,0,0,0.15)';
                navLinks.style.zIndex = '1001';
            }
        });
    }
    
    // Product Filter
    const tabBtns = document.querySelectorAll('.tab-btn');
    const productCards = document.querySelectorAll('.product-card');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            tabBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            const filter = this.dataset.filter || 'all';
            productCards.forEach(card => {
                const categories = card.dataset.category.split(',');
                if (filter === 'all' || categories.includes(filter)) {
                    card.classList.add('active');
                    card.style.display = 'block';
                    setTimeout(() => { card.style.opacity = '1'; }, 50);
                } else {
                    card.classList.remove('active');
                    card.style.opacity = '0';
                    setTimeout(() => { card.style.display = 'none'; }, 300);
                }
            });
        });
    });
    
    // Counter Animation
    const counters = document.querySelectorAll('.counter-value');
    let countersAnimated = false;
    function animateCounters() {
        const section = document.querySelector('.hero-counters');
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100 && !countersAnimated) {
            counters.forEach(counter => {
                const target = parseInt(counter.dataset.target);
                const duration = 2000;
                const increment = target / (duration / 16);
                let current = 0;
                const updateCounter = function() {
                    current += increment;
                    if (current < target) {
                        counter.innerText = Math.ceil(current);
                        requestAnimationFrame(updateCounter);
                    } else {
                        counter.innerText = target;
                    }
                };
                updateCounter();
            });
            countersAnimated = true;
        }
    };
    window.addEventListener('scroll', animateCounters);
    
    // FAQ Accordion
    const faqBtns = document.querySelectorAll('.faq-btn');
    faqBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const item = this.parentElement;
            const isOpen = item.getAttribute('aria-expanded') === 'true';
            faqBtns.forEach(b => {
                if (this !== b) b.parentElement.setAttribute('aria-expanded', 'false');
            });
            if (!isOpen) {
                item.setAttribute('aria-expanded', 'true');
            }
        });
    });
    
    // Smooth Scroll for Anchors
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const target = document.querySelector(targetId);
            if (target) {
                const headerHeight = header.getBoundingClientRect().height;
                const targetPosition = target.getBoundingClientRect().top;
                const offsetPosition = targetPosition + window.pageYOffset - headerHeight - 20;
                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
            }
        });
    });
    
    // Scroll to Top Button
    const scrollBtn = document.getElementById('scrollToTop');
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 500) {
            scrollBtn.style.display = 'flex';
        } else {
            scrollBtn.style.display = 'none';
        }
    });
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    // Contact Form
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const btn = this.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            btn.textContent = 'Отправка...';
            btn.disabled = true;
            setTimeout(() => {
                alert('Ваша заявка отправлена! Мы свяжемся с вами в ближайшее время.');
                this.reset();
                btn.textContent = originalText;
                btn.disabled = false;
            }, 1500);
        });
    }
    
    console.log('QVAZAR Landing Page initialized');
});