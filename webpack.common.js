const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const ImageminWebpackPlugin = require("imagemin-webpack-plugin").default;
const imageminPngquant = require("imagemin-pngquant");

module.exports = {
  entry: {
    app: path.resolve(__dirname, "src/scripts/index.js"),
  },
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new ImageminWebpackPlugin({
      plugins: [
        imageminPngquant({
          quality: [0.3, 0.6],
          verbose: true,
        }),
      ],
    }),
    new HtmlWebpackPlugin({
      filename: "index.html",
      favicon: "src/public/images/favicon/favicon.ico",
      template: path.resolve(__dirname, "src/templates/index.html"),
      inject: "body",
    }),
    new MiniCssExtractPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/public"),
          to: path.resolve(__dirname, "dist/"),
        },
      ],
    }),
  ],
};
