document.addEventListener('DOMContentLoaded', function() {
    // Remove the alert message
    // alert('Welcome to Hafizz\'s Personal Website!');

    // Add a function to handle form submission for contact information
    const contactForm = document.querySelector('#contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            const formData = new FormData(contactForm);
            const name = formData.get('name');
            const email = formData.get('email');
            const message = formData.get('message');

            // Display the form data in the console (for demonstration purposes)
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            // You can add code here to send the form data to a server or perform other actions
        });
    }
});
