const express = require("express");
const mongoose = require("mongoose");
const dbcon=require("./dao/DbDao");
const route=require("./routes/TaskRoute");
const app = express();
app.use(express.json())

dbcon();
app.use("",route)
app.listen(5000, ()=>{
    console.log("server is running at port 5000")
})

