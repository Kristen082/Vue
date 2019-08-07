const path = require('path');
module.exports={
    // mode:'production', //设置环境
    entry: path.join(__dirname,'./src/index.js'),
    // entry: {
    //     index: path.join(__dirname,'./src/index.js'),
    //     app:path.join(__dirname,'./src/app.js')
    // },
    // entry:[
    //     path.join(__dirname,'./src/index.js'),
    //     path.join(__dirname,'./src/app.js')
    // ],
    output:{
        path:path.join(__dirname,'build'),
        filename:'[name].js'
    },
    module:{
        rules:[
            {
                test:/\.(js | jsx)$/,
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
                test:/\.(jpg|png|gif|jpeg)$/,
                loader:'url-loader',
                options:{
                    limit:4000
                }
            }
        ]
    }
}