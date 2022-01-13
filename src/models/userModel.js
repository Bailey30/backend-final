// const mongoose = require("mongoose");

// const userSchema = new mongoose.Schema({
//     username:{
//         type: String,
//         required: true,
//         unique: true,        
//     },
//     email:{
//         type: String,
//         required: true,
//         unique: true,
//         match: /.+\@.+\..+/,
//     },
//     password: {
//         type: String,
//         required: true,
//     }
// });

// const User = mongoose.model("User", userSchema);

// module.exports = User;

const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: /.+@.+..+/,
    },
    password: {
        type: String,
        required: true,
    },
    favorites: [{
        productId: {
            type: String
        },
        title: {
            type: String
        },
        desc: {
            type: String
        },
        img: {
            type: String
        },
        categories: {
            type: Array
        },
        price: {
            type: Number
        }
    }]
});

const User = mongoose.model("User", userSchema);

module.exports = User;