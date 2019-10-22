const Sequelize = require('sequelize');
const db = require('../database/database');

module.exports = db.sequelize.define(
    'company', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        cname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        domain: {
            type: Sequelize.STRING,
        },
        website: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
        }
    }, {
        timestamps: false,
        freezeTableName: true,
    }
);