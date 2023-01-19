// Express
const express = require('express');
const app = express();
// Mongoose
const mongoose = require('mongoose');
// File Pathing
const path = require('path');
const methodOverride = require('method-override')
const ejsMate = require('ejs-mate')

// Get the model from courts
const court = require('./models/courts');
const { application } = require('express');

// Connecting to Mongoose (Mongod must be setup locally)
// Start Mongoose: CMD as Admin
// type 'mongod' into CMD 
main().catch(err => console.log('Error Connecting to Database.', err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/bBallApp', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connected to Database bBallApp");
    // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

// Set Engine + File for Views
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', ejsMate);

// Parse Body
app.use(express.urlencoded({
    extended: true
}));
// Method override allows other than POST and GET
app.use(methodOverride('_method'));



// Get request on Root
app.get('/', (req, res) => {
    // Render the from the engine (view folder) 
    res.render('home')
});

app.get('/courts', async (req, res) => {
    const courts = await court.find({});
    res.render('courts/index', {
        courts
    });
});

// Add new Court
// Order does matter, this has to be requested before ID or ID will be attempted to be found
app.get('/courts/new', (req, res) => {
    res.render('courts/new');
});

// Direct post request from new route
// Create new court, save, redirect to the court added
app.post('/courts', async (req, res) => {
    const newCourt = new court(req.body.court)
    await newCourt.save();
    res.redirect(`/courts/${newCourt._id}`)
});

// Find single specific court by ID
app.get('/courts/:id', async (req, res) => {
    const courts = await court.findById(req.params.id);
    res.render('courts/single', {
        courts
    });
});

// Find single specific court by ID and PUT a change
app.get('/courts/:id/edit', async (req, res) => {
    const courts = await court.findById(req.params.id);
    res.render('courts/edit', {
        courts
    });
});

// Post request from form on edit points here
app.put('/courts/:id', async (req, res) => {
    const {
        id
    } = req.params;
    const updateCourt = await court.findByIdAndUpdate(id, {
        ...req.body.court
    });
    res.redirect(`/courts/${updateCourt._id}`);
});

app.delete('/courts/:id', async (req, res) => {
    const { id } = req.params;
    await court.findByIdAndRemove(id);
    res.redirect(`/courts`);
});

// Get Request to make new court
// app.get('/makeCourt', async (req, res) => {
//     // Render the from the engine (view folder) 
//     const newCourt = new court ({
//         title: 'High Point Park',
//         location: 'Hoffman Estates',
//         price: 'Free',
//         description: 'An outdoor court. Poly floor, metal backboards, and double 4 screw rim.'
//     });
//     await(newCourt.save());
//     res.send(newCourt)
// });

// Opens app on port (xxxx)
app.listen(3000, () => {
    console.log('Serving on port 3000');
});