const {color} = require('../../src/util/index.js');

test('color.hexToRgb', () => {
    expect(color.hexToRgb("#ccc")).toEqual( {"b": 204, "g": 204, "r": 204});
    expect(color.hexToRgb("#cccccc")).toEqual( {"b": 204, "g": 204, "r": 204});
    expect(color.hexToRgb("ccc")).toEqual( {"b": 204, "g": 204, "r": 204});
    expect(color.hexToRgb("cccccc")).toEqual( {"b": 204, "g": 204, "r": 204});
});
