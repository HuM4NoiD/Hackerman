const Sequelize = require('sequelize');
const database = {};
const sequelize = new Sequelize(
    'hackerman',
    'root',
    '', {
        host: 'localhost',
        dialect: 'mysql',
        operatorsAliases: false,

        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    }
);

database.Sequelize = Sequelize;
database.sequelize = sequelize;

module.exports = database;