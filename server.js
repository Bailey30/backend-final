require("./src/db/connection");
const express = require("express");
const cors = require("cors");
const userRouter = require("./src/routes/userRoutes");
const productRouter = require("./src/routes/productRoutes")
const basketRouter = require("./src/routes/basketRoutes")
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());

app.use("/users", userRouter)
app.use("/products", productRouter)
app.use("/baskets", basketRouter)


app.listen(port, () => {
    console.log(`Listening on ${port}`);
});  