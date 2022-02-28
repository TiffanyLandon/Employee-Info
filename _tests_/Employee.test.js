const Employee = require('./Employee')

test('create employee name', () => {
    const employee = new Employee('Kadeem');

    expect(employee.name).toBe('Kadeem');
})