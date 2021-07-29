const mongoose=require('mongoose');
const Task=require("../dao/DbDao");

exports.findAll=(req,res)=>{
    Task.find().then(task=>res.json(task))
}

exports.add=(req,res)=>{
    const newTask = new Task({
        title: req.body.title
    })
    newTask.save().then(task=>res.json(task))
}

exports.deleteTask=(req,res)=>{
    Task.findByIdAndDelete(req.params.id)
    .then(()=>res.json({remove:true}))
}

exports.deleteall=(req,res)=>{
    Task.remove()
    .then(()=>res.json({remove:true}))
}