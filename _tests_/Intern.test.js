const Intern = require('../lib/Intern')

test('create a new manager', () => {
    const intern = new Intern('Landon', '3', 'Landon124@gmail.com', "Turner Tech")

    expect(manager.name).toBe('Landon');
    expect(manager.Id).toBe('3');
    expect(manager.email).toBe('Landon124@gmail.com');
    expect(manager.officeNumber).toBe('Turner Tech')

})

test('Manager role', () => {
    const inter = new Intern('Landon', '3', 'Landon124@gmail.com', "Turner Tech")

    expect(Intern.getRole()).toEqual(expect.stringContaining('Intern'))
})