const {Router} = require("express")
const userRouter = Router()
const { checkExistence, addUser,  login, deleteUser, getUsers, addFavorite, removeFavorite} = require("../controllers/userControllers")
const {hashPassword, decryptPassword, registerDecrypt, verifyToken } = require("../middleware/auth")
const {createBasket} = require("../controllers/basketControllers")

//REGISTER
userRouter.post("/register", checkExistence, hashPassword, addUser, registerDecrypt, createBasket, login)
// userRouter.post("/register",addUser)

//LOGIN
userRouter.post("/login", decryptPassword, login)

//GET USER
userRouter.get("/user", verifyToken, login)

// DELETE USER
userRouter.delete("/", deleteUser)

//GET ALL USERS
userRouter.get("/", getUsers)

//ADD FAVORITE
userRouter.put("/addfavorites", addFavorite)

//REMOVE FAVORITE
userRouter.put("/removefavorites", removeFavorite)

module.exports = userRouter
