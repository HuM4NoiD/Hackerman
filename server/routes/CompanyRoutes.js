const express = require('express');
const companyRoutes = express.Router();
const bodyParser = require('body-parser');

process.env.SECRET_KEY = 'key';

companyRoutes.use(bodyParser.urlencoded({
    extended: true
}));

const Challenge = require('../models/Challenge');
const Competition = require('../models/Competition');
const Thread = require('../models/Thread');


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
        .then(challengeCurrent => {
            Thread.create({
                id: challengeCurrent.id,
                challengeId: challengeCurrent.id
            })
            res.status(200).json({
                status: 'Challenge Creation OK'
            })
        })
        .catch(error =>  res.status(500).json({
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


companyRoutes.post('/createCompetiton', (req, res) => {

    var competition = {
        title: req.body.compTitle,
        body: req.body.compBody,
        companyId: req.body.companyId,
    }

    Competition.create(competition)
        .then(competition => res.json({
            competitionId: competition.id
        }));
});

companyRoutes.get('/getCompetitions', (req, res) => {
    Competition.findAll().then(competitions => res.json(competitions));
});

companyRoutes.post('/companySignup', (req, res) => {
    const cData = {
        cname: req.body.cname,
        domain: req.body.domain,
        website: req.body.website,
        password: req.body.password,
    }
    
    bcrypt.hash('test', 10, (error, hashed) => {
        if (error) {
            res.json({
                status: 'User Insert Error'
            });
        } else {
            cData.password = hashed;
            Company.create(cData)
                .then(user => {
                    res.json(user);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    });
});

companyRoutes.post('/companyLogin', (req, res) => {
    Company.findOne({
        where: {
            id: req.body.id,
        }
    })
    .then(company => {
        if (company) {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
                    expiresIn: 1440
                })
                res.send(token);
            }
        } else {
            res.status(400).json({
                error: 'No Such Company'
            });
        }
    })
});

module.exports = companyRoutes;