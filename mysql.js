require("dotenv").config()
const mysql2=require("mysql2")

const connection=mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"b114_new3"
})
connection.connect((err)=>{
    if (err) throw err
    console.log("connected")
})
