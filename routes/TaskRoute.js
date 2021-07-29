const express=require('express')
const TaskRoute= require('../Controllers/taskController')
const app = express()
app.use(express.json())

app.get("/tasks",TaskRoute.findAll)
app.post("/tasks",TaskRoute.add)
app.delete("/tasks/:id",TaskRoute.deleteTask)
app.delete("/tasks",TaskRoute.deleteall)

module.exports=app;
