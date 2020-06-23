const path = require('path');
const merge = require('webpack-merge');

function resolve(dir) {
    return path.join(__dirname, dir);
}

module.exports = merge({
    baseUrl: './',
    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('@scss', resolve('src/assets/scss'));
    }
}, (() => {
    // 生产环境下, 增加examples
    if (process.env.NODE_ENV == 'production') {
        return {
            pages: {
                index: {
                    entry: './examples/index.js'
                }
            }
        }
    } else {
        return {}
    }
})());
