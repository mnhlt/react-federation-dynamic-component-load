const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {dependencies} = require('./package.json');
const webpack = require('webpack');

console.log("require('./package.json')", require('./package.json'));

module.exports = {
    mode: "development",
    entry: "/src/index.js", // main js
    output: {
        path: path.resolve(__dirname, "dist"), // output folder
        publicPath: "/",
    },
    devServer: {
        port: 8080,
        open: true,
    },
    module: {
        rules: [
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"],
                    },
                },
            },
            {
                test: /\.css$/,
                use: [
                    "style-loader",
                    "css-loader", // for styles
                ],
            },
        ],
    },
    plugins: [
        new webpack.container.ModuleFederationPlugin({
            name: "host",
            shared: {
                ...dependencies,
                react: {
                    singleton: true,
                    requiredVersion: dependencies["react"],
                },
                "react-dom": {
                    singleton: true,
                    requiredVersion: dependencies["react-dom"],
                },
            },
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html", // base html
        }),
    ],
};
