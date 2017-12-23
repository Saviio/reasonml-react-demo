const path = require('path')
const webpack = require('webpack')

const devSrvPort = 3001

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:' + devSrvPort,
    'webpack/hot/only-dev-server',
    './index.re',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.styl$/,
        use: ['style-loader', 'css-loader?modules', 'stylus-loader']
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(re|ml)$/,
        use: {
          loader: 'bs-loader',
          options: {
            module: 'commonjs',
            inSource: false
          }
        }
      }
    ]
  },
  resolve: {
    extensions: ['.re', '.ml', '.js', '.styl']
  },
  devServer: {
    hot: true,
    port: devSrvPort,
    open: true,
    contentBase: path.resolve(__dirname, 'public'),
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}
