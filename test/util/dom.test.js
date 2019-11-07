const {dom} = require('../../src/util/index.js');

/**
 * 延迟阻塞
 */
test('dom.delayInit', () => {

    let loadFinished = false;
    window.setTimeout(() => {
        loadFinished = true;
    }, 2000);

    expect(dom.delayInit(() => {
        return loadFinished;
    }, () => {
        return 'finish';
    })).toBe('finish');

});


test('dom.supportCssProperty', () => {
    expect(dom.supportCssProperty("textShadow")).toBeTruthy();
});
