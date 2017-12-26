var parkingSpot = require("./../models/parkingSpots.js");
const express = require("express");
const path = require("path");
var mongoose = require("mongoose");
const app = express();
const bodyParser = require("body-parser");
var databaseUrl = "parkify_db";
var collections = ["parkingSpaces"];
var mongojs = require("mongojs");
var spaces = [];
var databaseUrl = "news-scrape";
var collections = ["stories"];

// Hook mongojs configuration to the db variable
var db = mongojs(databaseUrl, collections);






app.get("/spaces",function(req,res){
    db.find({}, function(error, found) {

      res.json(found);

});
});
module.export=app;
