const {file} = require('../../src/util/index.js');

test('file.getFileName', () => {
    expect(file.getFileName("/to/path/abc.json")).toBe('abc');
});

test('file.getFileExtension', () => {
    expect(file.getFileExtension("/to/path/abc.json")).toBe('json');
});
