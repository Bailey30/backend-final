const Basket = require("../models/basketModel")

exports.createBasket = async (req, res, next) => {
    try {
        const basket = await Basket.create({
            userId: req.user._id,
            username: req.user.username,
        })
        if (basket) {
            console.log("basket created")
            next()
        };
    } catch (error) {
        console.log(error);
    }
}

exports.getAllBaskets = async (req, res) => {
    try {
        const baskets = await Basket.find()
        res.status(200).send(baskets)
    } catch (error) {
        res.status(500).send("unable to get all baskets")
        console.log(error);
    }
}

exports.addToBasket = async (req, res) => {
    try {
        if (req.body.productId) {
            const basket = await Basket.findOneAndUpdate({ userId: req.body.userId }, {
                $push: {
                    basketContents: [{
                        productId: req.body.productId,
                        title: req.body.title,
                        desc: req.body.desc,
                        img: req.body.img,
                        categories: req.body.categories,
                        price: req.body.price
                    }]
                }
            }, { new: true })
            res.status(200).send(basket)
        } else {
            throw new Error()
        }

    } catch (error) {
        console.log(error);
        res.status(500).send("unable to add to basket")
    }
}

exports.removeFromBasket = async (req, res) => {
    console.log(req.body.productId);
    try {
        const basket = await Basket.findOneAndUpdate({ userId: req.body.userId }, {
            $pull: {
                basketContents: {
                    _id: req.body.productId
                }
            }
        }, { new: true })
        res.status(200).send(basket)
    } catch (error) {
        res.status(500).send("unable to remove from basket")
        console.log(error);
    }
}

exports.getUserBasket = async (req, res) => {
    try {
        const basket = await Basket.findOne({ userId: req.body.userId })
        console.log(basket);
        res.status(200).json(basket.basketContents)
    } catch (error) {
        res.status(500).send("unable to get user basket")
        console.log(error);
    }
}