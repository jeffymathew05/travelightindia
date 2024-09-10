function handleFormSubmit(event) {
    event.preventDefault(); // Prevent the default form submission

    const form = document.getElementById('contactForm');
    const formData = new FormData(form);

    fetch(form.action, {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(result => {
        // Handle success
        console.log('Success:', result);
        // Clear the form fields
        form.reset();
        // Optionally show a success message
        document.querySelector('.sent-message').style.display = 'block';
        // Hide any error messages
        document.querySelector('.error-message').style.display = 'none';
    })
    .catch(error => {
        // Handle error
        console.error('Error:', error);
        // Show an error message
        document.querySelector('.error-message').style.display = 'block';
        // Hide any success messages
        document.querySelector('.sent-message').style.display = 'none';
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', handleFormSubmit);
});