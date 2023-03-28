const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: {
        bundle:path.resolve(__dirname, 'src/script.js'),
    },
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean:true,
        assetModuleFilename: '[name][ext]'
    },
    devServer: {
        static:{
            directory:path.resolve(__dirname, 'dist'),

        },
        port: 3000,
        open:true,
        hot:true,
        compress:true,
    },
    module:{
        rules:[
            {
            test:/\.css$/i,
            use:[
                'style-loader',
                'css-loader',
                // 'sass-loader'
            ]
        },
        {
            test:/\.html$/,
            use:[
                'html-loader'
            ]
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif|jfif)$/i,
            type: 'asset/resource'
        },
        {
            test: /\.svg$/,
            use: "svg-sprite-loader"
        }
    ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            title:'Webpack App',
            filename: 'index.html',
            template: 'src/index.html',
        }),
    ]
}