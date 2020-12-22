/**
 * 动态加载css资源
 * @author chenzw
 * @param url
 */
function loadCss(url) {
    let tag = document.createElement('link');
    for (let i = 0; i < document.links.length; i++) {
        if (document.links[0].href === url) {
            return;
        }
    }
    tag.setAttribute("type", "text/css");
    tag.setAttribute("ref", "style/sheet");
    tag.setAttribute("href", url);

    document.body.appendChild(tag);
}

/**
 * 加载js资源
 * @author chenzw
 * @param url
 */
function loadScript(url) {
    let tag = document.createElement('script');
    for (let i = 0; i < document.scripts.length; i++) {
        if (document.scripts[0].src === url) {
            return;
        }
    }
    tag.setAttribute("src", url);

    document.body.appendChild(tag);
}

/**
 * 延迟阻塞执行
 * @author chenzw
 * @param matchFn
 * @param callbackFn
 */
function delayInit(matchFn, callbackFn) {
    if (matchFn()) {
        let timer = setInterval(function () {
            if (matchFn()) {
                clearInterval(timer);
                return callbackFn();
            }
        }, 50);
    } else {
        return callbackFn();
    }
}


/**
 * 是否支持某个CSS属性
 * @author chenzw
 * @param cssPropertyName
 * @returns {boolean}
 */
function supportCssProperty(cssPropertyName) {
    if (cssPropertyName in document.documentElement.style) {
        return true;
    }
    return false;
}

/**
 * 添加监听事件
 *
 * @author chenzw
 */
const on = (function () {
    if (document.addEventListener) {
        return function (el, event, handler) {
            if (el && event && handler) {
                el.addEventListener(event, handler, false);
            }
        }
    }
    return function (el, event, handler) {
        if (el && event && handler) {
            el.attatchEvent(`on${event}`, handler);
        }
    }
}());

/**
 * 移除监听事件
 *
 * @author chenzw
 */
const off = (function () {
    if (document.removeEventListener) {
        return function (element, event, handler) {
            if (element && event) {
                element.removeEventListener(event, handler, false);
            }
        };
    }
    return function (element, event, handler) {
        if (element && event) {
            element.detachEvent(`on${event}`, handler);
        }
    };
}());

/**
 * 添加一次性事件
 *
 * @author chenzw
 * @param el
 * @param event
 * @param fn
 */
function once(el, event, fn) {
    const listener = function () {
        if (fn) {
            fn.apply(this, [el, event, fn]);
        }
        off(el, event, listener);
    };
    on(el, event, listener);
}

/**
 * 获取鼠标位置（相对于浏览器窗口）
 * @param e
 * @returns {{x: *, y: *}}
 */
function getMousePos(event) {
    let e = event || window.event;
    if (e.pageX || e.pageY) {  // 不兼容IE
        return {
            x: e.pageX,
            y: e.pageY
        }
    } else if (e.clientX || e.clientY) {  // 不兼容Safari
        return {
            x: e.clientX + document.documentElement.scrollLeft + document.body.scrollLeft,
            y: e.clientY + document.documentElement.scrollTop + document.body.scrollTop
        }
    }
}

/**
 * 判断元素是否有指定的类
 * @param el
 * @param className
 * @returns {boolean}
 */
function hasClass(el, className) {
    return el.classList.contains(className);
}

/**
 * 切换元素的class（有则删除，无则添加）
 * @param el
 * @param className
 */
function toggleClass(el, className) {
    el.classList.toggle(className);
}

/**
 * 获取当前页面的滚动位置
 *
 * @param el
 * @returns {{x: number, y: number}}
 */
function getScrollPosition(el = window) {
    return {
        // scrollLeft和scrollTop兼容IE8
        x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
        y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
    }
}

/**
 * 父元素是否包含指定的子元素
 *
 * @param parentEl
 * @param childEl
 * @returns {boolean|*}
 */
function elContains(parentEl, childEl) {
    return parentEl !== childEl && parentEl.contains(childEl);
}

/**
 * 元素在当前视口下是否可见
 * @param el
 * @param partiallyVisible 是否开启全屏
 */
function elVisibleInViewport(el, partiallyVisible = false) {
    const {top, left, bottom, right} = el.getBoundingClientRect();
    const {innerHeight, innerWidth} = window;
    return partiallyVisible
        ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
        : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
}

/**
 * 获取元素中的所有图像
 *
 * @param el
 * @param includeDuplicates 是否去重
 * @returns {*[]}
 */
function getImages(el, includeDuplicates = false) {
    const images = [...el.getElementsByTagName('img')].map(img => img.getAttribute('src'));
    return includeDuplicates ? images : [...new Set(images)];
}



module.exports = {
    loadCss,
    loadScript,
    delayInit,
    supportCssProperty,
    on,
    off,
    once,
    getMousePos,
    hasClass,
    toggleClass,
    getScrollPosition,
    elContains,
    elVisibleInViewport,
    getImages
};
