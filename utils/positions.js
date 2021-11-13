
const db = require('../db/connection');
const inquirer = require('inquirer');



var getId = function(department) {
    let departmentId;
    if(department === 'Engineering') {
        return departmentId = 1; 
    }
}


var addPosition = function() {

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

module.exports = {addPosition};