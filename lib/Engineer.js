const Employee = require('../lib/Employee')

test('create employee name', () => {
    const employee = new Employee('Kadeem');

    expect(employee.name).toBe('Kadeem');
});

test('create employee id', () => {
    const employee = new Employee('Kadeem');

    expect(employee.getId()).toEqual(expect.any(Number));
})