var express = require('express');
const mongoose = require('mongoose')
const GuitarsController = require('../controllers/guitars')
var router = express.Router();
var connectionString = "mongodb://mongo:secret@localhost:27017/";
 
mongoose.connect(connectionString)
 
router.get('/guitars', GuitarsController.list);

router.post('/registerGuitar', GuitarsController.create)

router.get('/searchGuitar', GuitarsController.search)

router.get('/editGuitar', GuitarsController.getById)

router.post('/deleteGuitar', GuitarsController.deleteGuitar)

router.post('/updateGuitar', GuitarsController.update)
 
 
module.exports = router;