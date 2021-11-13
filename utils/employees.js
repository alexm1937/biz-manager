
const db = require('../db/connection');
const inquirer = require('inquirer');


var getId = function(position) {
    let positionId;
    if(position === 'Lead Engineer') {
        return positionId = 1; 
    }
}

var addEmployee = function() {
    // prompt for
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

module.exports = {addEmployee};

