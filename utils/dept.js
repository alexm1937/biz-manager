const db = require("../db/connection");
const mysql = require('mysql2');
const inquirer = require("inquirer");

// add dept query
var addDept = function() {
    // prompt for: name of new dept
    inquirer.prompt({
        type: 'text',
        name: 'deptName',
        message: 'What is the name of the new Department?'
    })
    .then(({deptName}) => {
        db.query(
            `INSERT INTO department (dept_name)
            VALUES
            ('${deptName}');`,
            function(err, results) {
                if(err) throw err;
                console.log('Department successfully created!');
            }
        )
    })
};

var viewAllDept = function() {
    db.query(
        `SELECT * FROM department`,
        function(err, results) {
            if(err) throw err;
            console.table(results);
            setPrompt();
        }
    )
};
module.exports = { addDept, viewAllDept };