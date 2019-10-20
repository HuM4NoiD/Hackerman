const Sequelize = require('sequelize');
const db = require('../database/database');

module.exports = db.sequelize.define(
    'user', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lname: {
            type: Sequelize.STRING,
        },
        email: {
            type: Sequelize.STRING,
            allowNull: false
        },
        gender: {
            type: Sequelize.STRING,
            allowNull: false
        },
        dob: {
            type: Sequelize.DATE,
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
    }, {
        timestamps: false,
        freezeTableName: true,
    }
)