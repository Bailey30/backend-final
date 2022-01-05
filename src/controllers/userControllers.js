const User = require("../models/userModel")
const jwt = require("jsonwebtoken")

exports.checkExistence = async (req,res,next)=> {
    const user = await User.findOne({email: req.body.email})
    if(user) {
        res.status(200).send("user already exists with that email")
    } else {
        next()
    }
}

exports.addUser = async (req,res, next)=> {
    try {
        const user = await User.create(req.body)
        if(user){
            next()
        }
    } catch (error) {
        console.log(error);
        res.status(500).send("unable to add user")
    }
}

exports.login = async(req,res)=> {
    try {
        const token = jwt.sign({id: req.user_id}, process.env.JWT_SEC)
        res.status(200).send({user: req.user.username, token: token, userId: req.user._id}) ///User.findOne() done in auth.js to get username and _id
    } catch (error) {
        console.log(error);
    }
}

exports.deleteUser = async(req, res)=> {
    try {
        const user = await User.deleteOne({username: req.body.username})
        res.status(200).send(user)
        console.log("deleted");
    } catch (error) {
        console.log(error);
    }
}

exports.getUsers = async(req,res)=> {
    try {
        const users = await User.find()
        res.status(200).send(users)
    } catch (error) {
        console.log(error);
    }
}