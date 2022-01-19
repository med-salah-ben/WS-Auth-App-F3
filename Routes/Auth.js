const express =require('express')
const router =express.Router();
const jwt  =require('jsonwebtoken')
const bcrypt = require('bcrypt')
require("dotenv").config({path:"../config/.env"})

const isAuth = require("../middleware/isAuth")
const User = require("../model/User")



const {registerRules,loginRules,validator} =require('../middleware/Validator')

router.post("/register",registerRules(),validator,async(req,res)=>{
    const {name,lastName,email,password}=req.body;
    try {
        //simple validation
        // if(!name|| !lastName|| !email || !password){
        //   return res.status(400).json({msg:"please enter all fields"})
        // }
        //check for existing user 
        let user =await User.findOne({email})
        if(user){
            return res.status(400).json({msg:'user already exists'})
        }
        //create new user
        user = new User({name,lastName,email,password})
        // hash password 
        const salt = 10;
        const hashedPassword = await bcrypt.hash(password,salt)
        user.password =hashedPassword;
        //save user
        await user.save();
        //sign user
        const payload = {
            id:user._id
        }
        //Token
        const token =await jwt.sign(payload,process.env.secretOrKey,{expiresIn:"1h"})
        res.status(200).send({msg:"User Registered With Success",user,token})

    } catch (error) {
        res.status(500).send({msg:"register server errors"})
        console.log(error)
    }
})

// Login User
router.post("/login",loginRules(),validator,async(req,res)=>{
    const {email,password}=req.body;
    try {
        //simple validation
        // if(!email || !password){
        //   return res.status(400).json({msg:"please enter all fields"})
        // }
        //check for existing user 
        let user =await User.findOne({email})
        if(!user){
            return res.status(400).json({msg:'user does not exists'})
        }
       //is match
       const isMatch = await bcrypt.compare(password,user.password)
       if(!isMatch){
           return res.status(400).send({msg:"Bad Credentials Password"})
       }
       //sign user
       const payload = {
        id:user._id
    }
       //Token
       const token =await jwt.sign(payload,process.env.secretOrKey,{expiresIn:"1h"})
       res.send({msg:"user Logged with success",user, token})

    } catch (error) {
        res.status(500).send({msg:"logged server errors"})
        console.log(error)
    }
})

//private routes 
router.get('/user',isAuth,(req,res)=>{
    res.status(200).send({user:req.user})
})

module.exports = router