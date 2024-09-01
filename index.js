const express = require("express")
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const { SourceTextModule } = require("vm");

const app = express ();
dotenv.config();

const port  = process.env.PORT || 3000;

mongoose.connect("mongodb://localhost:27017/")

app.get("/",(req,res)=>{
      res.sendFile(__dirname + "/pages/index.html");
})

app.post("/register",(req,res)=>{
      try{
            const {username,email,password} = req.body;
      }
      catch{
            
      }
})

app.listen(port, ()=>{
      console.log(`Server is running on port ${port}`);
})