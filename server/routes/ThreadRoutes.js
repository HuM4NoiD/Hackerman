const express = require('express');
const challengeRoutes = express.Router();

const Challenge = require('../models/Challenge');
const Thread = require('../models/Thread');
const Message = require('../models/Message');

challengeRoutes.get('/challenge/:id/discussion', (req, res) => {
    var challengeId = req.params.id;

    Thread.findOne({
        where: {
            id: challengeId
        }
    });
});

module.exports = challengeRoutes;