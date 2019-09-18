//首先我们需要明确的是:webpack是基于nodejs的构建工具,所以nodejs的语法,webpack都支持,而nodejs又是基于谷歌浏览器的V8引擎(解析JS用的)的
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebpackPlugin({
    template:path.join(__dirname,'./src/index.html'),// 需要生成的HTML的模板文件的路径
    filename:'index.html' // 生成后HTML文件的名称
})//注意:用插件生成的html文件会存在于内存中,而不是我们的磁盘中!,且它会自动引入打包后的main.js文件

module.exports ={
    mode:'production',//mode选项是必须的,这个选项可选两个值:production(开发)和development(生产)
//    webpack4.0以上的版本有一个特性 约定大于配置  webpack打包,默认(约定了)会去找src下面的index.js作为入口文件来进行打包
//    并在dist文件夹里面生成一个main.js 而不必我们再手动配置entry和output
//    且4.0以后的版本必须要安装webpack-cli这个脚手架才能运行起来

// 配置热更新(安装webpack-dev-server,然后去package.json的scripts里面配置dev),配置完热更新之后的webpack 默认打开的页面会是根目录,
//特别注意:现在我们执行npm run dev命令以后,发现dist文件夹中的main.js根本就没有变化,那么打包新生成的main.js在哪?内存中!

//  因为打开的是根目录,我们想要默认开发的就是index.html?就需要装一个插件html-webpack-plugin
    plugins:[//配置插件
        htmlPlugin
    ]

}