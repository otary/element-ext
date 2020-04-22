const {number} = require('../../src/util/index.js');

test('number.intToHex', () => {
    expect(number.intToHex(123, 5)).toBe('0007b');
});