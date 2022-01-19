const express =require("express");
const connectDB = require('./config/connect_DB')
require('dotenv').config({path:"./config/.env"})

const authRouter = require('./Routes/Auth')

connectDB()
const app = express();

//middleware 
app.use(express.json())

//use routes
app.use('/api/auth',authRouter)

const PORT = process.env.PORT;

app.listen(PORT, (err)=>{
    err? console.log(err)
    :console.log(`server is running in Port ${PORT}`)
})