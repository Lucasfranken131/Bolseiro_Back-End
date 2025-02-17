var mysql = require('mysql2')

var connectionToSQL = () => {
    return connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '1234',
        database: 'bolseiro',
    });   
}

module.exports = () => {
    return connectionToSQL
}