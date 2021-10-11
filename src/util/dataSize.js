/**
 * 人类可读
 * @param size
 * @returns {string}
 */
function humanReadable(size) {
    if (size < 1024) {
        return size +  ' Byte';
    }
    if (size < 1024 * 1024) {
        return (size / 1024).toFixed(2) + 'KB';
    }

    if (size < 1024 * 1024 * 1024) {
        return (size / 1024 / 1024).toFixed(2) + 'MB';
    }

    if (size < 1024 * 1024 * 1024 * 1024) {
        return (size / 1024 / 1024 / 1024).toFixed(2) + 'GB';
    }
}

module.exports = {
    humanReadable
};
