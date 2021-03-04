const mysql = require('mysql')
const conn = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'ecorenda'
})

module.exports = conn