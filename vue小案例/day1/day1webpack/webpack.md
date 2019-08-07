1. webpack是一个模块打包器


2. 下载全局webpack,使用webpack命令
3. 下载全局webpack-cli

4. 新建一个配置文件,默认的文件名webpack.config.js 


5. webpack的四大核心概念
    mode: //设置环境   production（生成环境） development(开发环境)
    - 在配置文件里面设置  mode:"production"
    - 在package.json里面设置  
     "scripts": {
        "build": "webpack  --mode production"
    },

- 入口(entry)
  entry: String | Array | Object     //前两种是单入口文件使用，Object是多入口文件使用
  entry:{  //多入口文件
      key1:value1,
      key2:value2
  }
- 出口(output)
    //编译之后，默认是在dist文件夹下main.js文件
    output:{
        path:path.join(__dirname,'dist'), //编译之后的输出路径,
        filename:''  //编译之后的文件名称，默认是main.js 
        //多入口的时候，出口[hash]-[name].js

     }
 
- 加载器(loader) //解析非js文件的
    module:{
        rules:[
            //babel-loader的配置项设置
             1.需要新建一个.babelrc的一个配置文件
             2. options:{}
            { 
               test:/\.(js|jsx)$/,   //匹配的文件
               loader:'babel-loader',  
               options:{
                   "presets":["@babel/preset-env"]
               }
            },  {
                test:/\.css$/,
                use:['style-loader','css-loader']  //执行顺序是从右往左执行的
            }
        ]
    }

- 插件(plugins)

    plugins:[
        
    ]

    //抽离css
    1. 下载extract-text-webpack-plugin  
    //需要注意的是下载下一个版本  extract-text-webpack-plugin@next

    2. 引入插件

        const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

    3. 调用插件  new ExtractTextWebpackPlugin('style.css') //抽离之后的css文件


    4. 使用插件
        {
            test:/\.scss$/,
            use:ExtractTextWebpackPlugin.extract({
                fallback:'style-loader',
                use:['css-loader','sass-loader']

            })
            // use:['style-loader','css-loader','sass-loader']
        }







