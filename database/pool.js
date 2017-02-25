var constants = require('../settings/constants');

var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    database:'hdfcdb',
    password: constants.password
})

module.exports = pool;