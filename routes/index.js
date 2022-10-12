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
    res.render('index', { title: 'Express' });
});

<<<<<<< HEAD
module.exports = router;
=======
router.get('/admin_details_products', function (req, res) {
  res.render('admin_details_products', {
    title: 'Admin Products Details', products_test: products_test
  });
});

router.get('/create_product', function (req, res) {
  res.render('create_product', {
    title: 'Create Product', products_test: products_test
  });
});

<<<<<<< HEAD
module.exports = router;
>>>>>>> 06dee12 (fix styles)
=======
router.get('/delete_product', function (req, res) {
  res.render('delete_product', {
    title: 'Delete Product', products_test: products_test
  });
});

module.exports = router;
>>>>>>> 3fe524b (add delete_product page)
