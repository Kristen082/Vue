const path = require('path');
const config = require('../config');
const webpack = require('webpack');
const baseConfig = require('./webpack.base');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


const proConfig = {
    mode:config.production.mode,
    output:{
        path:config.production.outputPath,
        filename:'index.js'
    },
    module:{
        rules:[
            { //css抽离pro  
                test:/\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','sass-loader']
                })
             //    use:['style-loader','css-loader','sass-loader'] 
             },
        ]
    },
    plugins:[
        new ExtractTextPlugin('style.css')
    ],
    devtool:config.production.devtool
};

module.exports = webpackMerge(baseConfig,proConfig);