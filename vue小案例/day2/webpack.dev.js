const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const list = require('./src/data/list.json');
console.log(webpack);
module.exports = {
    // entry:path.join(__dirname,'./src/index.js'), // String  Array  Object 
    // mode:'development',
    entry:{
        index:path.join(__dirname,'./src/index.js'),
        app:path.join(__dirname,'./src/app.js')
    }, // String  Array  Object 
    output:{
        path:path.join(__dirname,'./build'),
        filename:'[hash]-[name].js'
    },
    module:{
        rules:[
            {
                test:/\.(js|jsx)$/,
                loader:'babel-loader',
                options:{
                    "presets":["@babel/preset-env"]
                }
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader']
            },
            {
                test:/\.(jpg|png|jpeg|gif)$/,
                loader:'url-loader', 
                options:{
                    limit:4000
                }
            },
            {
                test:/\.(eot|svg|ttf|woff)$/,
                loader:'file-loader', //小文件类型
                options:{
                    name:'./font/[name].[ext]'
                }
            },{
                test:/\.scss$/,
                use:ExtractTextWebpackPlugin.extract({
                    fallback:'style-loader',
                    use:['css-loader','sass-loader']

                })
                // use:['style-loader','css-loader','sass-loader']
            }
        ]
    },
    plugins:[
        new ExtractTextWebpackPlugin('style.css'),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template:'index.html', // 要编译的模板
            filename:'app.html', //编译之后模板的名字
            title:"1701A", //编译之后模板的title
            inject:true,  //是否注入js,css，默认是true
            minify: {
                removeAttributeQuotes: true, // 去除引号
                collapseWhitespace: true, //去除空格
                removeComments: true, //去除注释
                removeEmptyAttributes: true //去除空属性
            }
        }),
        new webpack.HotModuleReplacementPlugin() //模块热更新
    ],
    devServer:{ //开发
        port:9090,
        open:true,
        hot:true,
        // inline:true,
        host:'localhost',
        before(app){ //middleware
            app.get('/api/list',(req,res,next)=>{
                res.send({code:1,data:list});
            });
            
        },
        proxy:{ //代理
            '/classify/iconlist':'http://localhost:3000'
        }
    },
    resolve:{
        alias:{  //起别名，如果需要精确匹配的话，需要加上$
            '@':path.join(__dirname,'./src/css'),
            'style$':path.join(__dirname,'./src/scss/style.scss')
        }
    }

};