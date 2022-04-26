const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Intern = require('./Intern');
const Manager = require('./Manager');
const Employee = require('./Employee');
const fs = require('fs');
const generateTemplate = require('../src/generateTemplate');
const teamJob = [];

const addEmployee = () => {
    return inquirer
        .prompt(
            {
                type: 'list',
                name: 'role',
                message: 'What is your role in the company?',
                choices: ['Intern', 'Engineer', 'Manager', 'Employee'],
                validate: role => {
                    if (role) {
                        return true
                    } else {
                        console.log('Please select a role in company');
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'name',
                message: ' What is your employeer name?',
                validate: nameInput => {
                    if (nameInput) {
                        return true;
                    } else {
                        console.log('Please enter the employeer name');
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'id',
                message: 'Enter the id of the employeer',
                validate: id => {
                    if (id) {
                        return true
                    } else {
                        console.log('Please enter a Id for the employeer');
                        return false
                    }
                }
            },
            {
                type: 'input',
                name: 'email',
                message: 'Please enter the employeer email',
                validate: email => {
                    if (email) {
                        return true
                    } else {
                        console.log('Please enter employeer email');
                        return false
                    }
                }
            },
        )

    then(employeeData => {
        // data for employee types 

        const { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer(name, id, email, github);

            console.log(employee);

        } else if (role === "Intern") {
            employee = new Intern(name, id, email, school);

            console.log(employee);
        }
        else if (role === "Manager") {
            employee = new Manager(name, id, email, school);

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


const addIntern = () => {
    return inquirer
        .prompt({
            type: 'input',
            name: 'school',
            message: 'What school do you go to?',
            when: (input) => input.role === "Intern",
            validate: school => {
                if (school) {
                    return true
                        .then(({ answers }) => {
                            const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
                            employee.push(intern);
                            let template = generateTemplate(Intern);
                            fs.writeFile('../dist/index.html', template, err => {
                                if (err)
                                    throw err;
                            });


                        });
                } else {
                    console.log('Please enter school');
                    return false;

                }
            }
        });
}

const addEngineer = () => {
    return inquirer
        .prompt({
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
            when: (input) => input.role === "Engineer",
            validate: github => {
                if (github) {
                    return true
                        .then(({ answers }) => {
                            const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
                            employee.push(engineer)
                            let template = generateTemplate(engineer)
                            fs.writeFile('../dist/index.html', template, err => {
                                if (err) throw err
                            })
                        })

                } else {
                    console.log('Please enter your github username');
                    return false
                }

            }
        })
};

const addManager = () => {
    inquirer
        .prompt({
            type: 'input',
            name: 'officenumber',
            message: 'What is the manager office number?',
            when: (input) => input.role === "Manager",
            validate: officenumber => {
                if (officenumber) {
                    return true
                        .then(({ answers }) => {
                            const manager = new Manager(answers.name, answers.id, answers.email, answers.officenumber);
                            employee.push(manager)
                            let template = generateTemplate(manager)
                            fs.writeFile('../dist/index.html', template, err => {
                                if (err) throw err
                            })
                        })
                } else {
                    console.log('Please enter the office number.');
                    return false
                }
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
    .then(addIntern)
    .then(addEngineer)
    .then(addManager)
    .then(teamJob => {
        let template = generateTemplate(teamJob)
        fs.writeFile('./dist/index.html', template, err => {
            if (err) throw err
        })
    });

const app = () => addEmployee()

module.exports = app