const Sequelize = require('sequelize');
const db = require('../database/database');

module.exports = db.sequelize.define(
    'thread', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        challengeId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'challenge',
                key: 'id',
            }
        },
    }, {
        freezeTableName: true,
        timestamps: false
    }
);