const User = require("../models/userSchema")



exports.addUser =async(req, res) => {
//   const{Firstname, Lastname, contact}=req.body
    const user = await User.create({
       Firstname:req.body.Firstname,
        Lastname:req.body.Lastname,
        Email:req.body.Email,
        Phone:req.body.Phone,
        Password:req.body.Password,
       
    })
    res.status(200).json({
        success: true,
       data:user 
    })
}

//getting user

exports.getUsers = async(req, res) => {
    const users = await User.find()
    res.status(200).json(users)
}





