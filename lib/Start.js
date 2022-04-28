const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
const Employee = require('./Employee');
const fs = require('fs');
const generateTemplate = require('../src/generateTemplate');
const teamJob = []
// adding the employees
const addEmployee = () => {
    console.log('adding an employee')
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            message: "Please choose employee's role",
            choices: ['Engineer', 'Intern', 'Manager']
        },
        {
            type: 'input',
            name: 'name',
            message: "Enter employee's name.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter an employee's name!");
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Enter employee's ID.",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Please enter the employee's ID!")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Enter employee's email.",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter your email!")
                }
            }
        },
        {
            // github needed for engineer only
            type: 'input',
            name: 'github',
            message: "Enter engineer's github.",
            when: (input) => input.role === "Engineer",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the employee's github username!")
                }
            }
        },
        { // school needed for intern only
            type: 'input',
            name: 'school',
            message: "Enter intern's school",
            when: (input) => input.role === "Intern",
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log("Please enter the intern's school!")
                }
            }
        },
        { // when the user select the manager
            type: 'input',
            name: 'id',
            message: "Enter manager's ID",
            when: (input) => input.role === "Manager",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log("Please enter the manager's ID!")
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Enter manager's office number",
            when: (input) => input.role === "Manager",
            validate: nameInput => {
                if (isNaN(nameInput)) {
                    console.log('Please enter an office number!')
                    return false;
                } else {
                    return true;
                }
            }
        },
        { // add more employee's option
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to add more team members?',
            default: false
        }
    ])
        .then(employeeData => {
            // data for employee types 

            const { name, id, email, role, github, school, officeNumber, confirmAddEmployee } = employeeData;
            let employee;

            if (role === "Engineer") {
                employee = new Engineer(name, id, email, github);

                console.log(employee);

            } else if (role === "Intern") {
                employee = new Intern(name, id, email, school);

                console.log(employee);
            }
            else if (role === "Manager") {
                employee = new Manager(name, id, email, school, officeNumber);

                console.log(employee);
            }

            teamJob.push(employee);

            if (confirmAddEmployee) {
                return addEmployee(teamJob);
            } else {
                return teamJob;
            }
        })

};

// function to generate HTML page file using file system 
const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
            // when the profile has been created 
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html")
        }
    })
};
addEmployee()
    .then(teamJob => {
        return generateTemplate(teamJob);
    })
    .then(pageHTML => {
        return writeFile(pageHTML);
    })
    .catch(err => {
        console.log(err);
    })

const app = () => addEmployee()

module.exports = app