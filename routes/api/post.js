const express = require("express");
const router = express.Router();

var Drinks = require("../../models/Drinks")
var Food = require("../../models/Food")
var Events = require("../../models/Event")
// @route GET api/post/test
// @desc Test post route
// @access Public

router.get("/addDrink", (req, res) => {
  var drink = {
    drinkName: "Guiness Draught",
    drinkCategory: "Beer",
    drinkspecial: false,
    drinkDescription: "Good as hell",
    alcoholContent: "4.3%",
    drinkPrice: "$3"
  }
  Drinks.create(drink)
  // Grab every document in the Games collection
  Drinks.find({})
    .then(function (Pub) {
      // If we were able to successfully find Games, send them back to the client
      res.json(Pub);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });

});
router.get("/addFood", (req, res) => {
  var food = {
    foodName: "Chicken Alfredo",
    foodCategory: "Spaghetti",
    foodspecial: false,
    foodDescription: "Delicious",
    CalorieContent: "600 calories",
    foodPrice: "$8"
  }
  Food.create(food)
  // Grab every document in the Games collection
  Food.find({})
    .then(function (Pub) {
      // If we were able to successfully find Games, send them back to the client
      res.json(Pub);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
})


router.get("/addEvent", (req, res) => {
  var event = {

    EventName: "",
    EventDate, //type Date
    StartTime: "",
    EventDescription: "",
    AgeRestriction: "",
    EventPrice: ""

  }

  Events.create(event);

  Food.find({})
    .then(function (Pub) {
      // If we were able to successfully find Games, send them back to the client
      res.json(Pub);
    })
    .catch(function (err) {
      // If an error occurred, send it to the client
      res.json(err);
    });



})
module.exports = router;


