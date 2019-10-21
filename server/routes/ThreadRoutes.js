const express = require('express');
const challengeRoutes = express.Router();

const Challenge = require('../models/Challenge');
const Thread = require('../models/Thread');
const Message = require('../models/Message');
const User = require('../models/User');

challengeRoutes.get('/discussion/:id', (req, res) => {
    var challengeId = req.params.id;

    Thread.findOne({
            where: {
                challengeId: challengeId
            }
        })
        .then(currentThread => {
            Message.findAll({
                where: {
                    threadId: currentThread.id
                },
                include: {
                    model: User,
                    attributes: ['fname', 'lname']
                }
            }).then(messages => res.json(messages));
        });
});

module.exports = challengeRoutes;