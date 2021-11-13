const {join,resolve} = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const notifier = require('node-notifier');
const ICON = join(__dirname, 'icon.png');

module.exports = {
  output: {
    publicPath: '/',
    filename: 'scripts/[name].bundle.js',
    assetModuleFilename: 'images/[name][ext]'
  },

  devServer: {
    historyApiFallback: true,
    contentBase: join(__dirname,'../dist'),
    proxy: {
      '/api': 'http://localhost:3000',
    },
    // hot: true, // hot配置是否启用模块的热替换功能
    inline: false,
    quiet: true,
    open: true,
    overlay: true,
    // host: '0.0.0.0',
    port: 8083
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "CRM系统架构",
      filename: "../index.html",
      template: resolve(__dirname,'../src/web/index.dev.html')
    }),
    new FriendlyErrorsWebpackPlugin({
      onErrors: function(severity, errors) {
        if (severity !== 'error') {
          return;
        }
        const error = errors[0];
        notifier.notify({
          title: 'Webpack error',
          message: severity + ': ' + error.name,
          subtitle: error.file || '',
          icon: ICON,
        });
      },
    })
  ],
};