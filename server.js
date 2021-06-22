const express = require("express")
const mongoose = require("mongoose")

const app = express()
app.use(express.json())
const db = "mongodb://localhost:27017/taskManager"
mongoose.connect(db,({useNewUrlParser:true}))
  .then(console.log("Connected to MongoDB"))
  .catch(err=>console.log(err))

const taskSchema = new mongoose.Schema({
    title: String,
    complete: {
        type: Boolean,
        default: false
    }

})
const Task=mongoose.model('task',taskSchema)
app.get("/tasks",(req,res)=>{
    Task.find().then(task=>res.json(task))
})
app.post("/tasks",(req,res)=>{
    const newTask = new Task({
        title: req.body.title
    })
    newTask.save().then(task=>res.json(task))
})

app.delete("/tasks/:id",(req,res)=>{
    Task.findByIdAndDelete(req.params.id)
    .then(()=>res.json({remove:true}))
})


app.listen(5000, ()=>{
    console.log("server is running at port 5000")

})