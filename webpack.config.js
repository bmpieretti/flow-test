const path = require('path');

module.exports = {
  entry: "./src/index.jsx",
  output: {
      filename: "bundle.js",
      path: __dirname + "/dist"
  },
  devtool: "source-map",
  resolve: {
      extensions: [".js", ".jsx"]
  },
  module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: path.resolve(__dirname, 'src'),
          loader: 'babel-loader'
        },
      ]
  },
  externals: {
      "react": "React",
      "react-dom": "ReactDOM"
  }
};