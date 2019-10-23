const Sequelize = require('sequelize');
const db = require('../database/database');

module.exports = db.sequelize.define(
    'competition', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        body: {
            type: Sequelize.STRING,
        },
        companyId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'company',
                key: 'id',
            }
        },
    }, {
        freezeTableName: true,
        timestamps: false,
    }
);