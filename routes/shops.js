var express = require('express');
const mongoose = require('mongoose')
const ShopsController = require('../controllers/shops')
var router = express.Router();
var connectionString = "mongodb://mongo:secret@localhost:27017/";
 
mongoose.connect(connectionString)
 
router.get('/shops', ShopsController.get);

router.post('/registerShop', ShopsController.create)

router.get('/searchShop', ShopsController.search)
 
 
module.exports = router;