const path = require("path");
const common = require("./webpack.common");
const glob = require("glob");
const WorkboxWebpackPlugin = require("workbox-webpack-plugin");
const { merge } = require("webpack-merge");
const { PurgeCSSPlugin } = require("purgecss-webpack-plugin");
const ImageminWebpackPlugin = require("imagemin-webpack-plugin").default;
const ImageminMozjpeg = require("imagemin-mozjpeg");
const CompressionPlugin = require("compression-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlMinimizerPlugin = require("html-minimizer-webpack-plugin");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            options: {
              presets: ["@babel/preset-env"],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ImageminWebpackPlugin({
      plugins: [
        ImageminMozjpeg({
          quality: 50,
          progressive: true,
        }),
      ],
    }),
    new CompressionPlugin({
      test: /.js$|.css$/,
      algorithm: "gzip",
    }),
    new PurgeCSSPlugin({
      paths: glob.sync(`${path.join(__dirname, "src")}/**/*`, { nodir: true }),
    }),
    new WorkboxWebpackPlugin.InjectManifest({
      swSrc: "./src/scripts/sw.js",
      swDest: "./sw.bundle.js",
    }),
  ],
  optimization: {
    runtimeChunk: "single",
    minimizer: [new CssMinimizerPlugin(), new HtmlMinimizerPlugin()],
    splitChunks: {
      chunks: "all",
      minSize: 20000,
      maxSize: 20000,
      minChunks: 1,
      maxAsyncRequests: 30,
      maxInitialRequests: 30,
      automaticNameDelimiter: "~",
      enforceSizeThreshold: 50000,
      cacheGroups: {
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    },
  },
});
