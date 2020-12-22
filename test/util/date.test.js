const {date} = require('../../src/util/index.js');

test('date.humanFormat', () => {
    expect(date.humanFormat(12000)).toBe("12 seconds");
    expect(date.humanFormat(126200)).toBe("2 minutes, 6 seconds, 200 milliseconds");
});
