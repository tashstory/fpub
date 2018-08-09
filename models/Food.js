const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
  
  foodName: {
    type: String,
    required: true,
    
  },
  foodCategory: {
    type: String,
    required: true,
  },
  special: {
      type: Boolean,
      required: true,
  },
  foodDescription:{
      type: String,
      required: true,
  },
  caloriecontent: {
    type: String,
    required: true,
  },
  foodPrice: {
    type: String,
    required: true,
  }
  
  
});

module.exports = Food = mongoose.model("foodMenu", FoodSchema);
