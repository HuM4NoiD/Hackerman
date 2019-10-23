const Sequelize = require('sequelize');
const db = require('../database/database');

module.exports = db.sequelize.define(
    'solution', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        lang: {
            type: Sequelize.STRING,
            allowNull: false
        },
        sol: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            }
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
        timestamps: false,
    }
);