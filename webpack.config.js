const webpack = require("webpack");
const pkg = require("./package.json");
const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
  .BundleAnalyzerPlugin;

module.exports = {
  plugins: [new CleanWebpackPlugin(), new BundleAnalyzerPlugin()],
  // optimization: {
  //   splitChunks: {
  //     chunks: "all",
  //     maxAsyncRequests: 10,
  //     cacheGroups: {
  //       "@angular": {
  //         name: "chunk-angular",
  //         test: /[\\/]node_modules[\\/]@angular[\\/]/,
  //         priority: 6,
  //       },

  //       "ngx-tethys": {
  //         // 缓存组配置，默认有vendors和default
  //         name: "chunk-ngx-tethys",
  //         test: /[\\/]node_modules[\\/]ngx-tethys[\\/]/,
  //         priority: 5,
  //       },
  //     },
  //   },
  // },
};
