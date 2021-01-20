const mysql = require('mysql')
const conn = mysql.createConnection({
    host : 'bmqafcjabntoriozlsak-mysql.services.clever-cloud.com',
    user : 'u4hj65p0ncmscjnv',
    password : 'QLcmd14mDVsrTWTGGfIc',
    database : 'bmqafcjabntoriozlsak'
})

module.exports = conn