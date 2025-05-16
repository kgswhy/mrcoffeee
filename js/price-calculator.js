// Price calculation for add-ons
document.addEventListener('DOMContentLoaded', function() {
    const addOns = document.querySelectorAll('input[type="checkbox"]');
    const totalPriceElement = document.getElementById('total-price');
    let basePrice = 0;

    // Price configuration in Rupiah
    const prices = {
        espresso: 59000,
        latte: 49000,
        'cold-brew': 45000,
        cappuccino: 43000,
        mocha: 48000,
        'extra-shot': 10000,
        'whipped-cream': 5000,
        'caramel-syrup': 5000,
        'chocolate-sauce': 5000
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

    // Validate total price
    function validateTotalPrice(price) {
        if (price <= 0) {
            return {
                isValid: false,
                message: 'Silakan pilih kopi dan add-ons'
            };
        }
        return { isValid: true };
    }

    // Display validation message
    function displayValidationMessage(elementId, validation) {
        const errorElement = document.getElementById(elementId);
        if (errorElement) {
            errorElement.textContent = validation.isValid ? '' : validation.message;
            errorElement.style.display = validation.isValid ? 'none' : 'block';
        }
    }

    // Update total price when add-ons are selected/deselected
    addOns.forEach(addon => {
        addon.addEventListener('change', updateTotalPrice);
    });

    // Update total price when coffee selection changes
    const coffeeSelect = document.getElementById('coffee');
    if (coffeeSelect) {
        coffeeSelect.addEventListener('change', updateTotalPrice);
    }

    function updateTotalPrice() {
        let total = basePrice;
        
        // Add coffee price
        const selectedCoffee = document.getElementById('coffee')?.value;
        if (selectedCoffee && prices[selectedCoffee]) {
            total += prices[selectedCoffee];
        }
        
        // Add add-ons prices
        addOns.forEach(addon => {
            if (addon.checked && prices[addon.value]) {
                total += prices[addon.value];
            }
        });

        // Update the total price display
        if (totalPriceElement) {
            totalPriceElement.textContent = formatRupiah(total);
            
            // Validate total price
            const priceValidation = validateTotalPrice(total);
            displayValidationMessage('price-error', priceValidation);
        }
    }

    // Initialize total price
    updateTotalPrice();
}); 