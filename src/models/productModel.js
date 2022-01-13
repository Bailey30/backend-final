const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    username: {
        type: String, 
        required: true
    },
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,

    },
    img: {
        type: String,
        required: true,
    },
    categories: {
        type: Array
    },
    price: {
        type: Number
    }
},
    { timestamps: true }
)

const Product = mongoose.model("Product", productSchema)

module.exports = Product