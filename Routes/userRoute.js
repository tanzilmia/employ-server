const express = require("express");
const userRoute = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const userscema = require("../Scema/users");
const { default: mongoose } = require("mongoose");
const User = new mongoose.model("User", userscema);
const castScema =  require("../Scema/cast")
const Cast = new mongoose.model("Cast",castScema)


// post expenss

userRoute.post('/add-cast', async(req,res)=>{
    try{
        const addCast = req.body;
        console.log(addCast)
    }catch(e) {}
})


module.exports = userRoute

