require("dotenv").config()
const {MongoClient}=require("mongodb")
uri=process.env.MONGODB_URL


async function atlasconnectt(){
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
atlasconnectt()