//James Conn

var express = require('express');
var router = express.Router();

var dbms = require('./dbms.js');

/* POST an order request and enter it into the database */
router.post('/', function(req, res, next) {
	var dbstr = "insert into ORDERS(MONTH, DAY, QUANTITY, TOPPING, NOTES)" +
		" values ('FEB', " + 19 + ", " + req.body.quantity + ", '" +  req.body.topping + "', '" + req.body.notes + "');";
	dbms.dbquery(dbstr, function(data, status){});
});

module.exports = router;
