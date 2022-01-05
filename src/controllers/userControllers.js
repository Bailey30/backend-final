const User = require("../models/userModel")
const jwt = require("jsonwebtoken")

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