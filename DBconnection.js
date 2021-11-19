const mysql = require('mysql');

function newConnection()
{
    let connection = mysql.createConnection({
        host:'35.239.67.105',
        user: 'root',
        password:'vatman123',
        database:'usersDB'
    });
    return connection;
}
module.exports = newConnection;