// Menu data
const menuItems = [
    {
        name: 'Classic Espresso',
        category: 'espresso',
        price: 'Rp 35.000',
        image: 'images/espresso.jpg',
        description: 'Rich and bold espresso shot'
    },
    {
        name: 'Caramel Latte',
        category: 'espresso',
        price: 'Rp 45.000',
        image: 'images/caramel-latte.jpg',
        description: 'Smooth espresso with caramel and steamed milk'
    },
    {
        name: 'Cold Brew',
        category: 'brewed',
        price: 'Rp 42.000',
        image: 'images/cold-brew.jpg',
        description: 'Slow-steeped coffee for a smooth taste'
    },
    {
        name: 'Cappuccino',
        category: 'espresso',
        price: 'Rp 40.000',
        image: 'images/cappuccino.jpg',
        description: 'Perfect balance of espresso, steamed milk, and foam'
    },
    {
        name: 'Mocha',
        category: 'espresso',
        price: 'Rp 45.000',
        image: 'images/mocha.jpg',
        description: 'Rich chocolate and espresso blend'
    },
    {
        name: 'Pour Over',
        category: 'brewed',
        price: 'Rp 45.000',
        image: 'images/pour-over.jpg',
        description: 'Handcrafted pour over coffee'
    },
    {
        name: 'Caramel Frappe',
        category: 'frappe',
        price: 'Rp 52.000',
        image: 'images/caramel-frappe.jpg',
        description: 'Blended coffee with caramel and whipped cream'
    },
    {
        name: 'Mocha Frappe',
        category: 'frappe',
        price: 'Rp 52.000',
        image: 'images/mocha-frappe.jpg',
        description: 'Blended coffee with chocolate and whipped cream'
    },
    {
        name: 'Croissant',
        category: 'bread',
        price: 'Rp 35.000',
        image: 'images/croissant.jpg',
        description: 'Buttery, flaky pastry'
    },
    {
        name: 'Chocolate Muffin',
        category: 'bread',
        price: 'Rp 32.000',
        image: 'images/chocolate-muffin.jpg',
        description: 'Rich chocolate muffin'
    }
];

// DOM Elements
const menuGrid = document.querySelector('.menu-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

// Populate menu items
function populateMenu(category = 'all') {
    menuGrid.innerHTML = '';
    
    const filteredItems = category === 'all' 
        ? menuItems 
        : menuItems.filter(item => item.category === category);
    
    filteredItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.className = 'menu-item animate';
        menuItem.innerHTML = `
            <div class="menu-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>${item.description}</p>
                <div class="menu-item-footer">
                    <span class="price">${item.price}</span>
                    <a href="order.html" class="order-btn">Order Now</a>
                </div>
            </div>
        `;
        menuGrid.appendChild(menuItem);
    });

    // Scroll to menu section smoothly
    const menuSection = document.querySelector('.menu-items');
    menuSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// Filter functionality
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked button
        btn.classList.add('active');
        // Filter menu items
        populateMenu(btn.dataset.category);
    });
});

// Initialize menu
document.addEventListener('DOMContentLoaded', () => {
    populateMenu();
}); 