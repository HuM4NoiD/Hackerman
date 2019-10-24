const express = require('express');
const challengeRoutes = express.Router();

const Challenge = require('../models/Challenge');
const Competition = require('../models/Competition');

challengeRoutes.get('/challenge/:id', (req, res) => {
    Challenge.findOne({
            where: {
                id: req.params.id,
            }
        })
        .then(challenge => res.status(200).json(challenge));
});

challengeRoutes.get('/practice', (req, res) => {
    Challenge.findAll({
            where: {
                compId: null
            },
            attributes: ['id', 'title', 'difficulty']
        })
        .then(challenges => res.status(200).json(challenges));
});

challengeRoutes.get('/compete/:id', (req, res) => {
    Challenge.findAll({
            where: {
                compId: req.params.id
            },
            attributes: ['id', 'title'],
        })
        .then(challenges => res.status(200).json(challenges));
});

module.exports = challengeRoutes;