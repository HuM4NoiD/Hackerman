const Sequelize = require('sequelize');
const db = require('../database/database');

module.exports = db.sequelize.define(
    'challenge', {
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
            allowNull: false
        },
        category: {
            type: Sequelize.STRING,
        },
        lang: {
            type: Sequelize.STRING,
        },
        difficulty: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        postedBy: {
            type: Sequelize.INTEGER,
            references: {
                model: 'company',
                key: 'id',
            }
        },
        compId: {
            type: Sequelize.INTEGER,
            references: {
                model: 'competition',
                key: 'id',
            }
        }
    }, {
        freezeTableName: true,
        timestamps: false,
    }
);