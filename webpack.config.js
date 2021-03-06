const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")

const metadata = require("./src/config/metadata.config")

const webpackConfig = {
    entry: path.resolve(__dirname, "src", "index"),

    output: {
        filename: "[name].[contenthash].bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: (/node_modules/),
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }
            },
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(png|svg|jpg|gif)$/i,
                type: "asset"
            }
        ]
    }, 

    plugins: [
        new HtmlWebpackPlugin({
            title: metadata.title,
            template: path.resolve(__dirname, "src", "index.html")
        })
    ],

    optimization: {
        splitChunks: {
            cacheGroups: {
                node_vendors: {
                    name: "vendor",
                    test: /[\\/]node_modules[\\/]/,
                    chunks: "all",
                    priority: 1
                }
            }
        }
    },

    devtool: "inline-source-map",

    devServer: {
        contentBase: "./dist"
    },

    mode: "production"
}

module.exports = webpackConfig