const Sequelize = require('sequelize');
const db = require('../database/database');

module.exports = db.sequelize.define(
    'message', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            }
        },
        score: {
            type: Sequelize.INTEGER,
        },
        category: {
            type: Sequelize.STRING,
        },
    }, {
        freezeTableName: true
    }
);