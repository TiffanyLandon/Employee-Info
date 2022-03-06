const Employee = require('../lib/Employee')

test('create a employee ', () => {
    const employee = new Employee('Kadeem', '1', 'tiffanym.bryan@gmail.com');

    expect(employee.name).toBe('Kadeem');
    expect(employee.Id).toBe('1');
    expect(employee.email).toBe('tiffanym.bryan@gmail.com');
});

test("get name of employee", () => {
    const employee = new Employee('Kadeem')

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name))
});


test('create employee id', () => {
    const employee = new Employee('Kadeem', '1', 'tiffanym.bryan@gmail.com');

    expect(employee.getId()).toEqual(expect.stringContaining(employee.Id));
});

test('create a employee email', () => {
    const employee = new Employee('Kadeem', '1', 'tiffanym.bryan@gmail.com');


    expect(employee.getEmail()).toStrictEqual(expect.stringContaining(employee.email))
});