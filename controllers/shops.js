const Shop = require('../models/shops');

const get = (req, res) => {
    Shop.find().then(results => {
        res.render("../views/shops", { shops: results });
    });
}

const create = (req, res) => {
 
    const newShop = new Shop({
        name: req.body.name,
        type: req.body.type,
        content: req.body.content,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        website: req.body.website,
        address: req.body.address
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

module.exports = {
    get,
    create,
    search
}
