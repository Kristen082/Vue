//项目的配置信息
const path = require('path');
const config = {
    entryPath: path.join(__dirname,'../src/index.js'), 
    development:{
        port:9096,
        host:'localhost',
        mode:'development',
        devtool:'cheap-module-eval-source-map'
    },
    production:{
        mode:'production',
        outputPath:path.join(__dirname,'../dist'),
        devtool:'source-map'
    }
};


module.exports = config;

