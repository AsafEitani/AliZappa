var express = require('express');
const mongoose = require('mongoose')
const PhoensController = require('../controllers/phones')
var router = express.Router();
var connectionString = "mongodb://mongo:secret@localhost:27017/";
 
mongoose.connect(connectionString)
 
router.get('/phones', PhoensController.list);

router.post('/registerPhone', PhoensController.create)

router.get('/searchPhone', PhoensController.search)

router.get('/editPhone', PhoensController.getById)

router.post('/deletePhone', PhoensController.deletePhone)

router.post('/updatePhone', PhoensController.update)
 
router.get('/phoneByManufacturer', PhoensController.phoneByManufacturer)
 
module.exports = router;