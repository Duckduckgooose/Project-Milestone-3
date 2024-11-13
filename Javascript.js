// Ensure the DOM is fully loaded before running the script
document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("theme-toggle");
    console.log('Script loaded and button selected:', toggleButton);

    // Check for stored theme preference in localStorage and apply it
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
        console.log('Dark theme applied from localStorage');
    }

    // Add event listener to toggle theme on button click
    toggleButton.addEventListener("click", () => {
        console.log('Toggle button clicked');
        document.body.classList.toggle("dark-theme");

        // Save the theme preference to localStorage
        if (document.body.classList.contains("dark-theme")) {
            localStorage.setItem("theme", "dark");
            console.log('Dark theme enabled and saved');
        } else {
            localStorage.setItem("theme", "light");
            console.log('Light theme enabled and saved');
        }
    });

    // Setting the EventListener function to respond to the submit event occurrence 
    document.getElementById("contactForm").addEventListener("submit", function(event) {
        // Taking the input values made by the user 
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let message = document.getElementById("message").value;
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Checking for any missing fields to alert the user of a missing value
        if (!name || !email || !message) {
            alert("All fields are required!");
        } else if (!emailPattern.test(email)) { // Validating the email section
            alert("Please enter a valid email address!");
            // Preventing the default function from submitting the information
            event.preventDefault();
        }
    });
});

console.log('Script loaded');
