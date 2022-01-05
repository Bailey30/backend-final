const {Router} = require("express")
const userRouter = Router()
const {  addUser,  login} = require("../controllers/userControllers")
const {hashpassword, decryptPassword, registerDecrypt } = require("../middleware/auth")

//REGISTER
userRouter.post("/register", hashpassword, addUser, registerDecrypt, login)

//LOGIN
userRouter.post("/login", decryptPassword, login)

//GET USER
userRouter.get("/user", verifyToken, login)


module.exports = userRouter