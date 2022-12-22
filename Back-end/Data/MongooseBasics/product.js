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

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 20
    },
    price: {
        type: Number,
        required: true,
        min: [0, 'Price must be positive ya dodo!']
    },
    onSale: {
        type: Boolean,
        default: false
    },
    categories: [String],
    qty: {
        online: {
            type: Number,
            default: 0
        },
        inStore: {
            type: Number,
            default: 0
        }
    },
    size: {
        type: String,
        enum: ['S', 'M', 'L']
    }

});

// productSchema.methods.greet = function () {
//     console.log("HELLLO!!! HI!! HOWDY!!! ")
//     console.log(`- from ${this.name}`)
// }

productSchema.methods.toggleOnSale = function () {
    this.onSale = !this.onSale;
    return this.save();
}


productSchema.methods.addCategory = function (newCat) {
    this.categories.push(newCat);
    return this.save();
}

productSchema.statics.fireSale = function () {
    return this.updateMany({}, { onSale: true, price: 0 })
}


const Product = mongoose.model('Product', productSchema);


const findProduct = async () => {
    const foundProduct = await Product.findOne({ name: 'Mountain Bike' });
    console.log(foundProduct)
    await foundProduct.toggleOnSale();
    console.log(foundProduct)
    await foundProduct.addCategory('Outdoors')
    console.log(foundProduct)
}

// Product.fireSale().then(res => console.log(res))

// findProduct();







// const bike = new Product({ name: 'Cycling Jersey', price: 28.50, categories: ['Cycling'], size: 'XS' })
// bike.save()
//     .then(data => {
//         console.log("IT WORKED!")
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("OH NO ERROR!")
//         console.log(err)
//     })

// Product.findOneAndUpdate({ name: 'Tire Pump' }, { price: 9 }, { new: true, runValidators: true })
//     .then(data => {
//         console.log("IT WORKED!")
//         console.log(data);
//     })
//     .catch(err => {
//         console.log("OH NO ERROR!")
//         console.log(err)
//     })


