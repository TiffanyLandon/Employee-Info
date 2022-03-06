class Employee {
    constructor(name, Id, email) {

        this.name = name;
        this.Id = Id;
        this.email = email;

    }
    //method on how to get the employee name and Id, email. 
    getName() {
        return this.name;
    }

    getId() {
        return this.Id;
    }

    getEmail() {
        return `${this.name}'s email is  ${this.email}!`;
    }

    getRole() {
        return 'Employee'
    }

}
module.exports = Employee
