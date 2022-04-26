//Generates one card(btrap component) for each member
const generateCards = function (array) {
    let cards = []
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        console.log(element);
        if (element.getRole() === 'Manager') {
            cards.push(`    
            <div class="card text-white bg-primary mb-3 p-2" style="max-width: 18rem;">
            <h5 class="card-title text-white text-center">${element.getName()}</h5>
            <h6 class="card-subtitle mb-2 text-white text-center">${element.getRole()}</h6>
            <div class="card-body bg-light text-dark text-center">
                    <ul class="list-group list-group-flush bg-white">
                        <li class="list-group-item">${element.getId()}</li>
                        <li class="list-group-item"><a href="mailto:${element.getEmail()}">Email</a></li>
                        <li class="list-group-item">${element.officeNumber}</li>
                    </ul>
                </div>
            </div>
        `)
        } else if (element.getRole() === 'Engineer') {
            cards.push(`    
            <div class="card text-white bg-primary mb-3 p-2" style="max-width: 18rem;">
            <h5 class="card-title">${element.getName()}</h5>
            <h6 class="card-subtitle mb-2 text-white text-center">${element.getRole()}</h6>
            <div class="card-body bg-light text-dark text-center">
                    <ul class="list-group list-group-flush bg-white">
                        <li class="list-group-item">${element.getId()}</li>
                        <li class="list-group-item"><a href="mailto:${element.getEmail()}">Email</a></li>
                        <li class="list-group-item"><a href="https://github.com/${element.github}">GitHub</a></li>
                    </ul>
                </div>
            </div>
        `)
        } else if (element.getRole() === 'Intern') {
            cards.push(`    
            <div class="card text-white bg-primary mb-3 p-2" style="max-width: 18rem;">
            <h5 class="card-title">${element.getName()}</h5>
            <h6 class="card-subtitle mb-2 text-white text-center">${element.getRole()}</h6>
            <div class="card-body bg-light text-dark text-center">
                    <ul class="list-group list-group-flush bg-white">
                        <li class="list-group-item">${element.getId()}</li>
                        <li class="list-group-item"><a href="mailto:${element.getEmail()}">Email</a></li>
                        <li class="list-group-item">${element.school}</li>
                    </ul>
                </div>
            </div>
        `)
        }
    }
    return `${cards.join("")}`
};

const generateTemplate = function (array) {

    return `
<!DOCTYPE html>
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