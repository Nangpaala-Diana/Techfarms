const { addProduct,getProduct } = require("../controllers/productController")
const express = require("express")


productrouter = express.Router()

productrouter.route("/addProduct").post(addProduct)
productrouter.route("/allproduct").get(getProduct)



module.exports=productrouter