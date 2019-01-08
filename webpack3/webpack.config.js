const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
    // entry：需要进行打包的入口文件，可以是单一入口，也可以是多入口(注意,这里必须加上./)
    entry:{
        entry:"./src/main.js"
    },

    // output：配置出口文件的地址，在webpack2.X版本后，支持多出口配置。
    output:{
        path:path.join(__dirname,"dist"),
        filename:"build.js"
    },

    // module：配置模块，主要是解析CSS和图片转换压缩等功能。
    module:{
        //rules: 配置解析模块
        rules:[
            {
                //解决css文件类型的解析规则
                test:/\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {//解析css中图片打包路径不正确
                test: /\.(png|jpg|gif)/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 10000,
                        outputPath: 'images/',//这个images文件夹需要我们自己建 并非打包生成
                    }
                }]
            }]
    },

    // plugins：配置插件，根据你的需要配置不同功能的插件(webpack蕴含,支持许多功能的插件)
    plugins:[
        //打包时自动生成html文件的插件
        new htmlWebpackPlugin({
            template:path.join(__dirname,'./src/index.html'),// 需要生成的HTML的模板文件
            filename:'index.html' // 生成的HTML文件的名称
        })
    ],
};