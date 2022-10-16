var express = require('express');
const mongoose = require('mongoose')
const GuitarsController = require('../controllers/guitars')
var router = express.Router();
var connectionString = "mongodb://mongo:secret@localhost:27017/";
 
mongoose.connect(connectionString)
 
router.get('/guitars', GuitarsController.get);

router.post('/registerGuitar', GuitarsController.create)

// router.get('/searchShop', ShopsController.search)
 
 
module.exports = router;