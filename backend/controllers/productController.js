const Product = require("../models/productSchema")

exports.addProduct=async(req, res)=>{
    const { nameofproduct, image, price, description } = req.body
    const products = await Product.create({
        nameofproduct,
        image,
        price,
        description
    });
    res.status(201).json({
    message:"product added successfully"
})
}

exports.getProduct = async (req, res) => {
    const products = await Product.find()
    res.status(201).json(products)
}