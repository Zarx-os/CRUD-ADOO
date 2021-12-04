const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const { runtime } = require('webpack');

module.exports = {
    mode: 'production',
    entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins:[
    new HtmlWebpackPlugin({template:'src/index.html'})
  ],
   module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              
              ['@babel/preset-react',{
                runtime : 'automatic' //classic
              }]
            ]
          }
        }
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      }
    ]
  }
};