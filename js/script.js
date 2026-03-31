document.addEventListener("DOMContentLoaded", function() {
    // Плавный скролл по якорным ссылкам
    document.querySelectorAll("a[href^=\"#\"]").forEach(function(anchor) {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            var target = document.querySelector(this.getAttribute("href"));
            if (target) {
                var headerOffset = 70;
                var position = target.getBoundingClientRect().top;
                window.scrollTo({
                    top: position + window.pageYOffset - headerOffset,
                    behavior: "smooth"
                });
            }
        });
    });

    // Плавное появление элементов при прокрутке
    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, {threshold: 0.1});

    document.querySelectorAll(".product-card, .hero-stats, .section-title").forEach(function(el) {
        el.style.opacity = 0;
        el.style.transform = "translateY(20px)";
        el.style.transition = "all 0.6s ease";
        observer.observe(el);
    });
});