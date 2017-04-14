var ExtractTextPlugin = require("extract-text-webpack-plugin");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
  entry: './src/script.js',
  output: {
    filename: './dist/bundle.js'
  },
  watch:true,
  devtool:'eval',
  module: {
   rules: [
     {
       test: /\.scss$/,
       use: ExtractTextPlugin.extract({
         fallback: 'style-loader',
         use: ['css-loader?sourceMap','postcss-loader', 'sass-loader?sourceMap']
       })
     }
   ]
 },
  plugins: [
    new ExtractTextPlugin("./dist/style.css"),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      files: ['./dist/*html'],
      server: { baseDir: ['dist'] }
    })
  ]
};