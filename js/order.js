// Form elements
const orderForm = document.getElementById('orderForm');
const totalPriceElement = document.getElementById('totalPrice');

// Price configuration
const prices = {
    espresso: 3.99,
    latte: 4.99,
    'cold-brew': 4.49,
    cappuccino: 4.29,
    mocha: 4.79,
    'extra-shot': 1.00,
    'whipped-cream': 0.50,
    'caramel-syrup': 0.50
};

// Validation functions
function validateName(name) {
    if (name.length < 2) {
        return 'Name must be at least 2 characters long';
    }
    if (name.length > 50) {
        return 'Name must be less than 50 characters';
    }
    if (!/^[a-zA-Z\s]*$/.test(name)) {
        return 'Name can only contain letters and spaces';
    }
    return '';
}

function validateEmail(email) {
    if (!email.includes('@')) {
        return 'Please enter a valid email address';
    }
    if (!email.includes('.')) {
        return 'Please enter a valid email address';
    }
    if (email.length > 100) {
        return 'Email must be less than 100 characters';
    }
    return '';
}

function validatePhone(phone) {
    if (phone.length < 10) {
        return 'Phone number must be at least 10 digits';
    }
    if (phone.length > 15) {
        return 'Phone number must be less than 15 digits';
    }
    if (!/^[0-9+\-() ]*$/.test(phone)) {
        return 'Phone number can only contain numbers, +, -, (, ), and spaces';
    }
    return '';
}

function validateAddress(address) {
    if (address.length < 10) {
        return 'Please enter a complete address';
    }
    if (address.length > 200) {
        return 'Address must be less than 200 characters';
    }
    return '';
}

function validateCoffee(coffee) {
    if (!coffee) {
        return 'Please select a coffee';
    }
    return '';
}

// Update total price
function updateTotalPrice() {
    const coffeeSelect = document.getElementById('coffee');
    const addons = document.querySelectorAll('input[name="addons"]:checked');
    
    let total = 0;
    
    // Add coffee price
    if (coffeeSelect.value) {
        total += prices[coffeeSelect.value];
    }
    
    // Add add-ons prices
    addons.forEach(addon => {
        total += prices[addon.value];
    });
    
    totalPriceElement.textContent = `$${total.toFixed(2)}`;
}

// Add event listeners for price updates
document.getElementById('coffee').addEventListener('change', updateTotalPrice);
document.querySelectorAll('input[name="addons"]').forEach(addon => {
    addon.addEventListener('change', updateTotalPrice);
});

// Form submission
orderForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const coffee = document.getElementById('coffee').value;
    
    // Validate all fields
    const nameError = validateName(name);
    const emailError = validateEmail(email);
    const phoneError = validatePhone(phone);
    const addressError = validateAddress(address);
    const coffeeError = validateCoffee(coffee);
    
    // Display errors if any
    document.querySelector('#name + .error-message').textContent = nameError;
    document.querySelector('#email + .error-message').textContent = emailError;
    document.querySelector('#phone + .error-message').textContent = phoneError;
    document.querySelector('#address + .error-message').textContent = addressError;
    document.querySelector('#coffee + .error-message').textContent = coffeeError;
    
    // If no errors, submit the form
    if (!nameError && !emailError && !phoneError && !addressError && !coffeeError) {
        // Here you would typically send the form data to a server
        alert('Order placed successfully! Thank you for choosing MR.COFFEE.');
        orderForm.reset();
        updateTotalPrice();
    }
});

// Real-time validation
document.getElementById('name').addEventListener('input', function() {
    const error = validateName(this.value);
    this.nextElementSibling.textContent = error;
});

document.getElementById('email').addEventListener('input', function() {
    const error = validateEmail(this.value);
    this.nextElementSibling.textContent = error;
});

document.getElementById('phone').addEventListener('input', function() {
    const error = validatePhone(this.value);
    this.nextElementSibling.textContent = error;
});

document.getElementById('address').addEventListener('input', function() {
    const error = validateAddress(this.value);
    this.nextElementSibling.textContent = error;
});

document.getElementById('coffee').addEventListener('change', function() {
    const error = validateCoffee(this.value);
    this.nextElementSibling.textContent = error;
}); 