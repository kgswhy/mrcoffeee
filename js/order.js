// Form elements
const orderForm = document.getElementById('orderForm');
const totalPriceElement = document.getElementById('totalPrice');

// Price configuration in Rupiah
const prices = {
    espresso: 59000,
    latte: 49000,
    'cold-brew': 45000,
    cappuccino: 43000,
    mocha: 48000,
    'extra-shot': 10000,
    'whipped-cream': 5000,
    'caramel-syrup': 5000
};

// Format price to Rupiah
function formatRupiah(price) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(price);
}

// Validation functions
function validateName(name) {
    if (name.length < 2) {
        return 'Nama harus minimal 2 karakter';
    }
    if (name.length > 50) {
        return 'Nama maksimal 50 karakter';
    }
    if (!/^[a-zA-Z\s]*$/.test(name)) {
        return 'Nama hanya boleh berisi huruf dan spasi';
    }
    return '';
}

function validateEmail(email) {
    if (!email.includes('@')) {
        return 'Masukkan alamat email yang valid';
    }
    if (!email.includes('.')) {
        return 'Masukkan alamat email yang valid';
    }
    if (email.length > 100) {
        return 'Email maksimal 100 karakter';
    }
    return '';
}

function validatePhone(phone) {
    if (phone.length < 10) {
        return 'Nomor telepon minimal 10 digit';
    }
    if (phone.length > 15) {
        return 'Nomor telepon maksimal 15 digit';
    }
    if (!/^[0-9+\-() ]*$/.test(phone)) {
        return 'Nomor telepon hanya boleh berisi angka, +, -, (, ), dan spasi';
    }
    return '';
}

function validateAddress(address) {
    if (address.length < 10) {
        return 'Masukkan alamat lengkap';
    }
    if (address.length > 200) {
        return 'Alamat maksimal 200 karakter';
    }
    return '';
}

function validateCoffee(coffee) {
    if (!coffee) {
        return 'Silakan pilih kopi';
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
    
    totalPriceElement.textContent = formatRupiah(total);
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
        alert('Pesanan berhasil! Terima kasih telah memilih MR.COFFEE.');
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