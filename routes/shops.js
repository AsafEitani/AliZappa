var express = require('express');
const mongoose = require('mongoose')
const ShopsController = require('../controllers/shops')
var router = express.Router();
var connectionString = "mongodb://mongo:secret@localhost:27017/";
 
mongoose.connect(connectionString)
 
router.get('/shops', ShopsController.list);

router.post('/registerShop', ShopsController.create)

router.get('/searchShop', ShopsController.search)

router.get('/editShop', ShopsController.getById)

router.post('/deleteShop', ShopsController.deleteShop)

router.post('/updateShop', ShopsController.update)
 
 
module.exports = router;