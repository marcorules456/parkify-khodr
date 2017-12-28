const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");



app.post("/dashboard",function(req,res){
  res.sendFile(path.resolve(__dirname+"/../public/dashboard.html"));
});


app.get("/",function(req,res){
  res.sendFile(path.resolve(__dirname+"/../public/landing.html"));
});




module.exports = app;
