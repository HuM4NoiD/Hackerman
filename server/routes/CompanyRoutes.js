const express = require('express');
const companyRoutes = express.Router();
const bodyParser = require('body-parser');

companyRoutes.use(bodyParser.urlencoded({
    extended: true
}));

const Challenge = require('../models/Challenge');
const Competition = require('../models/Competition');


companyRoutes.post('/createChallenge', (req, res) => {
    companyId = req.body.companyId;

    var challenge = {
        title: req.body.title,
        body: req.body.textBody,
        category: req.body.category,
        lang: req.body.lang,
        difficulty: req.body.difficulty,
        postedBy: companyId,
        compId: req.body.compId
    }

    Challenge.create(challenge)
        .then(challenge => res.status(200).json({
            status: 'Challenge Creation OK'
        }))
        .catch(error => res.status(500).json({
            status: 'Could Not Insert'
        }));
});

companyRoutes.get('/nonCompChallenges', (req, res) => {
    Challenge.findAll({
        where: {
            compId: null,
        },
        attributes: ['id', 'title'],
    })
    .then(challenges => {
        res.json(challenges);
    })
});


companyRoutes.post('createCompetiton', (req, res) => {
    
    var competition = {
        title: req.body.compTitle,
        body: req.body.compBody,
        companyId: req.body.companyId,
    }

    Competition.create(competition)
    .then(competition => res.json({ competitionId: competition.id }));
});

companyRoutes.get('/getCompetitions', (req, res) => {
    Competition.findAll().then(competitions => res.json(competitions));
});

module.exports = companyRoutes;