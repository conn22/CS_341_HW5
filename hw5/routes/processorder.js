//James Conn

var express = require('express');
var router = express.Router();

var dbms = require('./dbms.js');

router.post('/', function(req, res, next) {
		//json object, no longer used
	//var entry = {orderid: 00, month: 'FEB', day: 19, quantity: req.body.quantity, 
	//topping: req.body.topping, notes: req.body.notes};
	var dbstr = "insert into ORDERS(MONTH, DAY, QUANTITY, TOPPING, NOTES)" +
		" values ('FEB', " + 19 + ", " + req.body.quantity + ", '" +  req.body.topping + "', '" + req.body.notes + "');";
	dbms.dbquery(dbstr, function(data, status){});
});

module.exports = router;
