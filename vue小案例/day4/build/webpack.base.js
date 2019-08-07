const path = require('path');
const config = require('../config');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseConfig = {
    entry:config.entryPath,
    module:{ //base 
        rules:[
            {
                test:/\.(js|jsx)$/,
                loader:'babel-loader',
                options:{
                    "presets":['@babel/preset-env']
                }
            },{
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(jpg|png|gif|jpeg)$/,
                loader:'url-loader',
                options:{
                    limit:4000,
                    name:'./img/[name].[ext]'
                }
            },{
                test:/\.(eot|svg|ttf|woff)$/,
                loader:'file-loader',
                options:{
                    name:'./font/[name].[ext]'
                }
            },
            {
                test:/\.html$/,
                loader:'html-loader'
            }
        ]
    },
    plugins:[
        new CleanWebpackPlugin(), //base
        new HtmlWebpackPlugin({ //base
            template:'index.html',
            filename:'app.html',
            inject:true
            // title:'1701B'
        })
    ]
};
module.exports = baseConfig;
