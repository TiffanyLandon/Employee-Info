const Engineer = require("../lib/Engineer")
const Manager = require("../lib/Manager")
const Intern = require("../lib/Intern")

//Generates one card(btrap component) for each member
const generateCards = array => {
    const generateManager = manager => {
        return `    
            <div class="card text-white bg-primary mb-3 p-2" style="max-width: 18rem;">
            <h5 class="card-title text-white text-center">${manager.getName()}</h5>
            <h6 class="card-subtitle mb-2 text-white text-center">${manager.getRole()}</h6>
            <div class="card-body bg-light text-dark text-center">
                    <ul class="list-group list-group-flush bg-white">
                        <li class="list-group-item">${manager.getId()}</li>
                        <li class="list-group-item"><a href="mailto:${manager.getEmail()}">Email</a></li>
                        <li class="list-group-item">${manager.officeNumber}</li>
                    </ul>
                </div>
            </div>
        `
    }
    const generateEngineer = engineer => {
        return `    
            <div class="card text-white bg-primary mb-3 p-2" style="max-width: 18rem;">
            <h5 class="card-title">${engineer.getName()}</h5>
            <h6 class="card-subtitle mb-2 text-white text-center">${engineer.getRole()}</h6>
            <div class="card-body bg-light text-dark text-center">
                    <ul class="list-group list-group-flush bg-white">
                        <li class="list-group-item">${engineer.getId()}</li>
                        <li class="list-group-item"><a href="mailto:${engineer.getEmail()}">Email</a></li>
                        <li class="list-group-item"><a href="https://github.com/${engineer.github}">GitHub</a></li>
                    </ul>
                </div>
            </div>
        `
    }
    const generateIntern = intern => {
        return
        < div class="card text-white bg-primary mb-3 p-2" style="max-width: 18rem;" >
            <h5 class="card-title">${intern.getName()}</h5>
            <h6 class="card-subtitle mb-2 text-white text-center">${intern.getRole()}</h6>
            <div class="card-body bg-light text-dark text-center">
                <ul class="list-group list-group-flush bg-white">
                    <li class="list-group-item">${intern.getId()}</li>
                    <li class="list-group-item"><a href="mailto:${intern.getEmail()}">Email</a></li>
                    <li class="list-group-item">${intern.school}</li>
                </ul>
            </div>
        </div >

    }
    
};

const generateTemplate = function (array) {

    return `
    < !DOCTYPE html >
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                    <meta http-equiv="X-UA-Compatible" content="IE=edge">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
                                <title>Team Profile</title>
                            </head>
                            <body>
                                <div class="container text-center p-4 bg-danger mb-3">
                                    <h3>My Team</h3>
                                </div>
                                <div class="container d-flex justify-content-around">
                                    ${generateCards(array)}
                                </div>
                            </body>
                        </html>
                        `
}

module.exports = generateTemplate