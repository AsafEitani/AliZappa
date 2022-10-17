const Shop = require('../models/shops');

const list = (req, res) => {
    Shop.find().then(results => {
        res.render("../views/shops", { shops: results });
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
