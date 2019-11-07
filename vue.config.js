const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = {
    baseUrl: './',
    pages: {
        index: {
            entry: './examples/index.js'
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@scss', resolve('src/assets/scss'));
    }
}