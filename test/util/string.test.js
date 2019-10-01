const {string} = require('../../src/util/index.js');


test('string.toCamel', () => {
    expect(string.toCamel("UserName")).toBe('user_name');
    expect(string.toCamel("UserName", '#')).toBe('user#name');
});
