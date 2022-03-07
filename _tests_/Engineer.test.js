const Engineer = require('../lib/Engineer')

test('create a new Engineer', () => {
    const engineer = new Engineer('Cheryl', '4', 'Landon124@gmail.com', "Cheryl234")

    expect(engineer.name).toBe('Cheryl');
    expect(engineer.Id).toBe('4');
    expect(engineer.email).toBe('Landon124@gmail.com');
    expect(engineer.github).toBe('Cheryl234')

})

test('GitHub username', () => {
    const engineer = new Engineer('Cheryl', '4', 'Landon124@gmail.com', "Cheryl234")

    expect(engineer.getGithub()).toEqual(expect.stringContaining('Cheryl234'))
})

test('Engineer role', () => {
    const engineer = new Engineer('Cheryl', '4', 'Landon124@gmail.com', "Cheryl234")

    expect(engineer.getRole()).toEqual(expect.stringContaining('Engineer'))
})