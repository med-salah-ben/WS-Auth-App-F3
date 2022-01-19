//import jwt
const jwt =require("jsonwebtoken");
//import model
const User =require("../model/User")
//secret or key:
require("dotenv").config({path:"./config/.env"})

const isAuth = async ( req, res, next)=>{
    try {
        const token = req.headers['x-auth-token']
         //check for token
         if(!token){
             return res.status(400).send({msg:"no token unauthorized"})
         }
         const decode = await jwt.verify(token,process.env.secretOrKey)
         //Get User By ID From Payload
         const user = await User.findById(decode.id)
         //check if user?
         if(!user){
             return res.status(400).send({msg:"unauthorized"})
         }
         //Get User
         req.user = user
        next()
    } catch (error) {
        return res.status(400).send({msg:'Token is not valid'})
    }
}

module.exports = isAuth