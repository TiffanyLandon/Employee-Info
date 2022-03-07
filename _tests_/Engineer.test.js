const Engineer = require('../lib/Engineer')

test('create engineer name', () => {
    const engineer = new Engineer('Cheryl','4','andy33056@yahoo.com','Cheryl');

    expect(engineer.name).toBe('Cheryl');
});

test('create a , () => {
    const engineer = new Engineer('');

    expect(employee.getId()).toEqual(expect.any(Number));
})