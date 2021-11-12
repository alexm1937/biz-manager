
const inquirer = require('inquirer');
const mysql = require('mysql2');

//imports connection to DB
const db = require('./db/connection.js')

//define sql query actions and import here from queries.sql

//requirer prompts here

var startApp = function() {
    db.query(
        `SELECT * FROM department`,
        function(err, results, fields) {
            console.log(results);
            console.log(fields);
        }
    )
}

db.connect(err=> {
    if(err) throw err;
    console.log('Database connected');
});

startApp();
    