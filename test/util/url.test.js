const  _ext = require('../../src/index.js');





test('测试', ()=>{
    console.log(_ext.string);
    expect(_ext.string.toCamel("ssssSASks")).toBe('ssss_s_a_sks');
});
