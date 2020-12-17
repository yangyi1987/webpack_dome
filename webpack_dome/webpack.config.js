'use strict'

const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')



module.exports = {
  entry: {
   index: './src/index.js',
   app: './src/app.js'
  },
  output: {
    filename: '[name][hash:8].js', // 多入口文件是多出口
    path:  path.join(__dirname, 'dist')
  },
  mode:'development',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
          }
        ],

      },
      {
        test: /\.css$/,
        use: [
              {
           loader:  MiniCssExtractPlugin.loader,
         },
        //  {
        //    loader:  "style-loader"
        //  },
          {
            loader: "css-loader",
          },
          {
            loader: 'px2rem-loader',
            options: {
              remUni: 75,
              remPrecision: 8
            }
          },
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     plugins: ()=> [
          //       require('autoprefixer')({
          //         browsers: ['last 2 version', ">1%", "ios 7"]
          //       })
          //     ]
          //   }
          // }
        ],
        
      },
      {
        test: /\.less$/,
        use: [
        //  {
        //    loader:  MiniCssExtractPlugin.loader,
        //  },
        {
          loader: 'style-loader'
        },
        {
          loader:   "css-loader", 
         }, 
         {
          loader: "less-loader",
         },
        //  {
        //    loader: "px2rem-loader",
        //    options: {
        //      remUni: 75,
        //      remPrecision: 8
        //    }
        //  }
        
        ]
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: {
          loader:  'file-loader',
          options: {
            name: '[path][name][hash:8].[ext]',
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name][contenthash:8].css'
    }),
    new CleanWebpackPlugin(),
    // 压缩 html
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      chunks: ['index'],
      inject: true,
      minify: {
        html5: true,
        collapseWhitespace: true,
        preserveLineBreaks: false,
        minifyCSS: true,
        minifyJS: true,
        removeComments: false
      }
    }),
    // 压缩css
    new optimizeCssAssetsWebpackPlugin({
      assetNameRegExp: /\.css/,
      cssProcessor: require('cssnano')
    })
  ],
}
