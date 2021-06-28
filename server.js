const express = require("express")
const mongoose = require("mongoose")
const route=require("./routes/TaskRoute")
const app = express()
app.use(express.json())
const db = "mongodb://localhost:27017/taskManager"
mongoose.connect(db,({useNewUrlParser:true}))
  .then(console.log("Connected to MongoDB"))
  .catch(err=>console.log(err))

app.use("/TaskRoute",route)
app.listen(5000, ()=>{
    console.log("server is running at port 5000")

})
