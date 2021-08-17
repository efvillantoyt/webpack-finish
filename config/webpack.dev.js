const {merge} = require('webpack-merge')
const common = require('./webpack.common')
const {HotModuleReplacementPlugin} = require('webpack')
const ReactRefreshWebpack = require('@pmmmwh/react-refresh-webpack-plugin')

const devConfig = {
    mode: "development",
    devtool:"eval-source-map",
    devServer:{
        contentBase:"./dist",
        open:true,
        port:3000,
        hot:true
    },
    plugins:[
        new HotModuleReplacementPlugin(),
        new ReactRefreshWebpack()
    ]
}

module.exports = merge(common,devConfig)