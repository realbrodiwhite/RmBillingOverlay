

// Function to remove BillingOverlay from the DOM
function removeBillingOverlay() {
    const overlay = document.querySelector('.BillingOverlay');  // Replace with correct class or id
    
    if (overlay) {
        overlay.remove();
        console.log('BillingOverlay component removed.');
    } else {
        console.log('BillingOverlay component not found.');
    }
}

// Run the function to remove the overlay
removeBillingOverlay();