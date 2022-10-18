const Tv = require('../models/tvs');

const list = (req, res) => {
    Tv.find().then(results => {
        if (!req.cookies.isAdmin) {
            res.render("../views/tvs", { tvs: results, isAdmin: false });
        } else {
            res.render("../views/tvs", { tvs: results, isAdmin: true });
        }
    });
}

const getById = (req, res) => {
    if (!req.cookies.isAdmin) {
        res.send('Please login as admin!')
    } else {
        Tv.findById(req.query.id).then(results => {
            res.render("../views/editTv", { tv: results });
        });
    }
}

const create = (req, res) => {
    if (req.body.name == '') {
        const newTv = new Tv({
            name: req.body.name,
            manufacturer: req.body.manufacturer,
            inch: req.body.inch,
            price: req.body.price
        })
     
        newTv.save().then(() => {
            res.redirect('/tvs');
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

    Tv.find({
        "name": {
            $regex: `.*${req.query.tv_name}.*`
        },
        "type": {
            $regex: `.*${req.query.type}.*`
        },
        "manufacturer": {
            $regex: `.*${req.query.manufacturer}.*`
        },
        "price": { $gt: minPrice },
        })
        .then(results => {
            res.render("../views/tvs", { tvs: results });
        });
}

const deleteTv = (req, res) => {
    if (!req.cookies.isAdmin) {
        res.send('Please login as admin!')
    } else {
        Tv.findByIdAndDelete(req.body.id).then(() => res.redirect('/tvs'));
    }
}
 
const update = (req, res) => {
    if (!req.cookies.isAdmin) {
        res.send('Please login as admin!')
    } else {
        Tv.findById(req.body.id)
            .then(tv => {
                if (tv) {
                    tv.name = req.body.name;
                    tv.manufacturer = req.body.manufacturer;
                    tv.inch = req.body.inch;
                    tv.price = req.body.price;
                    tv.save().then(() => res.redirect('/tvs'));
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
    deleteTv,
    update
}
