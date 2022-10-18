const Phone = require('../models/phones');

const list = (req, res) => {
    Phone.find().then(results => {
        if (!req.cookies.isAdmin) {
            res.render("../views/phones", { phones: results, isAdmin: false });
        } else {
            res.render("../views/phones", { phones: results, isAdmin: true });
        }
    });
}

const getById = (req, res) => {
    if (!req.cookies.isAdmin) {
        res.send('Please login as admin!')
    } else {
        Phone.findById(req.query.id).then(results => {
            res.render("../views/editPhone", { phone: results });
        });
    }
}

const create = (req, res) => {
    if (req.body.name == '') {
        const newPhone = new Phone({
            name: req.body.name,
            manufacturer: req.body.manufacturer,
            gb: req.body.gb,
            color: req.body.color,
            dpi: req.body.dpi,
            price: req.body.price
        })
     
        newPhone.save().then(() => {
            res.redirect('/Phones');
        }).catch(error => {
            res.send('Already exists!' + error)
        });
    } else {
        res.send('Empty name please dont do it!')
    }
}

const search = (req, res) => {
    if(req.query.minPrice == ""){
        minPrice = 0
    }else{
        minPrice = req.query.minPrice
    }

    Phone.find({
        "name": {
            $regex: `.*${req.query.phone_name}.*`
        },
        "manufacturer": {
            $regex: `.*${req.query.manufacturer}.*`
        },
        "price": { $gt: minPrice },
        })
        .then(results => {
            res.render("../views/phones", { phones: results });
        });
}

const deletePhone = (req, res) => {
    if (!req.cookies.isAdmin) {
        res.send('Please login as admin!')
    } else {
        Phone.findByIdAndDelete(req.body.id).then(() => res.redirect('/phones'));
    }
}
 
const update = (req, res) => {
    if (!req.cookies.isAdmin) {
        res.send('Please login as admin!')
    } else {
        Phone.findById(req.body.id)
            .then(phone => {
                if (phone) {
                    phone.name = req.body.name;
                    phone.manufacturer = req.body.manufacturer;
                    phone.gb = req.body.gb;
                    phone.color = req.body.gb;
                    phone.dpi = req.body.dpi;
                    phone.price = req.body.price;
                    phone.save().then(() => res.redirect('/phones'));
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
    deletePhone,
    update
}
