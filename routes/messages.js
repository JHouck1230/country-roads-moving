'use strict';

var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
  console.log('req.body: ', req.body);
});

module.exports = router;