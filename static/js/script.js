/**
 * MedAxis Landing Page - JavaScript
 * Handles mobile menu, services slider, and contact form
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all modules
    initMobileMenu();
    initServicesSlider();
    initContactForm();
    initSmoothScroll();
    initHeaderScroll();
});

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const burgerBtn = document.getElementById('burgerBtn');
    const navMenu = document.getElementById('navMenu');

    if (!burgerBtn || !navMenu) return;

    burgerBtn.addEventListener('click', () => {
        burgerBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            burgerBtn.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!burgerBtn.contains(e.target) && !navMenu.contains(e.target)) {
            burgerBtn.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

/**
 * Services Slider
 */
function initServicesSlider() {
    const slider = document.getElementById('servicesSlider');
    const track = slider?.querySelector('.services__track');
    const prevBtn = document.getElementById('sliderPrev');
    const nextBtn = document.getElementById('sliderNext');
    const currentSlideEl = document.getElementById('currentSlide');
    const totalSlidesEl = document.getElementById('totalSlides');

    if (!slider || !track || !prevBtn || !nextBtn) return;

    const cards = track.querySelectorAll('.service-card');
    let currentIndex = 0;
    let cardsPerView = getCardsPerView();
    const totalSlides = cards.length;

    // Update total slides display
    if (totalSlidesEl) {
        totalSlidesEl.textContent = String(totalSlides).padStart(2, '0');
    }

    function getCardsPerView() {
        if (window.innerWidth <= 768) return 1;
        if (window.innerWidth <= 1024) return 1;
        return 2;
    }

    function updateSlider() {
        const cardWidth = cards[0].offsetWidth;
        const gap = parseInt(getComputedStyle(track).gap) || 24;
        const offset = currentIndex * (cardWidth + gap);

        track.style.transform = `translateX(-${offset}px)`;

        // Update counter
        if (currentSlideEl) {
            currentSlideEl.textContent = String(currentIndex + 1).padStart(2, '0');
        }

        // Update button states
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= totalSlides - cardsPerView;

        prevBtn.style.opacity = currentIndex === 0 ? '0.5' : '1';
        nextBtn.style.opacity = currentIndex >= totalSlides - cardsPerView ? '0.5' : '1';
    }

    function goToNext() {
        if (currentIndex < totalSlides - cardsPerView) {
            currentIndex++;
            updateSlider();
        }
    }

    function goToPrev() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlider();
        }
    }

    prevBtn.addEventListener('click', goToPrev);
    nextBtn.addEventListener('click', goToNext);

    // Handle window resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            cardsPerView = getCardsPerView();
            currentIndex = Math.min(currentIndex, totalSlides - cardsPerView);
            updateSlider();
        }, 100);
    });

    // Touch/swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    slider.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    slider.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (diff > swipeThreshold) {
            goToNext();
        } else if (diff < -swipeThreshold) {
            goToPrev();
        }
    }

    // Initial update
    updateSlider();
}

/**
 * Contact Form Handler
 */
function initContactForm() {
    const form = document.getElementById('contactForm');
    const phoneInput = document.getElementById('phone');

    if (!form) return;

    // Phone mask
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            let value = e.target.value.replace(/\D/g, '');

            // Remove leading 7 or 8 if exists
            if (value.startsWith('7') || value.startsWith('8')) {
                value = value.substring(1);
            }

            let formatted = '+7 ';

            if (value.length > 0) {
                formatted += '(' + value.substring(0, 3);
            }
            if (value.length >= 3) {
                formatted += ') ' + value.substring(3, 6);
            }
            if (value.length >= 6) {
                formatted += '-' + value.substring(6, 8);
            }
            if (value.length >= 8) {
                formatted += '-' + value.substring(8, 10);
            }

            e.target.value = formatted;
        });

        // Set initial value
        phoneInput.addEventListener('focus', (e) => {
            if (!e.target.value) {
                e.target.value = '+7 ';
            }
        });
    }

    // Form submission
    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        // Basic validation
        if (!data.name || !data.phone || !data.consent) {
            showNotification('Пожалуйста, заполните все обязательные поля', 'error');
            return;
        }

        // Validate phone number
        const phoneDigits = data.phone.replace(/\D/g, '');
        if (phoneDigits.length < 11) {
            showNotification('Введите корректный номер телефона', 'error');
            return;
        }

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        try {
            submitBtn.disabled = true;
            submitBtn.textContent = 'Отправка...';

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));

            // Success
            showNotification('Спасибо! Ваша заявка отправлена. Мы свяжемся с вами в ближайшее время.', 'success');
            form.reset();

        } catch (error) {
            showNotification('Произошла ошибка. Попробуйте еще раз.', 'error');
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
}

/**
 * Show notification message
 */
function showNotification(message, type = 'info') {
    // Remove existing notification
    const existing = document.querySelector('.notification');
    if (existing) {
        existing.remove();
    }

    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.innerHTML = `
        <span>${message}</span>
        <button class="notification__close" aria-label="Закрыть">&times;</button>
    `;

    // Add styles dynamically
    notification.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        max-width: 400px;
        padding: 16px 20px;
        background-color: ${type === 'success' ? '#6B9B7A' : type === 'error' ? '#C66B54' : '#4A403A'};
        color: white;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        display: flex;
        align-items: center;
        gap: 12px;
        z-index: 10000;
        animation: slideIn 0.3s ease;
    `;

    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);

    document.body.appendChild(notification);

    // Close button
    const closeBtn = notification.querySelector('.notification__close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 24px;
        cursor: pointer;
        padding: 0;
        line-height: 1;
        opacity: 0.8;
    `;

    closeBtn.addEventListener('click', () => {
        notification.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => notification.remove(), 300);
    });

    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

/**
 * Smooth scroll for anchor links
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerHeight = document.getElementById('header')?.offsetHeight || 0;
                const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Header scroll effect
 */
function initHeaderScroll() {
    const header = document.getElementById('header');
    if (!header) return;

    let lastScroll = 0;
    const scrollThreshold = 100;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Add/remove shadow based on scroll position
        if (currentScroll > 10) {
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.boxShadow = '0 1px 2px rgba(0,0,0,0.05)';
        }

        // Optional: Hide/show header on scroll
        // Uncomment below for hide-on-scroll behavior
        /*
        if (currentScroll > lastScroll && currentScroll > scrollThreshold) {
            header.style.transform = 'translateY(-100%)';
        } else {
            header.style.transform = 'translateY(0)';
        }
        */

        lastScroll = currentScroll;
    }, { passive: true });
}
