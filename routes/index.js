'use strict';
var express = require('express');
var router = express.Router();

const products_test = [
  {
    ProductName: "Guitar 3000",
    ProductColor: "red",
    ProductPrice: "1000",
    ProductID: "1",
    ProductImage: "img"
  },
  {
    ProductName: "Guitar 4000",
    ProductColor: "blue",
    ProductPrice: "1500",
    ProductID: "2",
    ProductImage: "img2"
  }]

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/admin', function (req, res) {
    res.render('admin', { title: 'Admin' });
});

router.get('/admin_login', function (req, res) {
    res.render('admin_login', { title: 'Admin Login' });
});

router.get('/admin_products', function (req, res) {
  res.render('admin_products', {
    title: 'Admin Products', products_test: products_test
  });
});

module.exports = router;