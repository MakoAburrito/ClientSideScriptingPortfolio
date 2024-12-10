document.addEventListener("DOMContentLoaded", () => {
    const welcomeMessage = document.getElementById("welcome-message");
    const clearStorageButton = document.getElementById("clear-storage");

    // Get stored data from local storage
    const userName = localStorage.getItem("userName");
    let visitCount = localStorage.getItem("visitCount");

    if (!userName) {
        const name = prompt("Welcome! What's your name?");
        if (name) {
            localStorage.setItem("userName", name);
            localStorage.setItem("visitCount", 1);
            welcomeMessage.textContent = `Welcome, ${name}! This is your first visit.`;
        }
    } else {
        visitCount = visitCount ? parseInt(visitCount) + 1 : 1;
        localStorage.setItem("visitCount", visitCount);
        welcomeMessage.textContent = `Welcome back, ${userName}! You have visited this page ${visitCount} times.`;
    }

    clearStorageButton.addEventListener("click", () => {
        localStorage.clear();
        alert("Local storage cleared. Refresh the page to start over.");
    });
});
