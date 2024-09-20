document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("login-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Basic validation
        if (username === "admin" && password === "password") {
            alert("Login successful!");
            // Redirect to home page
            window.location.href = "homepage.html";
        } else {
            alert("Invalid username or password. Please try again.");
        }
    });
});
