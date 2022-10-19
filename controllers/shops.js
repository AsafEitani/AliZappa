const Shop = require('../models/shops');
const axios = require('axios');

const list = (req, res) => {
    Shop.find().then(results => {
        if (!req.cookies.isAdmin) {
            res.render("../views/shops", { shops: results, isAdmin: false });
        } else {
            res.render("../views/shops", { shops: results, isAdmin: true });
        }
    });
}

const getById = (req, res) => {
    if (!req.cookies.isAdmin) {
        res.send('Please login as admin!')
    } else {
        Shop.findById(req.query.id).then(results => {
            res.render("../views/editShop", { shop: results });
        });
    }
}

const create = (req, res) => {
    if (req.body.name == '') {
        const newShop = new Shop({
            name: req.body.name,
            type: req.body.type,
            content: req.body.content,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            website: req.body.website,
            address: req.body.address,
            lat: req.body.lat,
            lon: req.body.lon
        })
     
        newShop.save().then(() => {
            res.redirect('/shops');
        }).catch(error => {
            res.send('Already exists!' + error)
        });
    
        axios.post(
            'https://api.twitter.com/2/tweets',
            // '{"text": "Hello World3!"}',
            {
                'text': 'new shop created with the name ' + req.body.name
            },
            {
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer N0hfSTQ5TnphVG94amE0aFIzMURmYzJsbDBCZVVma3NqNVpjLXZUYjY3NzNVOjE2NjYxMjI4NzMxMzc6MToxOmF0OjE'
                }
            }
        );
    } else {
        res.send('Empty name please dont do it!')
    }
}

const search = (req, res) => {
    Shop.find({
        "name": {
            $regex: `.*${req.query.shop_name}.*`
        },
        "type": {
            $regex: `.*${req.query.type}.*`
        },
        "address": {
            $regex: `.*${req.query.address}.*`
        }
        })
        .then(results => {
            res.render("../views/shops", { shops: results });
        });
}

const deleteShop = (req, res) => {
    if (!req.cookies.isAdmin) {
        res.send('Please login as admin!')
    } else {
        Shop.findByIdAndDelete(req.body.id).then(() => res.redirect('/shops'));
    }
}
 
const update = (req, res) => {
    if (!req.cookies.isAdmin) {
        res.send('Please login as admin!')
    } else {
        Shop.findById(req.body.id)
            .then(shop => {
                if (shop) {
                    shop.name = req.body.name;
                    shop.content = req.body.shopContent;
                    shop.phoneNumber = req.body.phoneNumber;
                    shop.email = req.body.email;
                    shop.website = req.body.website;
                    shop.address = req.body.address;
                    shop.save().then(() => res.redirect('/shops'));
                } else
                    res.send('No results');
            })
            .catch(err => {
                res.status(400).json("Error: " + err)
            })
    }
}

module.exports = {
    list,
    create,
    search,
    getById,
    deleteShop,
    update
}
