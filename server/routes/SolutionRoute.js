const express = require('express');
const solutionRoute = express.Router()
const bodyParser = require('body-parser')
solutionRoute.use(bodyParser.urlencoded({
    extended: true
}));

const Solution = require('../models/Solution');

solutionRoute.get('/solution/:userId/:challengeId', (req, res) => {
    var userId = req.params.userId;
    var challengeId = req.params.challengeId;

    Solution.findOne({
            where: {
                userId: userId,
                challengeId: challengeId,
            }
        })
        .then(solution => res.json(solution));
});

solutionRoute.post('/submitSolution', function (req, res) {
    Solution.create({
        lang: req.body.lang,
        sol: req.body.sol,
        userId: req.body.userId,
        challengeId: req.body.challengeId
    }).then(solution => res.status(200).json(solution));
});

module.exports = solutionRoute;