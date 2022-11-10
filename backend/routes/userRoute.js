const {addUser, getUsers} = require("../controllers/userController")

const express = require("express");


const userrouter = express.Router()


userrouter.route("/register").post(addUser)
userrouter.get("/allusers", getUsers)


module.exports= userrouter