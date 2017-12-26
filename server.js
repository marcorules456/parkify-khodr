const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser")
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
const dashboardRoute=require("./routes/dashboardRoute.js")

const port = 3000;
var mongoose = require('mongoose');
app.listen(port);

const parkingSpot = require("./controllers/parking.js");
var databaseUrl = "parkify_db";
var collections = ["parkingSpaces"];
var mongojs = require("mongojs");
var spaces = [];
app.use(dashboardRoute);
var streets=["345 Yim Rd","445 Yux Ave","94 Redfalcon St","776 Westing Ave", "7404 e Westing Ave"];
var rates = [88,33,22,55,24,53];
var statuses = [true,false,true,false];
var titles=["Airport Parking","Baseball Parking","Downtown Tempe","Mill Ave Parking Now","Near Terminal 2"];
// Hook mongojs configuration to the db variable
var db = mongojs(databaseUrl, collections);




// Hook mongojs configuration to the db variable

app.get("/spaces",function(req,res){
  for(var i=0;i<5;i++){
    spaces.push({
      street:streets[i],
      state:"arizona",
      zip:88667,
      rate:rates[i],
      status:statuses[i],
      title:titles[i]
    });
    db.spaces.insert({
      street:streets[i],
      state:"arizona",
      zip:88667,
      rate:rates[i],
      status:statuses[i],
      title:titles[i]


  });
  db.spaces.find({},function(err,response){
    res.json(response);
  });
}

});























function insert(){
  spaces.push({
    street:streets[i],
    state:"arizona",
    zip:88667,
    rate:rates[i],
    status:statuses[i],
    title:titles[i]
  });
}
