document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission behavior

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Basic validation
        if (name && email && message) {
            // Send the form data to a server (or handle it accordingly)
            alert("Thank you for your message! We'll get back to you soon.");
            form.reset(); // Reset the form after submission
        } else {
            alert("Please fill out all fields.");
        }
    });
});
