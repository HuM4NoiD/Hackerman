const express = require('express');
const userRoutes = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

userRoutes.use(bodyParser.urlencoded({
    extended: true
}));

const User = require('../models/User');
const Score = require('../models/Score');

userRoutes.use(cors());

process.env.SECRET_KEY = 'key';

userRoutes.post('/signup', (req, res) => {
    const userData = {
        email: req.body.email,
        fname: req.body.fname,
        lname: req.body.lname,
        gender: req.body.gender,
        dob: req.body.dob,
        password: req.body.password,
    }

    bcrypt.hash(req.body.password, 10, (error, hashed) => {
        if (error) {
            res.json({
                status: 'User Insert Error'
            });
        } else {
            userData.password = hashed;
            User.create(userData)
                .then(user => {
                    console.log(user)
                    res.json({
                        status: 'ok',
                        user: user
                    });
                })
                .catch(err => {
                    res.json({
                        status: err
                    });
                });
        }
    });
});

userRoutes.post('/signin', (req, res) => {
    console.log(req.body)
    User.findOne({
            where: {
                email: req.body.email
            }
        })
        .then(user => {
            if (user) {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                        expiresIn: 1440
                    })
                    res.send(token);
                }
            } else {
                res.status(400).json({
                    error: 'No Such User'
                });
            }
        })
});

userRoutes.get('/profile', (req, res) => {
    var id = req.body.id;
    Score.findAll({
            where: {
                userId: req.body.id,
            }
        })
        .then(scores => res.json(scores));
});

module.exports = userRoutes;