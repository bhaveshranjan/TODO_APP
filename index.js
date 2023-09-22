const express = require('express');
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 4000;

//middleware to parse json request body

app.use(express.json());

const todoRoutes = require("./routes/todo");
//mount the to do api routes

app.use("/api/v1",todoRoutes);

//start server

app.listen(PORT,()=>{
    console.log(`server started sucessfully at ${PORT}`);
})

const dbConnect =require ("./config/database");
dbConnect();

//default Route
app.get("/",(req,res)=>{
    res.send(`<h1>This is my home page</h1>`);
})