var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new ParkingSpotSchema object
// This is similar to a Sequelize model
var ParkingSpotSchema = new Schema({
  street:String,
  state:String,
  zip:Number,
  rate:Number,
  status:Boolean,
  title:String

});

// This creates our model from the above schema, using mongoose's model method
var ParkingSpot = mongoose.model("parkingSpot", ParkingSpotSchema);

// Export the ParkingSpot model
module.exports = ParkingSpot;
