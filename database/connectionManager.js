var settings = require('../settings');

var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database:'sample',
    password: settings.const.password
})

connection.call = function(){
    console.log('hi')
}
connection.start = function () {
    connection.connect()

    connection.query('SELECT * from user where emp_ID=1', function (err, rows, fields) {
        if (err) throw err

        console.log('The solution is: ', rows[0]);
    })

    connection.end();
}

module.exports = {
    connection: connection
}