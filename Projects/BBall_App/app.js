const express = require('express');
const app = express();
const path = require('path');

// Set Engine + File for Views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Get request on Root
app.get('/', (req, res) => {
    // Render the from the engine (view folder) 
    res.render('home')
});

// Opens app on port (xxxx)
app.listen(3000, () => {
    console.log('Serving on port 3000');
});