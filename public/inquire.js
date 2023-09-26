const inquirer = require('inquirer');

function getInput() {
    return inquirer.prompt([
        {
            name: 'input',
            message: 'What would you like to do?',
            type: 'list',
            choices: [
                "View all departments",
                "View all roles",
                "View all employees",
                "Add a department",
                "Add a role",
                "Add an employee",
                "Update an employee role"
            ]
        }
    ]);
};

console.log(getInput());

module.exports = getInput;