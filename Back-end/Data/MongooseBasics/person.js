// Mongooes Update: https://github.com/sidmirza4/YelpCamp-v2/blob/mongoose-fix/README.md

// Node REPL: Navigate to folder
// 'node'
// '.load index.js

// Start Mongoose: CMD as Admin
// type 'mongod' into CMD


const mongoose = require('mongoose');

main().catch(err => console.log('Error Connecting to Database.', err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/shopApp')

    // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
  }

const personSchema = new mongoose.Schema({
    first: String,
    last: String
})

personSchema.virtual('fullName').get(function () {
    return `${this.first} ${this.last}`
})

personSchema.pre('save', async function () {
    this.first = 'YO';
    this.last = 'MAMA';
    console.log("ABOUT TO SAVE!!!!")
})
personSchema.post('save', async function () {
    console.log("JUST SAVED!!!!")
})


const Person = mongoose.model('Person', personSchema);


