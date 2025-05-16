// Function to check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.bottom >= 0
    );
}

// Function to handle animations
function handleAnimations() {
    const animatedElements = document.querySelectorAll('.product-card, .reward-card, .story-content, .mission-values, .team-member, .location-card');
    
    animatedElements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('animate');
        }
    });
}

// Run animations on page load
document.addEventListener('DOMContentLoaded', () => {
    handleAnimations();
});

// Run animations on scroll
window.addEventListener('scroll', () => {
    handleAnimations();
}); 