// Form validation functions
function validateName(name) {
    // Name must contain at least 2 words
    const words = name.trim().split(/\s+/);
    if (words.length < 2) {
        return {
            isValid: false,
            message: 'Name must contain at least first and last name'
        };
    }
    return { isValid: true };
}

function validateEmail(email) {
    // Basic email validation without regex
    const atIndex = email.indexOf('@');
    const dotIndex = email.lastIndexOf('.');
    
    if (atIndex === -1 || dotIndex === -1) {
        return {
            isValid: false,
            message: 'Please enter a valid email address'
        };
    }
    
    if (atIndex === 0 || dotIndex === email.length - 1) {
        return {
            isValid: false,
            message: 'Please enter a valid email address'
        };
    }
    
    if (dotIndex < atIndex) {
        return {
            isValid: false,
            message: 'Please enter a valid email address'
        };
    }
    
    return { isValid: true };
}

function validateAddress(address) {
    // Address must be at least 10 characters
    if (address.trim().length < 10) {
        return {
            isValid: false,
            message: 'Address must be at least 10 characters long'
        };
    }
    return { isValid: true };
}

function validateAddOns(addOns) {
    // At least one add-on must be selected
    const selectedAddOns = addOns.filter(addon => addon.checked);
    if (selectedAddOns.length === 0) {
        return {
            isValid: false,
            message: 'Please select at least one add-on'
        };
    }
    return { isValid: true };
}

function validateTotalPrice(price) {
    // Total price must be greater than 0
    if (price <= 0) {
        return {
            isValid: false,
            message: 'Please add items to your order'
        };
    }
    return { isValid: true };
}

// Form submission handler
document.addEventListener('DOMContentLoaded', function() {
    const orderForm = document.querySelector('.order-form');
    if (!orderForm) return;

    orderForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const address = document.getElementById('address').value;
        const addOns = document.querySelectorAll('input[type="checkbox"]');
        const totalPrice = parseFloat(document.getElementById('total-price').textContent);

        // Validate all fields
        const nameValidation = validateName(name);
        const emailValidation = validateEmail(email);
        const addressValidation = validateAddress(address);
        const addOnsValidation = validateAddOns(Array.from(addOns));
        const priceValidation = validateTotalPrice(totalPrice);

        // Display validation messages
        displayValidationMessage('name-error', nameValidation);
        displayValidationMessage('email-error', emailValidation);
        displayValidationMessage('address-error', addressValidation);
        displayValidationMessage('addons-error', addOnsValidation);
        displayValidationMessage('price-error', priceValidation);

        // If all validations pass, submit the form
        if (nameValidation.isValid && 
            emailValidation.isValid && 
            addressValidation.isValid && 
            addOnsValidation.isValid && 
            priceValidation.isValid) {
            
            // Here you would typically send the form data to a server
            alert('Order submitted successfully!');
            orderForm.reset();
        }
    });
});

// Helper function to display validation messages
function displayValidationMessage(elementId, validation) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = validation.isValid ? '' : validation.message;
        errorElement.style.display = validation.isValid ? 'none' : 'block';
    }
}

// Real-time validation
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.form-group input, .form-group textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', function() {
            validateField(this);
        });
    });
});

function validateField(field) {
    let validation;
    switch(field.id) {
        case 'name':
            validation = validateName(field.value);
            break;
        case 'email':
            validation = validateEmail(field.value);
            break;
        case 'address':
            validation = validateAddress(field.value);
            break;
        default:
            return;
    }
    
    displayValidationMessage(`${field.id}-error`, validation);
} 