// Run this program to seed the database
// THIS WILL DELETE EVERYTHING IN THE DB

const mongoose = require('mongoose');

// Get the model from courts
const court = require('../models/courts')
const cities = require('./cities')

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

// Deletes data in DB and adds 50 from random data set
const cleanDB = async () => {
    await court.deleteMany({});
    for(let i = 0; i < 50; i++) {
        const random1000 = Math.floor(Math.random() * 1000);
        const price = Math.floor(Math.random() * 20) + 10;
        const newCourt = new court ({
            title: `${cities[random1000].state}`,
            location: `${cities[random1000].city}`,
            price: price,
            description: 'An outdoor court. Poly floor, metal backboards, and double 4 screw rim.',
            image: 'https://api.lorem.space/image/book?w=150&h=220'
        })
        await newCourt.save();
    }
}

// Runs cleanDB function... I hope you know this... LOL jk comments everywhere
cleanDB().then (() => {
    mongoose.connection.close();
});
