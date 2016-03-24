var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create a schema
var EventHistorySchema = new Schema({
  org:String,
  User_Name: String,
  Start_Date: String,
  End_Date: Date,
  Name: String,
  Version: String,
  Layout: String,
  Os: String,
  Description: String
  
});

// the schema is useless so far
// we need to create a model using it
var Event = mongoose.model('EventHistory', EventHistorySchema);

// make this available to our users in our Node applications
module.exports = Event;
