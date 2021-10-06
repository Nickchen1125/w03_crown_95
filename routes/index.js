var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', name: '陳君誌', id: '209410595' });
});

module.exports = router;
