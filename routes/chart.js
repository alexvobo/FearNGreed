var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: "lordlambo",
    database: "btc_feargreed"
});

router.get('/', function (req, res) {
    let sql = "SELECT btc_data.date, btc_data.open,btc_data.high,btc_data.low,btc_data.close,feargreed.classification,feargreed.timestamp,feargreed.value FROM feargreed LEFT JOIN btc_data ON feargreed.date = btc_data.date UNION ALL SELECT btc_data.date, btc_data.open,btc_data.high,btc_data.low, btc_data.close,feargreed.classification,feargreed.timestamp,feargreed.value FROM feargreed RIGHT JOIN btc_data ON feargreed.date = btc_data.date WHERE feargreed.index IS NOT NULL;";

    con.query(sql, function (err, result) {
        if (err)
            throw err;
        else if (result) {
            res.send(result);
        }
    });

});

module.exports = router;