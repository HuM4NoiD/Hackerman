var mysql = require('mysql');

var dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hackerman'
});

module.exports = dbConnection;