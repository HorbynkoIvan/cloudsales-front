var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
/* necessary for creating separate css file*/
/*var HtmlWebpackPlugin = require('html-webpack-plugin');
/!* necessary for creating html file*!/
var CleanWebpackPlugin = require('clean-webpack-plugin');*/

var extractPlugin = new ExtractTextPlugin({
    filename: 'main.css'
});

module.exports = {
   /* for single entry point*/
    entry: './src/javascript/AdminApplication.js',
     output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },

    /*entry: {
        app1: './src/js/app1.js',
        app2: './src/js/app2.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name]-bundle.js",
        //publicPath: '/dist'
    },*/
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.js$/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015']
                        }
                    }
                ]
            },
            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.html$/,
                use: ['html-loader']
            },
            {
                test: /\.(jpg|png)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            outputPath: 'img/',
                            publicPath: 'img/'
                        }
                    }
                ]
            }
        ]
    },
   /* plugins: [
        extractPlugin,
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),
        new HtmlWebpackPlugin({
            filename: 'users.html',
            template: 'src/users.html'
        }),
        new CleanWebpackPlugin(['dist'])
    ]*/
};