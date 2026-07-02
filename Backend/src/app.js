const express = require ("express")
const cookieParser = require("cookie-parser")
const cors = require("cors")


const app = express()

// this middleware used to initiate request to the body
app.use(express.json())

// this middleware used to 
app.use(cookieParser())

// cors middleware
app.use(cors({
  origin:"http://localhost:5173",
  credentials:true
}))

// auth route ko call krenge 
// requires all the routes here...
const authRouter = require("./routes/auth.routes")



// ab middleware use krenge jo authrouter ki prefix decide krega. agr hume authrouter ko use krna h to ye prefix use krna pdega 
// using all the routes here...
app.use("/api/auth", authRouter)


module.exports = app