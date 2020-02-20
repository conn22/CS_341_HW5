//James Conn

var express = require('express');
var router = express.Router();

var stuff = {"data": [
	{ "topping":"plain", "quantity":"6" },
	{ "topping":"cherry", "quantity":"3" },
	{ "topping":"chocolate", "quantity":"4" }
	]
}; 

/* POST orders. */
router.post('/', function(req, res, next) {
	res.json(stuff);
});


module.exports = router;
