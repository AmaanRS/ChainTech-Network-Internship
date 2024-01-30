const express = require("express")
const path = require("path")
const Routes = require("./Routes/Router")
const { connectDB } = require("./DB/db")
require("dotenv").config()

const app = express()

app.use(express.json())

app.use(express.static(path.join(__dirname+"public/static")))

app.set("view engine","ejs")
app.set("views",path.join(__dirname+"/public/views"))


app.use("/",Routes)

async function startServer(){
    try{
        //Connect to database
        await connectDB(process.env.MONGO_URI)
        console.log("Database is connected")
        //Start the express server
        app.listen(process.env.PORT,()=>{
            console.log(`Express app running on port ${process.env.PORT}`)
        })
    }catch(e){
        console.log(`This Express Server is not running because : ${e}`)
    }
}
startServer()