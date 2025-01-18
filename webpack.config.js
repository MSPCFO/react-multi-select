const path = require('path');

module.exports = {
    context: __dirname,
    entry: './src/index.js',
    output: {
        libraryTarget: "commonjs",
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
    },
    externals: ["react", "fuzzy-match-utils"],
    module: {
        rules: [
            {
                test: /\.js?$/,
                exclude: /node_modules/,
                use: 'babel-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
};
