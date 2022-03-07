const inquirer = require("inquirer");
const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');
const fs = require('fs');
const { generateKey } = require("crypto");

function Job() {
    this.name = name;
    this.id = id;
    this.email = email;
    this.officenumber = officenumber;
    this.school = school;
    this.github = github;

}

Job.prototype.initializeJob = function () {
    inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: ' What is your employeer name?',
            validate: name => {
                if (name) {
                    return true
                        .then(({ name }) => {
                            this.employee = new Employee(name);
                        })
                } else {
                    console.log('Please enter the employeer name');
                    return false
                }
            }
        })
    inquirer
        .prompt({
            type: 'input',
            name: 'id',
            message: 'Enter the id of the employeer',
            validate: id => {
                if (id) {
                    return true
                        .then(({ id }) => {
                            this.id = new Id;
                        })
                } else {
                    console.log('Please enter a Id for the employeer');
                    return false
                }
            }
        })

    inquirer
        .prompt({
            type: 'input',
            name: 'email',
            message: 'Please enter the employeer email',
            validate: email => {
                if (email) {
                    return true
                        .then(({ email }) => {
                            this.email = new email;
                        })
                } else {
                    console.log('Please enter employeer email');
                    return false
                }
            }

        })

    inquirer
        .prompt({
            type: 'list',
            name: 'role',
            message: 'What is your role in the company?',
            choices: ['Intern', 'Engineer', 'Manager', 'Employee'],
            validate: role => {
                if (choices.role === 'Intern') {
                    getIntern()

                } else if (choices.role === 'Engineer') {
                    getEngineer()

                } else if (choices.role === ' Manager') {
                    getManager()
                } else if (choices.role === 'Employee') {
                    let template = generateTemplate(employees)
                    fs.writeFile('./dist/index.html', template, err => {
                        if (err) throw err
                    })
                } else {
                    console.log('Please choices a role');
                    return false
                }
            }
        })


}

const getIntern = () => {
    inquirer
        .prompt({
            type: 'input',
            name: 'school',
            message: 'What school do you go to?',
            validate: school => {
                if (school) {
                    return true
                        .then(({ answers }) => {
                            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                            let template = generateTemplate(Intern)
                            fs.writeFile('./dist/index.html', template, err => {
                                if (err) throw err
                            })


                        })
                } else {
                    console.log('Please enter school');
                    return false

                }
            }
        })
}

const getEngineer = () => {
    inquirer
        .prompt({
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
            validate: github => {
                if (github) {
                    return true
                        .then(({ answers }) => {
                            const engineer = new Engineer(answer.name, answers.id, answers.email, answers.github);
                            let template = generateTemplate(engineer)
                            fs.writeFile('./dist/index.html', template, err => {
                                if (err) throw err
                            })
                        })

                } else {
                    console.log('Please enter your github username');
                    return false
                }

            }
        })
}