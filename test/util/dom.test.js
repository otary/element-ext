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

test('dom.escapeHTML', ()=> {
    expect(dom.escapeHTML('<form class="el-form"><div class="el-form-item"><label class="el-form-item__label">Open search in new tab</label><div class="el-form-item__content"><div role="switch" class="el-switch"><input type="checkbox" name="" true-value="true" class="el-switch__input"><span class="el-switch__core" style="width: 40px;"></span></div></div></div></form>'))
        .toBe('&lt;form class=&quot;el-form&quot;&gt;&lt;div class=&quot;el-form-item&quot;&gt;&lt;label class=&quot;el-form-item__label&quot;&gt;Open search in new tab&lt;/label&gt;&lt;div class=&quot;el-form-item__content&quot;&gt;&lt;div role=&quot;switch&quot; class=&quot;el-switch&quot;&gt;&lt;input type=&quot;checkbox&quot; name=&quot;&quot; true-value=&quot;true&quot; class=&quot;el-switch__input&quot;&gt;&lt;span class=&quot;el-switch__core&quot; style=&quot;width: 40px;&quot;&gt;&lt;/span&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/form&gt;');
});
