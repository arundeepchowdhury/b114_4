// Pleasse add code For Arundip
require("dotenv").config()
const {MongoClient}=require("mongodb")
const uri="mongodb://localhost:27017/"

async function connectt(){
    try{
        const conn=new MongoClient(uri)
        await conn.connect()
        console.log("connected")

        const dbs=conn.db("b114_new1")
        const collection1=dbs.collection("new1")
        const insert=collection1.insertOne({"name":"AMIT KUMAR","ID":1})
        console.log(`data is inserted ${insert}`)

    }catch(error){
        console.log(error)
    }
}
connectt()