const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    context: path.resolve(__dirname),
    devtool: "eval-source-map",
    entry: {
        main: [
            'react-hot-loader/patch',
            // activate HMR for React

            'webpack-dev-server/client?http://0.0.0.0:3000',
            // bundle the client for webpack-dev-server
            // and connect to the provided endpoint

            'webpack/hot/only-dev-server',
            // bundle the client for hot reloading
            // only- means to only hot reload for successful updates

            './src/index.js',
            // the entry point of our app
        ],
        vendor: ['onsenui', 'react', 'react-dom', 'react-onsenui']
    },
    output: {
        path: path.resolve(__dirname, 'www/js'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: ['babel-loader'],
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader?name=assets/[name].[ext]'
            }
        ],
    },
    devServer: {
        contentBase: path.join(__dirname, "www"),
        compress: true,
        port: 3000,
        stats: "errors-only",
        hot: true,
        publicPath: '/js/',
        disableHostCheck: true,
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),  // Enable HMR
        new webpack.NamedModulesPlugin(), // prints more readable module names in the browser console on HMR updates
        new webpack.NoEmitOnErrorsPlugin(),
        new BundleAnalyzerPlugin({
            analyzerMode: 'static'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor' // Specify the common bundle's name.
        })
    ],
};