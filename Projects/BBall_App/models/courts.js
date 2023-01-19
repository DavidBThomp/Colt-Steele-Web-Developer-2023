const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Might have to change the data type for ranges (Hours, age, price)
// Add commented out once basic program working
const courtSchema = new Schema ({
    title: String,
    location: String,
    price: Number,
    image: String,
    // floor: String,
    // backboards: String,
    description: String,

    indoor: Boolean,
    doubleRim: Boolean,

    // hours: Number,
    players: Number,
    // ages: Number
});

// When requested, export model
module.exports = mongoose.model('Courts', courtSchema);