const {date} = require('../../src/util/index.js');

test('date.humanMillisecond', () => {
    expect(date.humanMillisecond(12000)).toBe("12 seconds");
    expect(date.humanMillisecond(126200)).toBe("2 minutes, 6 seconds, 200 milliseconds");
});


