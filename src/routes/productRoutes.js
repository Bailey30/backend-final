const {Router} = require("express")
const productRouter = Router()
const {createProduct, getProducts, getProductDetails} = require("../controllers/productControllers")

// ADD PRODUCT

productRouter.post("/add", createProduct)

// GET PRODUCTS

productRouter.get("/", getProducts)

// GET PRODUCT DETAILS

productRouter.get("/find/:id", getProductDetails)

module.exports = productRouter