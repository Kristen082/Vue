const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: path.join(__dirname,'./src/index.js'),
    output:{
        path:path.join(__dirname,'build'),
        filename:'index.js'
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                loader:'babel-loader',
                options:{
                    "presets":['@babel/preset-env']
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.scss$/,
                use:ExtractTextPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','sass-loader']
                })
                // use:['style-loader','css-loader','scss-loader']
            },
            {
                test:/\.(jpg|png|jpeg|gif)$/,
                loader:'url-loader',
                options:{
                    limit:4000,
                    name:'./img/[name].[ext]'
                }
            },
            {
                test:/\.(eot|ttf|svg|woff)$/,
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
        new ExtractTextPlugin('style.css'),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'index.html',
            filename:'app.html',
            inject:true,
            title:'1701A'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer:{
        port:9096,
        open:true,
        hot:true,
        // before(app){
        //     app.get('/api/list',(req,res,next)=>{
        //         res.send({code:1});
        //     });
        // }
    }
};