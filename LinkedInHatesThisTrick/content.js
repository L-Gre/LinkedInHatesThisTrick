// Configurable message text
const message = "You are on LinkedIn Feed!"; // Update this text as needed

// Function to create and display the overlay
function createOverlay() {
    // Check if the overlay already exists to avoid duplication
    if (document.getElementById("custom-warning-overlay")) {
        return;
    }

    // Create the overlay container
    const overlay = document.createElement("div");
    overlay.id = "custom-warning-overlay";
    overlay.style.position = "fixed";
    overlay.style.top = "50%";
    overlay.style.left = "50%";
    overlay.style.transform = "translate(-50%, -50%)";
    overlay.style.width = "75%";
    overlay.style.height = "75%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
    overlay.style.color = "white";
    overlay.style.fontSize = "24px";
    overlay.style.display = "flex";
    overlay.style.flexDirection = "column";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.textAlign = "center";
    overlay.style.zIndex = "10000";

    // Add the message text
    const messageText = document.createElement("div");
    messageText.innerText = message; // Use the configurable message variable
    overlay.appendChild(messageText);

    // Create the close button
    const closeButton = document.createElement("button");
    closeButton.innerText = "✖"; // Unicode for "X"
    closeButton.style.position = "absolute";
    closeButton.style.top = "10px";
    closeButton.style.right = "10px";
    closeButton.style.backgroundColor = "red";
    closeButton.style.color = "white";
    closeButton.style.border = "none";
    closeButton.style.borderRadius = "50%";
    closeButton.style.width = "30px";
    closeButton.style.height = "30px";
    closeButton.style.cursor = "pointer";
    closeButton.style.fontSize = "16px";
    closeButton.style.display = "flex";
    closeButton.style.justifyContent = "center";
    closeButton.style.alignItems = "center";

    // Add functionality to close the overlay
    closeButton.addEventListener("click", () => {
        document.body.removeChild(overlay);
    });

    // Append the close button to the overlay
    overlay.appendChild(closeButton);

    // Add the overlay to the document
    document.body.appendChild(overlay);
}

// Function to check if the user is on the feed page
function checkForFeedPage() {
    if (window.location.pathname === "/feed/") {
        createOverlay();
    }
}

// Observe URL changes and check for the feed page
let lastUrl = location.href;
const observer = new MutationObserver(() => {
    const currentUrl = location.href;
    if (currentUrl !== lastUrl) {
        lastUrl = currentUrl;
        checkForFeedPage();
    }
});
observer.observe(document, { subtree: true, childList: true });

// Add event listener for tab visibility changes
document.addEventListener("visibilitychange", () => {
    if (!document.hidden) {
        // Tab is now visible, recheck the page
        checkForFeedPage();
    }
});

// Initial check for the feed page
checkForFeedPage();