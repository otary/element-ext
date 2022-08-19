/**
 * 人类可读
 * @param size
 * @returns {string}
 */
function humanReadable(size, fractionDigits = 2) {
    if (!size) {
        return '0 B';
    }
    const units = new Array('B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB');
    const fsize = parseFloat(size);
    const index = Math.floor(Math.log(fsize) / Math.log(1024));
    const _size = (fsize / Math.pow(1024, index))
        .toFixed(fractionDigits);
    return _size + ' ' + units[index];
}

module.exports = {
    humanReadable
};
