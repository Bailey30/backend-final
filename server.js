require("./src/db/connection");
const express = require("express");
const cors = require("cors");
const userRouter = require("./src/routes/userRoutes");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());


app.listen(port, () => {
    console.log(`Listening on ${port}`);
});  