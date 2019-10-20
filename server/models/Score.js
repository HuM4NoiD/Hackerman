const Sequelize = require('sequelize');
const db = require('../database/database');

module.exports = db.sequelize.define(
    'message', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        body: {
            type: Sequelize.STRING,
        },
        userId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'user',
                key: 'id',
            }
        },
        threadId: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: {
                model: 'thread',
                key: 'id',
            }
        },
    }, {
        freezeTableName: true
    }
);