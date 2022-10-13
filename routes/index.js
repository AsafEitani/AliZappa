'use strict';
var express = require('express');
var router = express.Router();

<<<<<<< HEAD
=======
const products_test = [
  {
    ProductName: "Guitar 3000",
    SupplierID: "1",
    ProductRating: "3",
    ProductColor: "red",
    ProductPrice: "1000",
    ProductID: "1",
    ProductImage: "img",
    ProductQuantityS: 4,
    ProductQuantityM: 5,
    ProductQuantityL: 7
  },
  {
    ProductName: "Guitar 4000",
    SupplierID: "1",
    ProductRating: "4",
    ProductColor: "blue",
    ProductPrice: "1500",
    ProductID: "2",
    ProductImage: "img2",
    ProductQuantityS: 4,
    ProductQuantityM: 5,
    ProductQuantityL: 7
  }]

>>>>>>> 06dee12 (fix styles)
/* GET home page. */
router.get('/', function (req, res) {
<<<<<<< HEAD
    res.render('index', { title: 'Express' });
=======
  res.render('home/home', {
    title: 'AliZappa', products_test: products_test, cart_id: "1", admin: null
  });
});

router.get('/admin', function (req, res) {
    res.render('admin/admin', { title: 'Admin' });
});

router.get('/admin_login', function (req, res) {
  res.render('admin/admin_login', { title: 'Admin Login' });
});

router.get('/admin_products', function (req, res) {
  res.render('admin/admin_products', {
    title: 'Admin Products', products_test: products_test
  });
>>>>>>> 3368bb8 (restructer views dir)
});

<<<<<<< HEAD
module.exports = router;
=======
router.get('/admin_details_products', function (req, res) {
  res.render('admin/admin_details_products', {
    title: 'Admin Products Details', products_test: products_test
  });
});

router.get('/create_product', function (req, res) {
  res.render('products/create_product', {
    title: 'Create Product', products_test: products_test
  });
});

<<<<<<< HEAD
module.exports = router;
>>>>>>> 06dee12 (fix styles)
=======
router.get('/delete_product', function (req, res) {
  res.render('products/delete_product', {
    title: 'Delete Product', products_test: products_test
  });
});

<<<<<<< HEAD
module.exports = router;
>>>>>>> 3fe524b (add delete_product page)
=======
router.get('/product_details', function (req, res) {
  res.render('products/product_details', {
    title: 'Product Details', products_test: products_test, cart_id: "1", admin: null
  });
});

<<<<<<< HEAD
module.exports = router;
>>>>>>> aff32f1 (add product details page)
=======
router.get('/edit_product', function (req, res) {
  res.render('products/edit_product', {
    title: 'Edit Product', products_test: products_test, cart_id: "1", admin: null
  });
});

<<<<<<< HEAD
module.exports = router;
>>>>>>> 1cce62b (add edit product page)
=======
router.get('/product_index', function (req, res) {
  res.render('products/product_index', {
    title: 'Index', products_test: products_test, cart_id: "1", admin: null
  });
});

<<<<<<< HEAD
module.exports = router;
>>>>>>> 10b3a73 (add products index page)
=======
router.get('/prodadmin', function (req, res) {
  res.render('products/prodadmin', {
    title: 'Product Admin', products_test: products_test, cart_id: "1", admin: null
  });
});

<<<<<<< HEAD
module.exports = router;
>>>>>>> 5f60c87 (add product admin page)
=======
router.get('/home', function (req, res) {
  res.render('home/home', {
    title: 'AliZappa', products_test: products_test, cart_id: "1", admin: null
  });
});

<<<<<<< HEAD
module.exports = router;
>>>>>>> b2cc590 (add home page)
=======
router.get('/login', function (req, res) {
  res.render('home/login', {
    title: 'AliZappa - Login', products_test: products_test, cart_id: "1", admin: null
  });
});

module.exports = router;
>>>>>>> 1ece6dc (add login page)
