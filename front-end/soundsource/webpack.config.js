const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
});
module.exports = {
  entry: "./app/assets/frontend/main.jsx",
  output: {
    path: __dirname + "/app/assets/javascripts",
    filename: "bundle.js",
  },
  resolve: {
    extensions: ["", ".js", ".jsx"],
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: "babel",
        exclude: /node_modules/,
        query: {
          cacheDirectory: true,
          presets: ["react", "es2015"],
        },
      },
    ],
  },
};
