const mysql = require('mysql')

conexao = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'admin',
    database: 'agenda'
})

module.exports = conexao