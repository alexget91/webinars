const path = require(`path`);
const ExtractTextPlugin = require(`extract-text-webpack-plugin`);

module.exports = {
  entry: `./src/js/index.jsx`,
  resolve: {
    extensions: [`.js`, `.jsx`]
  },
  output: {
    filename: `bundle.js`,
    path: path.join(__dirname, `public`)
  },
  devServer: {
    contentBase: path.join(__dirname, `public`),
    compress: false,
    open: true,
    port: 1337,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: `babel-loader`,
        },
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: `style-loader`,
          use: [`css-loader`, `sass-loader`]
        })
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        loader: `url-loader`,
        options: {
          limit: 1000,
          name: `img/[name].[ext]`
        }
      },
      {
        test: /\.svg$/,
        loader: `file-loader`,
        options: {
          limit: 1000,
          name: `img/[name].[ext]`
        }
      },
      {
        test: /\.(woff|woff2)$/,
        loader: `file-loader`,
        options: {
          name: `fonts/[name].[ext]`,
        }
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin(`style.css`)
  ],
  devtool: `source-map`
};
