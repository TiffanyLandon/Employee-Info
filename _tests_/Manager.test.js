const Manager = require('../lib/Manager')

test('create a new manager', () => {
    const manager = new Manager('Tiffany', '2', 'tiffanym.bryan@gmail.com', "456")

    expect(manager.name).toBe('Tiffany');
    expect(manager.Id).toBe('2');
    expect(manager.email).toBe('tiffanym.bryan@gmail.com');
    expect(manager.officeNumber).toBe('456')

})

test('Manager role', () => {
    const manager = new Manager('Tiffany', '2', 'tiffanym.bryan@gmail.com', "456")

    expect(manager.getRole()).toEqual(expect.stringContaining('Manager'))
})