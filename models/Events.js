const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  
  EventName: {
    type: String,
    required: true,
    
  },
  EventDate: {
    type: Date,
    required: true,
  },
  StartTime: {
      type: String,
      required: true,
  },
  EventDescription:{
      type: String,
      required: true,
  },
  AgeRestriction:{
    type: String,
    required: false
  },
  EventPrice: {
    type: String,
    required: false,
  }
  
  
});

module.exports = Events = mongoose.model("Events", EventSchema);
