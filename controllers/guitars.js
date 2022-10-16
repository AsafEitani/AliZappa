const Guitar = require('../models/guitars');

const get = (req, res) => {
    Guitar.find().then(results => {
        res.render("../views/guitars", { guitars: results });
    });
}

const create = (req, res) => {
 
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
}

// const search = (req, res) => {
//     Shop.find({
//         "name": {
//             $regex: `.*${req.query.shop_name}.*`
//         },
//         "type": {
//             $regex: `.*${req.query.type}.*`
//         },
//         "address": {
//             $regex: `.*${req.query.address}.*`
//         }
//         })
//         .then(results => {
//             res.render("../views/shops", { shops: results });
//         });
// }

module.exports = {
    get,
    create,
    // search
}
