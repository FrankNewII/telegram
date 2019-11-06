const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const config = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].bundle.js",
    },
    devServer: {
        port: 3000,
    },
    plugins: [
        new ExtractTextPlugin(
            {filename: 'style.css'}
        ),
        new HtmlWebpackPlugin({
            template: './src/templates/index.pug',
        })
    ],
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: ['pug-loader']
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(
                    {
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader']
                    })
            }
        ]
    }
};

module.exports = (env, argv) => {
    if (argv.mode === 'development') {
    }
    if (argv.mode === 'production') {
    }
    return config;
};
