/**
 * 获取屏幕信息
 * @returns {{inDevice: number, ppi: number, inHeight: number, inWidth: number, cunDevice: number}}
 */
function getScreenInfo() {
    const el = document.createElement('div');
    el.style.width = "1in";
    el.style.padding = '0';
    document.body.appendChild(el);
    const ppi = el.offsetWidth;
    document.body.removeChild(el);
    const inWidth = window.screen.width / ppi;
    const inHeight = window.screen.height / ppi;
    const inDevice = Math.round(Math.sqrt(inWidth * inWidth + inHeight * inHeight));
    const cunDevice = Math.round(Math.sqrt(inWidth * inWidth + inHeight * inHeight) * 0.762);

    return {
        ppi,
        inWidth,  // 屏幕宽度（英寸）
        inHeight,  // 屏幕高度（英寸）
        inDevice,  // 屏幕尺寸（英寸）
        cunDevice,  // 屏幕尺寸（寸）
    }
}

/**
 * 获取屏幕刷新率FPS
 * @param options
 * @returns {Promise<any>}
 */
function getScreenFps(options = {}) {
    // 先做一下兼容性处理
    const nextFrame = ([
        window.requestAnimationFrame,
        window.webkitRequestAnimationFrame,
        window.mozRequestAnimationFrame
    ]).find(fn => fn)
    if (!nextFrame) {
        console.error('requestAnimationFrame is not supported!');
        return;
    }

    const {
        testFrameCount = 50
    } = options;

    const beginDate = Date.now();
    let count = 0;
    return new Promise(resolve => {
        (function log() {
            nextFrame(() => {
                if (++count >= testFrameCount) {
                    const diffDate = Date.now() - beginDate;
                    const fps = (count / diffDate) * 1000;
                    return resolve(fps);
                }
                log();
            })
        })()
    })
}


module.exports = {
    getScreenInfo,
    getScreenFps
}
