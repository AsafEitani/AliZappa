var express = require('express');
const mongoose = require('mongoose')
const TvsController = require('../controllers/tvs')
var router = express.Router();
var connectionString = "mongodb://mongo:secret@localhost:27017/";
 
mongoose.connect(connectionString)
 
router.get('/tvs', TvsController.list);

router.post('/registerTv', TvsController.create)

router.get('/searchTv', TvsController.search)

router.get('/editTv', TvsController.getById)

router.post('/deleteTv', TvsController.deleteTv)

router.post('/updateTv', TvsController.update)
 
router.get('/tvByManufacturer', TvsController.tvByManufacturer)

module.exports = router;