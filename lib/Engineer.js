const Employee = require('../lib/Employee')

test('create engineer name', () => {
    const engineer = new Engineer('Cheryl');

    expect(engineer.name).toBe('Cheryl');
});

test('create engineer id', () => {
    const engineer = new Engineer('');

    expect(employee.getId()).toEqual(expect.any(Number));
})