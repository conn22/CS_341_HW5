//James Conn

var express = require('express');
var router = express.Router();

var dbms = require('./dbms.js');

//var stuff = {"data": [
//	{ "topping":"plain", "quantity":"6" },
//	{ "topping":"cherry", "quantity":"3" },
//	{ "topping":"chocolate", "quantity":"4" }
//	]
//}; 

/* POST orders. */
	//NOTE: the month name submitted in the where clause seems to be broken
router.post('/', function(req, res, next) {
//	res.json(stuff);
	dbstr = "select QUANTITY, TOPPING from ORDERS"
		+ " where MONTH='" + req.body.month + "';";
	dbms.dbquery(dbstr, function(data, status){});
});


module.exports = router;
