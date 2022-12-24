const express = require('express');
const app = express();

// File path management
const path = require('path');

const mongoose = require('mongoose');

// Export from file (model/courts)
const Courts = require('./models/courts');

// Node REPL: Navigate to folder
// 'node'
// '.load index.js

// Start Mongoose: CMD as Admin
// type 'mongod' into CMD

main().catch(err => console.log('Error Connecting to Database.', err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/courtsApp')
    console.log("Connected to Database courtsApp");
    // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
}

// Views engine
app.set('view engine', 'ejs');

// Pathing local (Server)
app.set('views', path.join(__dirname, 'views'));

// Home Page
app.get('/', (req, res) => {
    res.render('home')
});

// Make Court
app.get('/makeCourt', async (req, res) => {
    const court = new Courts({ title: 'Harper College'})
    await court.save();
    res.send(court);
});

app.listen(3000, () => {
    console.log("Serving on port 3000")
});