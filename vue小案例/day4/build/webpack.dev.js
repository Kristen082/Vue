const path = require('path');
const config = require('../config');
const webpack = require('webpack');
const baseConfig = require('./webpack.base');
const webpackMerge = require('webpack-merge');
const devConfig = {
    mode:config.development.mode,
    module:{
        rules:[
            { //css抽离pro  
                test:/\.scss$/,
                use:['style-loader','css-loader','sass-loader'] 
            }
        ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin()  //dev
    ],
    devServer:{ //dev
        port:config.development.port,
        host:config.development.host,
        open:true,
        hot:true,
        before(app){
            app.get('/api/list',(req,res,next)=>{
                res.send();
            });
        }
    },
    devtool:config.development.devtool
};

module.exports = webpackMerge(baseConfig,devConfig);