const path=require('path');

const mode = process.env.NODE_ENV || 'development';
const devMode= mode==='development';
const target = devMode ? 'web' : 'browserslist';
const devtool=devMode ? 'source-map' : undefined;


const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { TestContext } = require('node:test');



module.exports ={

mode,
target,
devtool,


entry:path.resolve(__dirname, 'src','index.js'),
output:{
    path:path.resolve(__dirname,'dist'),
    clean:true,
    filename:'index.js',
},
plugins: [
    new HtmlWebpackPlugin({
        template:path.resolve(__dirname,'src', 'index.html')
    }),
    new MiniCssExtractPlugin({
        filename:'style.css'
    })
],
module:{
    rules:[
        {
        test:/\.html$/i,
        loader:"html-loader",
    },
    {
        test: /\.(c|sa|sc)ss$/i,
        use: [
            devMode ? 'style-loader' : MiniCssExtractPlugin.loader,'css-loader',
            'sass-loader'
        ],
    },
        
    ]
}

}