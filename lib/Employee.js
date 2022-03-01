class Employee {
    constructor(name = '') {
        this.name = name;
        this.id = Math.floor(Math.random() * 30 + 99);

    }

    getId() {
        const min = this.id - 25
        const max = this.id + 25

        return Math.floor(Math.random() * (max - min) + min);
    }

    getEmail() {
        return `${this.name}'s email is  ${this.email}!`;
    }
}
module.exports = Employee
