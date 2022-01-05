const {Router} = require("express")
const productRouter = Router()
const {createProduct, getProducts} = require("../controllers/productControllers")

// ADD PRODUCT

productRouter.post("/add", createProduct)

// GET PRODUCTS

productRouter.get("/", getProducts)

module.exports = productRouter