const Guitar = require('../models/guitars');

const list = (req, res) => {
    Guitar.find().then(results => {
        if (!req.cookies.isAdmin) {
            res.render("../views/guitars", { guitars: results, isAdmin: false });
        } else {
            res.render("../views/guitars", { guitars: results, isAdmin: true });
        }
    });
}

const getById = (req, res) => {
    if (!req.cookies.isAdmin) {
        res.send('Please login as admin!')
    } else {
        Guitar.findById(req.query.id).then(results => {
            res.render("../views/editGuitar", { guitar: results });
        });
    }
}

const create = (req, res) => {
    if (req.body.name == '') {
        const newGuitar = new Guitar({
            name: req.body.name,
            type: req.body.type,
            manufacturer: req.body.manufacturer,
            stringCount: req.body.stringCount,
            price: req.body.price
        })
     
        newGuitar.save().then(() => {
            res.redirect('/guitars');
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

    Guitar.find({
        "name": {
            $regex: `.*${req.query.guitar_name}.*`
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
            res.render("../views/guitars", { guitars: results });
        });
}

const deleteGuitar = (req, res) => {
    if (!req.cookies.isAdmin) {
        res.send('Please login as admin!')
    } else {
        Guitar.findByIdAndDelete(req.body.id).then(() => res.redirect('/guitars'));
    }
}
 
const update = (req, res) => {
    if (!req.cookies.isAdmin) {
        res.send('Please login as admin!')
    } else {
        Guitar.findById(req.body.id)
            .then(guitar => {
                if (guitar) {
                    guitar.name = req.body.name;
                    guitar.manufacturer = req.body.manufacturer;
                    guitar.stringCount = req.body.stringCount;
                    guitar.price = req.body.price;
                    guitar.save().then(() => res.redirect('/guitars'));
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
    deleteGuitar,
    update
}
