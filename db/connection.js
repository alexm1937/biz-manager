
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    //Note to anyone installing locally: Must have mysql installed! 
    // Replace user and password text inside '' with your own 
    // username and password!
    user: 'root',
    password: 'BradIsRad1!',
    database: 'biz'
    }, 
    console.log('Connected to biz database')
);

module.exports = db;