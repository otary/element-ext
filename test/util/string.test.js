const {string} = require('../../src/util/index.js');


test('string.toCamel', () => {
    expect(string.toCamel("UserName")).toBe('user_name');
    expect(string.toCamel("UserName", '#')).toBe('user#name');
});

test('string.render', () => {
    expect(string.render("my name is {name}", {
        name: "zhangsan"
    })).toBe("my name is zhangsan");
})
