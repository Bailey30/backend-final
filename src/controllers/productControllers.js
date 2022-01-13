const Product = require("../models/productModel")
const User = require("../models/productModel")

exports.createProduct = async(req,res)=> {
    try {
        const newProduct = new Product({
            username: req.body.username,
            userId: req.body.userId,
            title: req.body.title,
            desc: req.body.desc,
            img: req.body.img,
            price: req.body.price,
            categories: req.body.categories
        })
        const savedProduct = await newProduct.save()
        res.status(200).send(savedProduct)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
}
///61d5bca114b55563043d75a5 example userId

exports.getProducts = async (req, res) => {
    
    try {
        const products = await Product.find()
        res.status(200).send(products)
    } catch (error) {
        console.log(error);
        res.status(500).send(error)
    }
}

// //GET PRODUCT DETAILS
exports.getProductDetails = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }
};