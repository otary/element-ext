/**
 * 获取文件后缀名
 * @param fileName
 */
function getFileExtension(fileName) {
    return fileName.split('.').pop();
}

/**
 * 获取文件名
 * @param fileName
 * @returns {string}
 */
function getFileName(fileName) {
    return fileName.substring(fileName.lastIndexOf('/') + 1, fileName.lastIndexOf("."));
}

module.exports = {
    getFileExtension,
    getFileName
};
