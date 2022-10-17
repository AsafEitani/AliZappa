var express = require('express');
const mongoose = require('mongoose')
const AdminController = require('../controllers/admin')
var router = express.Router();
var connectionString = "mongodb://mongo:secret@localhost:27017/";
 
mongoose.connect(connectionString)
 
router.get('/login', (req, res) => {res.render("../views/login")});

router.post('/loginAdmin', AdminController.login)
 
 
module.exports = router;