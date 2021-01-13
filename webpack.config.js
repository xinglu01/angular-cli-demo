const webpack = require("webpack");
const pkg = require("./package.json");
const path = require("path");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
// 可视化包分析工具
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  plugins: [
    new BundleAnalyzerPlugin()
  ],
  // 拆分模块打包
  optimization: {
    splitChunks: {
      chunks: "all",
      maxAsyncRequests: 10,
      cacheGroups: {
        "@angular": {
          name: "chunk-angular",
          test: /[\\/]node_modules[\\/]@angular[\\/]/,
          priority: 7,
        },
        "ngx-tethys": {
          // 缓存组配置，默认有vendors和default
          name: "chunk-ngx-tethys",
          test: /[\\/]node_modules[\\/]ngx-tethys[\\/]/,
          priority: 5,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
};
