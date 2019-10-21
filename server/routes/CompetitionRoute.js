const express = require('express');
const competitionRoutes = express.Router();

const Competition = require('../models/Competition');
const Company = require('../models/Company');

competitionRoutes.get('/compete', (req, res) => {
    Competition.findAll({
            attributes: ['id', 'title'],
            include: [{
                model: Company,
                attributes: ['cname']
            }]
        })
        .then(competitions => res.status(200).json(competitions));
});

module.exports = competitionRoutes;