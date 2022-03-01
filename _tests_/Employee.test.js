const Employee = require('../lib/Employee')

test('create employee name', () => {
    const employee = new Employee('Kadeem');

    expect(employee.name).toBe('Kadeem');
});

test('create employee id', () => {
    const employee = new Employee('Kadeem');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('create a employee email', () => {
    const employee = new Employee('Kadeem');

    expect(employee.getEmail()).toBe('KadeemMCclendon@gmail.com');
})