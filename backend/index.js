const express = require("express");
const userRoute =require("./routes/userRoute")
const productRoute=require("./routes/productRoute")

require("dotenv").config();

const { connectDb } = require("./utils/db");




connectDb();

const app = express();

// middlewares
 app.use(express.json());

app.use("/api/v1/users", userRoute)
app.use("api/v1/products", productRoute)

const port = process.env.PORT;


app.listen(port, () => console.log("server is running on :" + port));

