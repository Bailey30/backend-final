const mongoose = require('mongoose');

const BasketSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    username: {
        type: String, 
        required: true
    },
    basketContents: [{
        productId: {
            type: String,
        },
        title: {
            type: String,
        },
        desc: {
            type: String, 
        },
        img: {
            type: String,
        },
        categories: {
            type: Array
        },
        price: {
            type: Number
        }

    }]

})

const Basket = mongoose.model("Basket", BasketSchema)

module.exports = Basket