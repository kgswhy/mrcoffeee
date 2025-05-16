// Reward button functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all reward buttons
    const rewardButtons = document.querySelectorAll('.reward-btn');
    
    // Add click event listener to each button
    rewardButtons.forEach(button => {
        button.addEventListener('click', function() {
            const rewardType = this.getAttribute('data-reward');
            showDownloadModal(rewardType);
        });
    });
});

function showDownloadModal(rewardType) {
    // Create modal element
    const modal = document.createElement('div');
    modal.className = 'download-modal';
    
    // Create modal content
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>Download Our App</h2>
            <p>To claim this reward, please download our mobile app</p>
            <div class="app-buttons">
                <a href="#" class="app-store-btn">
                    <img src="images/app-store.png" alt="Download on App Store">
                </a>
                <a href="#" class="play-store-btn">
                    <img src="images/play-store.png" alt="Get it on Google Play">
                </a>
            </div>
        </div>
    `;
    
    // Add modal to body
    document.body.appendChild(modal);
    
    // Show modal with animation
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    
    // Close modal when clicking close button
    const closeBtn = modal.querySelector('.close-modal');
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.remove();
        }, 300);
    });
    
    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            setTimeout(() => {
                modal.remove();
            }, 300);
        }
    });
}

// Get reward details
function getRewardDetails(rewardType) {
    const rewards = {
        'free-coffee': {
            title: 'Free Coffee Reward',
            message: 'Download our app to claim your free coffee reward!'
        },
        'bogo': {
            title: 'Buy 1 Get 1 Free',
            message: 'Download our app to get your birthday reward!'
        },
        'free-pastry': {
            title: 'Free Pastry Reward',
            message: 'Download our app to claim your free pastry!'
        },
        'discount': {
            title: '20% Off Reward',
            message: 'Download our app to get 20% off your next order!'
        },
        'upgrade': {
            title: 'Free Size Upgrade',
            message: 'Download our app to upgrade your coffee size for free!'
        }
    };
    
    return rewards[rewardType] || {
        title: 'Reward',
        message: 'Download our app to claim your reward!'
    };
}

// Add animation on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.reward-card');
    
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