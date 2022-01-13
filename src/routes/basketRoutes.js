const {Router} = require("express")
const basketRouter = Router()
const {getAllBaskets, addToBasket, removeFromBasket, getUserBasket} = require("../controllers/basketControllers")


// 

//GET All BASKETS
basketRouter.get("/", getAllBaskets)

//GET USER BASKET
basketRouter.post("/userbasket", getUserBasket)


//ADD TO BASKET
basketRouter.put("/addtobasket", addToBasket)

//REMOVE FROM BASKET
basketRouter.put("/removefrombasket", removeFromBasket)

module.exports = basketRouter