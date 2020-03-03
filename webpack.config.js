const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = function(env, argv) {
  const development = argv.mode === "development";

  return {
    mode: development ? "development" : "production",
    devtool: development ? "inline-source-map" : "source-map",
    entry: "./src/index.tsx",
    output: {
      path: path.resolve(__dirname, "dist")
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: "ts-loader"
        },
        {
          test: /\.css$/,
          use: [
            development ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader"
          ]
        },
        {
          test: /\.svg$/,
          loader: "file-loader"
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "./src/index.html"
      }),
      new MiniCssExtractPlugin()
    ]
  };
};
