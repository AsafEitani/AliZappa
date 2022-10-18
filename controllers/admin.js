const User = require('../models/user');

const login = (req, res) => {
    User.findOne({
        "username": req.body.username,
        "password": req.body.password
    }).then(user => {
        if (user) {
            res.cookie('isAdmin', true)
            res.redirect('/adminPage');
        } else
            res.send('Faild login');
    })
    .catch(err => {
        res.status(400).json("Error: " + err)
    })
}

const adminPage = (req, res) => {
    if (!req.cookies.isAdmin) {
        res.send('Please login as admin!')
    } else {
        res.render("../views/admin");
    }
}

module.exports = {
    login,
    adminPage
}
