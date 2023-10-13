/**
 * Simple Form Assignment
 *  JavaScript Code
 * @author Frank Luo
 * Sources Used: 
 * https://www.w3schools.com/tags/ref_httpmethods.asp
 * https://www.geeksforgeeks.org/difference-between-get-and-post-request-in-vanilla-javascript/
 * https://stackoverflow.com/questions/3477333/what-is-the-difference-between-post-and-get
 * https://www.tutorialspoint.com/difference-between-get-and-post-request-in-javascript
 * https://www.youtube.com/watch?v=urg-a6i0HEc
 * 
 **/

// Import Express.js library
var express = require('express');
// New router object created 
var router = express.Router();

/**
* Sets up a route handler for GET requests  
* Sends HTML file located in public directory to client
*/ 
router.get('/', function(req, res, next) {
res.sendFile('index.html', { root: __dirname + '/../public/' });
});

/**
* Sets up a route handler for POST requests
*/ 
router.post('/submitFoodPreferences', (req, res, next) => {
    // Form data
    const iceCreamFlavor = req.body.iceCreamFlavor;
    const pizzaToppings = req.body.pizzaToppings;
    const favoriteFruit = req.body.favoriteFruit;
    const cuisine = req.body.cuisine;
    const spiciness = req.body.spiciness;

    // Checks if any food elements are missing
    if (!iceCreamFlavor || !pizzaToppings || !favoriteFruit || !cuisine || !spiciness) {
        res.status(422).send("Incomplete data!.");
        return;
    }

  
  // Debugging purposes
  console.log(req.body.iceCreamFlavor);
  console.log(req.body.pizzaToppings);
  console.log(req.body.favoriteFruit);
  console.log(req.body.cuisine);
  console.log(req.body.spiciness);

  // For cookie and a thank you message for the POST request
  // res.cookie('bestcookie', 'samoas', { maxAge: 900000, httpOnly: false});
  res.cookie('favoriteFruit', req.body.favoriteFruit, { maxAge: 900000, httpOnly: false });
  res.send("Thanks for sharing your food preferences!");
});

// Exports router object
module.exports = router;
