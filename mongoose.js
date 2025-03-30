require("dotenv").config()
const mongoose = require("mongoose")
const uri = process.env.MONGODB_URL

async function connectt() {
    try {
        const connect = mongoose.connect(uri)
        console.log("connected")

       


        const userSchema = new mongoose.Schema({
            name: String,
            password: Number

        })
        const model = mongoose.model("New2", userSchema)

        const insert1 = new model({
            name: "SUMIT KUMAR",
            password: 123456789
        })
        await insert1.save()
        console.log("inserted")
    }catch(error){
        console.log(error)
    }
    
}


connectt()