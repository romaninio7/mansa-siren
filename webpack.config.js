const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  devtool: false,
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  entry: './src/index.tsx',
  target: 'web',
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      //root: __dirname,
      //src: path.resolve(__dirname, 'src'),

      components: path.resolve(__dirname, 'src/components'),
      api: path.resolve(__dirname, 'src/api'),
      consts: path.resolve(__dirname, 'src/consts'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      interfaces: path.resolve(__dirname, 'src/interfaces'),
      utils: path.resolve(__dirname, 'src/utils'),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        //  exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
    ],
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
};
