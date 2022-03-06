const Employee = require('../lib/Employee')
// connecting it to the employee.js file and the parent file.
class Manager extends Employee {
    constructor(name, Id, email, officeNumber) {
        super(name, Id, email);

        this.officeNumber = officeNumber
    }

    getRole() {
        return 'Manager'
    }
}

module.exports = Manager