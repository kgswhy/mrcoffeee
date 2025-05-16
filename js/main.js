// Mobile Menu Functionality
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');
const header = document.querySelector('.header');

// Toggle mobile menu
mobileMenuBtn.addEventListener('click', () => {
    mobileMenuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenuBtn.contains(e.target) && !navLinks.contains(e.target)) {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// Header scroll behavior
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

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

// Product data for Most Ordered section
const products = [
    {
        name: 'Classic Espresso',
        price: 'Rp 35.000',
        image: 'images/espresso.jpg',
        description: 'Rich and bold espresso shot'
    },
    {
        name: 'Caramel Latte',
        price: 'Rp 45.000',
        image: 'images/caramel-latte.jpg',
        description: 'Smooth espresso with caramel and steamed milk'
    },
    {
        name: 'Cold Brew',
        price: 'Rp 42.000',
        image: 'images/cold-brew.jpg',
        description: 'Slow-steeped coffee for a smooth taste'
    },
    {
        name: 'Cappuccino',
        price: 'Rp 40.000',
        image: 'images/cappuccino.jpg',
        description: 'Perfect balance of espresso, steamed milk, and foam'
    },
    {
        name: 'Mocha',
        price: 'Rp 45.000',
        image: 'images/mocha.jpg',
        description: 'Rich chocolate and espresso blend'
    }
];

// Populate Most Ordered section
const productGrid = document.querySelector('.product-grid');
if (productGrid) {
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <span class="price">${product.price}</span>
            <a href="menu.html" class="cta-button">View Details</a>
        `;
        productGrid.appendChild(productCard);
    });
}

// Add animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.product-card, .ceo-content, .rewards-content, .mission-values, .value-card, .story-content, .team-member, .location-card');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll); 