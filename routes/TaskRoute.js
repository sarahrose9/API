const express=require('express')
const TaskRoute= require('../dao/TaskDao')
const app = express()
app.use(express.json())

app.get("/tasks",TaskRoute.find)
app.post("/tasks",TaskRoute.add)
app.delete("/tasks/:id",TaskRoute.delete)
app.delete("/tasks",TaskRoute.deleteall)

module.exports=app;