const User = require("../models/userModel")
const jwt = require("jsonwebtoken")
const { findByIdAndUpdate } = require("../models/userModel")

exports.checkExistence = async (req, res, next) => {
    const user = await User.findOne({ email: req.body.email })
    if (user) {
        res.status(200).send("user already exists with that email")
    } else {
        next()
    }
}

exports.addUser = async (req, res, next) => {
    try {
        const user = await User.create(req.body)
        if (user) {
            next()
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("unable to add user")
    }
}

exports.login = async (req, res) => {
    try {
        console.log(req.user);
        console.log(req.user.username);
        const token = jwt.sign({ id: req.user._id }, process.env.JWT_SEC)
        res.status(200).send({ user: req.user.username, token: token, userId: req.user._id, email: req.user.email }) ///User.findOne() done in auth.js to get username and _id
        console.log("logged in");
    } catch (error) {
        console.log(error);
    }
}

exports.deleteUser = async (req, res) => {
    try {
        const user = await User.deleteOne({ username: req.body.username })
        res.status(200).send(user)
        console.log("deleted");
    } catch (error) {
        console.log(error);
    }
}

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).send(users)
    } catch (error) {
        console.log(error);
    }
}

exports.addFavorite = async(req, res) => {
    try{
        if(req.body.productId){
        const user = await User.findOneAndUpdate({userId: req.body.userId}, {
            $push: {
                favorites: [{
                productId: req.body.productId,
                title: req.body.title,
                desc: req.body.desc,
                img: req.body.img,
                categories: req.body.categories,
                price: req.body.price
        }]}
        },
        {new: true}
        )
        res.status(200).send(user)
        console.log(`added a favorite`);
    }else {
        throw new Error();
    }
    }catch(error){
        console.log(error);
        res.status(500).send("unable to add favorite")
    }
}

exports.removeFavorite = async (req, res) => {
    try{
        const user = await User.findByIdAndUpdate({_id: req.body.userId}, {
            $pull: {
                favorites: {
                    productId: req.body.productId
                }
            }
        }, {new: true})
        
        res.status(200).send(user)
        console.log(`removed a favorite`);
   
    }catch(error){
        console.log(error);
        res.status(500).send("unable to remove favorite")
    }
}

