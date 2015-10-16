var express = require('express');
var router = express.Router();

/* GET welcomes listing. */
router.get('/', function(req, res, next) {
  res.send('welcome');
});

module.exports = router;
