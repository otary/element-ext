const {number} = require('../../src/util/index.js');

test('number.intToHex', () => {
    expect(number.intToHex(123, 5)).toBe('0007b');
});

test('number.formatMoney', () => {
    expect(number.formatMoney(123421212)).toBe('123,421,212');
});

test('number.random', () => {
    expect(number.random(1, 50)).toBeGreaterThan(1);
});

test('number.add', () => {
    expect(number.add([1.23, 3.451, 5.67])).toBe(10.351);
});

test('number.sub', () => {
    expect(number.sub(9.38, 3.4)).toBe(5.98);
    expect(number.sub(2.38, 9.4)).toBe(-7.02);
});

test('number.div', () => {
   expect(number.div(6.89, 2)).toBe(3.4450000000000003);
});
