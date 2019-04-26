const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin'); // 删除每次打包的dist文件
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // 打包独立css
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;  // 打包可视化插件
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');
const dashboard = new Dashboard();

const config = {
  mode: 'development',
  entry: {
    main: './src/main.js'
  },
  output: {
    filename: '[name].[hash:8].js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.ejs$/,
        use: {
          loader: 'ejs-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'style-loader'
          // {
          //   loader: MiniCssExtractPlugin.loader,
          //   options: {
          //     publicPath: '../'
          //   }
          // },
          // 'vue-style-loader',
          // 'style-loader',
          // {loader: 'css-loader', options: {importLoaders: 1}}
        ]
      },
      // {
      //   test: /\.less$/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader
      //     },
      //     'vue-style-loader', 'css-loader', 'postcss-loader', 'less-loader'
      //   ],
      // },
      {
        test: /\.(png|jpg|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'oop-js-设计模式',
      template: './index.html',
      favicon: './favicon.ico'
    }),
    new CleanWebpackPlugin(),//实例化，参数为目录
    new MiniCssExtractPlugin({
      filename: "[name].[hash:8].css"
    }),
    new VueLoaderPlugin(),
    new DashboardPlugin(dashboard.setData),
    new BundleAnalyzerPlugin({
      //  可以是`server`，`static`或`disabled`。
      //  在`server`模式下，分析器将启动HTTP服务器来显示软件包报告。
      //  在“静态”模式下，会生成带有报告的单个HTML文件。
      //  在`disabled`模式下，你可以使用这个插件来将`generateStatsFile`设置为`true`来生成Webpack Stats JSON文件。
      analyzerMode: 'server',
      //  将在“服务器”模式下使用的主机启动HTTP服务器。
      analyzerHost: '127.0.0.1',
      //  将在“服务器”模式下使用的端口启动HTTP服务器。
      analyzerPort: 8888,
      //  路径捆绑，将在`static`模式下生成的报告文件。
      //  相对于捆绑输出目录。
      reportFilename: 'report.html',
      //  模块大小默认显示在报告中。
      //  应该是`stat`，`parsed`或者`gzip`中的一个。
      //  有关更多信息，请参见“定义”一节。
      defaultSizes: 'parsed',
      //  在默认浏览器中自动打开报告
      openAnalyzer: true,
      //  如果为true，则Webpack Stats JSON文件将在bundle输出目录中生成
      generateStatsFile: false,
      //  如果`generateStatsFile`为`true`，将会生成Webpack Stats JSON文件的名字。
      //  相对于捆绑输出目录。
      statsFilename: 'stats.json',
      //  stats.toJson（）方法的选项。
      //  例如，您可以使用`source：false`选项排除统计文件中模块的来源。
      //  在这里查看更多选项：https：  //github.com/webpack/webpack/blob/webpack-1/lib/Stats.js#L21
      statsOptions: null,
      logLevel: 'info' // 日志级别。可以是'信息'，'警告'，'错误'或'沉默'
    })
  ],
  devServer: {
    host: 'localhost',
    port: 9000,   // 端口
    open: false, // 启动后打开浏览器
    overlay: {  // 错误提示
      errors: true
    },
    contentBase: path.join(__dirname, 'dist')
  }
};

module.exports = config;
