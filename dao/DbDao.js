const mongoose=require("mongoose");
const Schema = mongoose.Schema;
//require ('mongoose.Types.ObjectId');
const taskSchema = new mongoose.Schema({
    title: String,
    complete: {
        type: Boolean,
        default: false
    }

})
const Task=mongoose.model('task',taskSchema)
module.exports=Task;


