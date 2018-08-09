const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DrinkSchema = new Schema({
  
  drinkName: {
    type: String,
    required: true,
    
  },
  drinkCategory: {
    type: String,
    required: true,
  },
  drinkspecial: {
      type: Boolean,
      required: true,
  },
  drinkDescription:{
      type: String,
      required: true,
  },
  alcoholContent:{
    type: String,
    required: true
  },
  drinkPrice: {
    type: String,
    required: true,
  }
  
  
});

module.exports = Drinks = mongoose.model("drinkMenu", DrinkSchema);
