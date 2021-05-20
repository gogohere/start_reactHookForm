const { override, fixBabelImports, addLessLoader, addWebpackAlias, useBabelRc } = require('customize-cra');
const path = require('path');
function resolve(dir) {
    return path.join(__dirname, '.', dir);
}

function camelSplit(str) {
    if (str) {
        str = str.replace(/^./, s => s.toLowerCase()).replace(/([A-Z])/g, '-$1');
    }
    return str.toLowerCase();
}

module.exports = override(
    // 加载 maycur-antd 的依赖包
    fixBabelImports('maycur-antd', {
        libraryName: 'maycur-antd',
        // libraryDirectory: 'es', // 不能用es，因为renderEmpty需要用lib
        style: true,
    }),
    // 这里会报hook检测错误
    /* eslint-disable */
    useBabelRc(),
    /* eslint-enable */
    // 添加 less 依赖
    addLessLoader({
        lessOptions: {
            javascriptEnabled: true,
        },
    }, {
        getLocalIdent: (context, localIdentName, localName) => {
            const resourcePath = context.resourcePath;
            let componentName = resourcePath.replace(/\\/g, '/').split('/').slice(-3, -1);
            componentName = camelSplit(componentName.join('-'));
            return `${componentName}__${localName.replace(/([A-Z])/g, '-$1').toLowerCase()}`;
        },
    }),
    // 为文件夹取别名
    addWebpackAlias({
        '@': resolve('src'),
        '@c': resolve('src/components'),
        '@r': resolve('src/routes'),
        '@u': resolve('src/utils'),
        '@s': resolve('src/services'),
    }),
);
