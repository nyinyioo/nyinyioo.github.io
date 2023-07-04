// Add your JavaScript code here
// This is just a sample code, you can add your own functionality

// Example: Display an alert when the form is submitted
var form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    alert('Form submitted!');
});
