// About page specific animations
document.addEventListener('DOMContentLoaded', () => {
    // Initialize animations
    const animateElements = () => {
        const elements = document.querySelectorAll('.story-content, .mission-values, .value-card, .team-member, .location-card');
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;
            
            if (elementTop < window.innerHeight && elementBottom > 0) {
                element.classList.add('animate');
            }
        });
    };

    // Run animations on scroll and load
    window.addEventListener('scroll', animateElements);
    window.addEventListener('load', animateElements);

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}); 