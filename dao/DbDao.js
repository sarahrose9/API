const mongoose=require("mongoose")
require('dotenv').config();
const Schema = mongoose.Schema;
const taskSchema = new mongoose.Schema({
    title: String,
    complete: {
        type: Boolean,
        default: false
    }

})
const Task=mongoose.model('task',taskSchema)
module.exports=Task;

const dbcon=()=>{
    const db = process.env.DB_URL;
    mongoose.connect(db,({useNewUrlParser:true}))
   .then(console.log("Connected to MongoDB"))
   .catch(err=>console.log(err))
}

module.exports=dbcon;
