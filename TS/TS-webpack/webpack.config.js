/*
 * @Author: HoJack 965389230@qq.com
 * @Date: 2025-02-14 11:29:57
 * @LastEditors: HoJack 965389230@qq.com
 * @LastEditTime: 2025-02-14 11:35:20
 * @Description:
 */
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const isProd = process.env.NODE_ENV === "production"; // 是否生产环境

function resolve(dir) {
  return path.resolve(__dirname, "..", dir);
}

module.exports = {
  mode: isProd ? "production" : "development",
  entry: {
    app: "./src/main.ts",
  },

  output: {
    path: resolve("dist"),
    filename: "[name].[contenthash:8].js",
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        include: [resolve("./src")],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin({}),

    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },

  // devtool: isProd ? "cheap-module-source-map" : "cheap-module-eval-source-map",
  devtool: "cheap-module-source-map",

  devServer: {
    host: "localhost", // 主机名
    // stats: "errors-only", // 打包日志输出输出错误信息
    port: 8081,
    open: true,
  },
};
