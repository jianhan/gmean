const ctrlMain = require('../controllers/main')

var express = require('express');
var router = express.Router();

router.get('/', ctrlMain.index);

module.exports = router;
