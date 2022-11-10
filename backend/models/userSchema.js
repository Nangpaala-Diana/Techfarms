const { mongoose } = require("mongoose")


const userSchema = new mongoose.Schema({
  
    Firstname:{
        type: String,
        require:true,
    },
  
    Lastname:{
        type: String,
        require:true,
    },
    Email:{
        type: String,
        require:true,
    },
    
    Phone:{
        type: Number,
        unique:true,
    },
    Password:{
        type: String,
        require:true,
    },

  
})
  const User = mongoose.model("users", userSchema);
  module.exports = User;