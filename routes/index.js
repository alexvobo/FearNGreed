var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res) {
    console.log("hereasd");
    res.render('index', {title: 'asd'});
});

module.exports = router;
