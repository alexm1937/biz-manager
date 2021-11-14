
const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
//imports connection to DB
const db = require('./db/connection.js')


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
        choices: ['View all Departments', 'View all Positions', 'View all Employees', 'Add a Department', 'Add an Employee', 'Add a Position', 'Exit']
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
        if(nextPrompt === 'Add a Department') {
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
        }
        if(nextPrompt === 'Add an Employee') {
            var getId = function(position) {
                let positionId;
                if(position === 'Lead Engineer') {
                    return positionId = 1; 
                }
                if(position === 'Senior Engineer') {
                    return positionId = 2; 
                }
                if(position === 'Junior Engineer') {
                    return positionId = 3; 
                }
                if(position === 'Lead Accountant') {
                    return positionId = 4; 
                }
                if(position === 'Accountant Teamate') {
                    return positionId = 5; 
                }
                if(position === 'General Labor') {
                    return positionId = 6; 
                }
            }
            inquirer.prompt([
                {
                    type: 'text',
                    name: 'first_name',
                    message: 'What is the First Name of your new Employee?'
                },
                {
                    type: 'text',
                    name: 'last_name',
                    message: 'What is the Last Name of your new Employee?'
                },
                {
                    type: 'list',
                    name: 'position',
                    message: 'What is the Position of your new Employee?',
                    choices: ['Lead Engineer', 'Senior Engineer', 'Junior Engineer', 'Lead Accountant', 'Accountant Teamate', 'General Labor']
                }
                // {
                //     type: 'text',
                //     name: 'manager',
                //     message: 'Who is the manager in charge of your new Employee?'
                // }
            ])
            .then(({ first_name, last_name, position }) => {
                db.query(
                    `INSERT INTO employees (first_name, last_name, position)
                    VALUES 
                    ('${first_name}', '${last_name}', '${getId(position)}');
                    `,
                    function(err, results) {
                        if(err) throw err;
                        console.log('Employee successfully created!');
                    }
                )
            })
        }
        if(nextPrompt === 'Add a Position') {
            var getId = function(department) {
                let departmentId;
                if(department === 'Engineering') {
                    return departmentId = 1; 
                }
                if(department === 'Accounting') {
                    return departmentId = 2; 
                }
                if(department === 'Grunts') {
                    return departmentId = 3; 
                }
            }
            inquirer.prompt([
                // propmts for: role name, salary, and department
                {
                    type: 'text',
                    name: 'position_title',
                    message: 'Please enter a title for this new position'
                },
                {
                    type: 'number',
                    name: 'salary',
                    message: 'Please enter the salary (without commas)'
                },
                {
                    type: 'list',
                    name: 'department',
                    message: 'Please select which department this position belongs under',
                    choices: ['Engineering', 'Accounting', 'Grunts']
                }
            ])
            .then(({ position_title, salary, department }) => {
                db.query(
                    `INSERT INTO positions (position_title, salary, dept_id)
                    VALUES 
                    ('${position_title}', '${salary}', '${getId(department)}');
                    `,
                    function(err, results) {
                        if(err) throw err;
                        console.log('Position successfully created!');
                    }
                )
            })
        }
        if(nextPrompt === 'exit') {
            return process.abort();
        }
    })
};

setPrompt();

// EXPECTED: 
// VIEW ALL DEPTS
// VIEW ALL Positions
// VIEW ALL EMPLOYEES
// NEEDS MORE WORK:
// ADD DEPT
// ADD EMP
// ADD position

// UPDATES EMP ROLE



// EXTRA CREDIT
// VIEW EMP BY DEPT
// VIEW EMP BY MANAGER
// REMOVE EMP
// UPDATE EMP MANAGER
// REMOVE position
// REMOVE DEPT
// VIEW TOTAL UTILIZED BY DEPT
