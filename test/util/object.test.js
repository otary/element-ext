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
    expect(o1 === o2).toBeFalsy();
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
