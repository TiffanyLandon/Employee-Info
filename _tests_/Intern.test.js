const Intern = require('../lib/Intern')

test('create a new Intern', () => {
    const intern = new Intern('Landon', '3', 'Landon124@gmail.com', "Turner Tech")

    expect(intern.name).toBe('Landon');
    expect(intern.Id).toBe('3');
    expect(intern.email).toBe('Landon124@gmail.com');
    expect(intern.school).toBe('Turner Tech')

})

test('Intern role', () => {
    const intern = new Intern('Landon', '3', 'Landon124@gmail.com', "Turner Tech")

    expect(intern.getRole()).toEqual(expect.stringContaining('Intern'))
})