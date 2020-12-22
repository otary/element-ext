const {array} = require('../../src/util/index.js');

test('array.isArray', () => {
    expect(array.isArray([1,2])).toBeTruthy();
    expect(array.isArray({a:1})).toBeFalsy();
});
