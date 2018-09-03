let mysql = require('mysql');
let Conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'apirestaurante'
});

module.exports = Conn;