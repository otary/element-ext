/**
 * 创建新函数
 */
function createFunction(fnName) {
    return eval('(' + fnName + ')')
}

/**
 * 执行函数
 * @param fnName
 * @param args
 * @returns {*}
 */
function execFunction(fnName, ...args) {
    return eval('(' + fnName + ')')(args);
}


module.exports = {
    createFunction,
    execFunction
};
