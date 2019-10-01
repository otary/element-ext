const {url} = require('../../src/util/index.js');

test('url.getUriParam', () => {
    expect(url.getUriParam('username', 'http://www.baidu.com?username=chenzw')).toBe('chenzw');
});