const { override, fixBabelImports, addLessLoader } = require('customize-cra');
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true
    }),
    addLessLoader ({
        javaEnabled: true,
        modifyVars: { '@primary-color': '#1DA57A' }
    })
);
