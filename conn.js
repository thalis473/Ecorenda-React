const mysql = require('mysql')
const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'ecorenda2'
})

module.exports = conn