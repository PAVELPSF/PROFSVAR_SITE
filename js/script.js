document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll("a[href^=\"#\"]").forEach(function(anchor) {
        anchor.addEventListener("click", function(e) { e.preventDefault(); var t=this.getAttribute("href"),o=document.querySelector(t); if(o){o.scrollIntoView({behavior:"smooth"})}})});
    var o=new IntersectionObserver(function(e){e.forEach(function(e){if(e.isIntersecting){e.target.style.opacity=1,e.target.style.transform="translateY(0)"})},{threshold:.2});
    document.querySelectorAll(".product-card,.hero-stats,.section-title").forEach(function(e){e.style.opacity=0,e.style.transform="translateY(20px)",e.style.transition="all .6s ease",o.observe(e)})
});