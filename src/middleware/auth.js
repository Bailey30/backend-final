const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const User = require("../models/userModel")

exports.hashPassword = async (req, res, next) => {
    try {
        req.body.actualPassword = req.body.password ///for register route where it needs to compare passwords with only one password input
        req.body.password = await bcrypt.hash(req.body.password, 8)
        next()
    } catch (error) {
        console.log(error);
    }
}

exports.registerDecrypt = async(req, res, next)=> {
    try {
        req.user = await User.findOne({username: req.body.username})
        !req.user && res.status(401).json("wrong credentials")
        if(await bcrypt.compare(req.body.actualPassword, req.user.password)){
            next()
        } else {
            res.status(401).json("wrong credentials (password)")
            throw new Error()
        }
    } catch (error) {
        console.log(error);
    }
}

exports.decryptPassword = async (req,res, next) => {
    try {
        req.user = await User.findOne({email: req.body.email})
        !req.user && res.status(401).json("wrong credentials")
        if(await bcrypt.compare(req.body.password, req.user.password)){
            next()
        } else {
            res.status(401).json("wrong credentials (password)")
            throw new Error()
        }
    } catch (error) {
        console.log(error);
    }
}


exports.verifyToken = async(req, res, next)=> {
    try {
        // console.log(req.header);
        const token = req.header("Authorization").replace("Bearer ", "")
        console.log(token);
    if(token) {
        const decodedToken = jwt.verify(token, process.env.JWT_SEC)
        console.log(decodedToken);
        req.user = await User.findById(decodedToken.id)
        decodedToken && next()
    }
    } catch (error) {
        console.log(error);
    }
    
}

