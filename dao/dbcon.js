const mongoose=require("mongoose")
require ('dotenv').config()
const dbcon=()=>{
    const db = process.env.DB_URL;
    mongoose.connect(db,({useNewUrlParser:true, useUnifiedTopology: true }))
   .then(console.log("Connected to MongoDB"))
   .catch(err=>console.log(err))
}

module.exports=dbcon;