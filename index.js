
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
//imports connection to DB
const db = require('./db/connection.js')
//import functions
const { addDept } = require('./utils/dept');

db.connect(err=> {
    if(err) throw err;
    console.log('Database connected');
});

//requirer prompts here
// OPTIONS PROMPT: WOULD YOU LIKE TO DO:
const setPrompt = () => {

    inquirer.prompt({
        type: 'list',
        name: 'nextPrompt',
        message: 'What would you like to do?',
        choices: ['View all Departments', 'View all Positions', 'View all Employees', 'Add a Department', 'Exit']
    })
    .then(({nextPrompt}) => {
        if(nextPrompt === 'View all Departments') {
            db.query(
                `SELECT * FROM department`,
                function(err, results) {
                    if(err) throw err;
                    console.table(results);
                    setPrompt();
                }
            )
        };
        if(nextPrompt === 'View all Positions') {
            db.query(
                `SELECT * FROM positions`,
                function(err, results) {
                    if(err) throw err;
                    console.table(results);
                    setPrompt();
                }
            )
        };
        if(nextPrompt === 'View all Employees') {
            db.query(
                `SELECT * FROM employees`,
                function(err, results) {
                    if(err) throw err;
                    console.table(results);
                    setPrompt();
                }
            )
        };
        if(nextPrompt === 'exit') {
            return process.abort();
        }
        if(nextPrompt === 'Add a Department') {
            addDept();
        }
    })
};


setPrompt();
// EXPECTED: 
// VIEW ALL DEPTS
// VIEW ALL Positions
// VIEW ALL EMPLOYEES

// ADD DEPT
// ADD position
// ADD EMP
// UPDATES EMP ROLE



// EXTRA CREDIT
// VIEW EMP BY DEPT
// VIEW EMP BY MANAGER
// REMOVE EMP
// UPDATE EMP MANAGER
// REMOVE position
// REMOVE DEPT
// VIEW TOTAL UTILIZED BY DEPT

// var startApp = function() {
//     db.query(
//         `SELECT * FROM employees`,
//         function(err, results) {
//             if(err) throw err;
//             console.table(results);
//         }
//     )
// }
// startApp();
    