document.addEventListener("DOMContentLoaded", function() {
    const buyButtons = document.querySelectorAll(".buy-btn");

    buyButtons.forEach(function(button) {
        button.addEventListener("click", function() {
            const productName = button.getAttribute("data-product");
            alert(`You have purchased ${productName}`);
            // Implement further actions as needed (e.g., add to cart, redirect to checkout page)
        });
    });
});
