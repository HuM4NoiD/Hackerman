const express = require('express');
const competitionRoutes = express.Router();
const sequelize = require('../database/database').sequelize;

const Competition = require('../models/Competition');
const Company = require('../models/Company');

competitionRoutes.get('/compete', (req, res) => {
    sequelize.query('select * from company_compete').then(results => {
        res.json(results);
    });
});

module.exports = competitionRoutes;