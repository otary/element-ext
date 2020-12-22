const {object} = require('../../src/util/index.js');

test('object.clone', () => {
    expect(object.clone({a: 1, b: 2})).toEqual({a: 1, b: 2});


    let o1 = {
        a: 1, b: 2, c: {
            c1: 3,
            c2: 4
        }
    };

    // 浅复制
    let o2 = object.clone(o1);
    expect(o1 == o2).toBeFalsy();
    expect(o1).toEqual(o2);

    // 深复制
    let o3 = object.cloneDeep(o1);
    expect(o1 == o3).toBeFalsy();
    expect(o1).toEqual(o3);

});

test('object.conformsTo', () => {
    expect(object.conformsTo({a: 1, b: 2}, {
        'a': function (n) {
            return n == 1;
        }
    })).toBeTruthy();
});

test('object.getType', () => {
    const array = [1, 2];
    const o = {};
    const n = 1;
    const b = false;
    const s = "xxx";
    expect(object.getType(array)).toBe('Array');
    expect(object.getType(o)).toBe('Object');
    expect(object.getType(n)).toBe('Number');
    expect(object.getType(b)).toBe('Boolean');
    expect(object.getType(s)).toBe('String');
});

