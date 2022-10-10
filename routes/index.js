'use strict';
var express = require('express');
var router = express.Router();

const products_test = [{
  ProductName: "Guitar 3000",
  ProductColor: "red",
  ProductPrice: "123",
  ProductID: "1",
  ProductImage: "img"
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