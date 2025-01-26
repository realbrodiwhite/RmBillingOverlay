// Function to remove overlays mentioned in the logs
function removeLoggedOverlays() {
    // Array of overlay names from the logs
    const overlayNames = [
        'BillingOverlay',
        'ConfirmationTicker',
        'ProfileVerifyNavigationOverlay',
        'ChallengeRequiredOverlay',
        'ThanksgivingPromo2024'
    ];

    // Loop through each overlay name
    overlayNames.forEach(overlayName => {
        // Try selecting the element by the 'name' attribute
        let overlay = document.querySelector(`[name='${overlayName}']`);

        // If the overlay exists, remove it
        if (overlay) {
            overlay.remove();
            console.log(`Removed overlay: ${overlayName}`);
        } else {
            console.log(`${overlayName} not found.`);
        }
    });
}

// Run the function periodically to remove overlays when they appear
setInterval(removeLoggedOverlays, 1000); // Check every 1 second
