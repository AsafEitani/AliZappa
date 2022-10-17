const User = require('../models/user');

const login = (req, res) => {
    User.findOne({
        "username": req.body.username,
        "password": req.body.password
    }).then(user => {
        if (user) {
            res.cookie('isAdmin', true)
            res.redirect('/shops');
        } else
            res.send('Faild login');
    })
    .catch(err => {
        res.status(400).json("Error: " + err)
    })
}

module.exports = {
    login
}
