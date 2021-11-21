
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    //Note to anyone installing locally: Must have mysql installed! 
    // Replace user and password text inside '' with your own 
    // username and password!
    user: 'enter_your_mysql_local_username',
    password: 'enter_your_mysql_password',
    database: 'biz'
    }, 
    console.log('Connected to biz database')
);

module.exports = db;