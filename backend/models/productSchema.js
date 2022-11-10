const { mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
  nameofproduct: {
    type: String,
    require: true,
  },

  image: {
    type: String,
    require: true,
  },
  price: {
    type: String,
    require: true,
  },

  description: {
    type: String,
    require: true,
  },
 
});
const Product = mongoose.model("products", productSchema);
module.exports = Product;