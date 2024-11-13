const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse request body
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Route to serve the Contact Page
app.get('/contact.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

// Handle form submission
app.post('/submit-form', (req, res) => {
    const { name, email, message } = req.body;

    // Here, you can add logic to process the form data
    console.log(`Received submission: Name: ${name}, Email: ${email}, Message: ${message}`);

    // Send a response back to the client
    res.send(`Thank you, ${name}! Your message has been received.`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    const data = new URLSearchParams(formData).toString();

    fetch('/submit-form', {
        method: 'POST',
        body: data,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        }
    })
    .then(response => response.text())
    .then(data => {
        alert(data); // Show the response from the server
        this.reset(); // Reset the form after submission
    })
    .catch(error => console.error('Error:', error));
});
