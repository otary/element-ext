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


// 函数节流（每隔延时的时间执行一次）
function throttle(func, wait) {
    let context;
    let args;
    let timeout;
    let result;
    let previous = 0;
    const later = function () {
        previous = new Date();
        timeout = null;
        result = func.apply(context, args);
    };

    return function (...args) {
        const now = new Date();
        const remaining = wait - (now - previous);
        // eslint-disable-next-line no-invalid-this
        context = this;
        if (remaining <= 0) {
            clearTimeout(timeout);
            timeout = null;
            previous = now;
            result = func.apply(context, args);
        }
        else if (!timeout) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
}

// 函数防抖（限制一个函数在一定时间内只能执行一次）
function debounce(func, wait, immediate) {
    let timeout;
    let result;

    return function (...args) {
        // eslint-disable-next-line no-invalid-this
        const context = this;
        const later = function () {
            timeout = null;
            if (!immediate) {
                result = func.apply(context, args);
            }
        };

        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) {
            result = func.apply(context, args);
        }

        return result;
    };
}

module.exports = {
    createFunction,
    execFunction,
    throttle,
    debounce
};
