
/**
 * 获取Canvas位置
 * @param canvas
 * @param x
 * @param y
 * @returns {{x: number, y: number}}
 */
function getCanvasPosition(canvas, x, y) {
    const rect = canvas.getBoundingClientRect();
    return {x: x - rect.left, y: y - rect.top}
}


module.exports = {
    getCanvasPosition
};
