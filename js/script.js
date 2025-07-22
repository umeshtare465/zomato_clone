// Display an alert when user starts typing in the input
const orderInput = document.querySelector('input[type="text"]');

orderInput.addEventListener('input', function () {
    console.log("Typing: " + orderInput.value);
});

// Optional: You can show a welcome popup
window.addEventListener('load', function () {
    alert("Welcome to Zomato Food Delivery!");
});
