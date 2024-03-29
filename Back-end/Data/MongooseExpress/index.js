// Initial Setup:
// npm i express ejs mongoose

const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')


const Product = require('./models/product');

// Node REPL: Navigate to folder
// 'node'
// '.load index.js

// Start Mongoose: CMD as Admin
// type 'mongod' into CMD

main().catch(err => console.log('Error Connecting to Database.', err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/farmStand')

    // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
  }


// Engine being used
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Accept responses from form POST
app.use(express.urlencoded({ extended: true }));

// Method allows PUT, PATCH, DELETE, and other Methods
app.use(methodOverride('_method'))

const categories = ['fruit', 'vegetable', 'dairy'];

// index page
app.get('/products', async (req, res) => {
    const { category } = req.query;
    if (category) {
        const products = await Product.find({ category })
        res.render('products/index', { products, category })
    } else {
        const products = await Product.find({})
        res.render('products/index', { products, category: 'All' })
    }
})

// New Product From
app.get('/products/new', (req, res) => {
    res.render('products/new', { categories })
})

// New Product Form POST Method
app.post('/products', async (req, res) => {
    const newProduct = new Product(req.body);
    await newProduct.save();
    res.redirect(`/products/${newProduct._id}`)
})

// Individual Products
app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id)
    res.render('products/show', { product })
})

// Edit Form
app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product, categories })
})

// Edit for PUT Method
app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { runValidators: true, new: true });
    res.redirect(`/products/${product._id}`);
})

// Delete Product Method
app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);
    res.redirect('/products');
})



app.listen(3000, () => {
    console.log("APP IS LISTENING ON PORT 3000!")
})


