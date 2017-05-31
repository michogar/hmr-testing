const path = require('path');

module.exports = {
    context: path.resolve(__dirname),
    devtool: "eval-source-map",
    entry: './src/main.jsx',
    output: {
        path: path.resolve(__dirname, 'www/js'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: [/node_modules/],
                use: [{
                    loader: 'babel-loader',
                    options: { presets: ['es2015', 'react', 'stage-2'] },
                }],
            },
        ],
    },
};