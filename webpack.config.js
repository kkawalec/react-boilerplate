const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');
const TerserPlugin = require('terser-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const buildEnv = process.env.BUILD_ENV || 'development';
const isProduction = nodeEnv === 'production';

const buildPath = path.join(__dirname, './dist');
const sourcePath = path.join(__dirname, './src');
const imgPath = path.join(__dirname, './src/assets/img');

const plugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(nodeEnv),
    },
  }),
  new webpack.NamedModulesPlugin(),
  new HtmlWebpackPlugin({
    template: path.join('index.html'),
    path: path.join(__dirname, './dist/'),
    filename: 'index.html',
  }),
  new webpack.LoaderOptionsPlugin({
    options: {
      context: sourcePath,
    },
  }),
  // new webpack.ContextReplacementPlugin(/\.\/locale$/, 'empty-module', false, /js$/),
];

if (isProduction) {
  plugins.push(
    new FaviconsWebpackPlugin({
      logo: path.join(imgPath, 'favicon.svg'),
      title: 'Favicon',
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    })
  );
} else {
  plugins.push(
    new webpack.HotModuleReplacementPlugin()
  );
}

const scssRule = [
  'style-loader',
  {
    loader: 'typings-for-css-modules-loader',
    options: {
      sourceMap: !isProduction,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      plugins: [
        autoprefixer(),
      ],
    },
  },
  {
    loader: 'sass-loader',
    options: {
      sourceMap: !isProduction,
    },
  },
];

const rules = [
  {
    test: /\.tsx?$/, loader: 'awesome-typescript-loader',
  },
  {
    test: /\.(png|gif|jpg|eot|ttf|woff|woff2)$/,
    use: 'url-loader?limit=20480&name=assets/[name]-[hash].[ext]',
  },
  {
    test: /\.svg$/,
    use: [
      'url-loader?limit=20480&name=assets/[name]-[hash].[ext]',
      {
        loader: 'svgo-loader',
        options: {
          plugins: [
            {removeDimensions: true},
            {removeViewBox: false},
          ],
        },
      },
    ],
  },
  {
    test: /\.pdf$/,
    use: 'file-loader?name=[name].[ext]',
  },
  {
    test: /\.s?css$/,
    oneOf: [
      {
        include: path.resolve(__dirname, 'src/components'),
        use: scssRule.map(item => item.loader !== 'typings-for-css-modules-loader' ? item : {
          ...item,
          options: {
            ...item.options,
            modules: true,
            camelCase: 'only',
            localIdentName: isProduction ? '[hash:base64]' : '[path][name]__[local]--[hash:base64:5]',
            namedExport: true,
          },
        }),
      },
      {
        use: scssRule,
      },
    ],
  },
];

module.exports = {
  devtool: isProduction ? 'eval' : 'source-map',
  mode: isProduction ? 'production' : 'development',
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          name: 'vendor',
          test: /node_modules/,
          enforce: true,
          filename: 'assets/vendor-[hash].js',
        },
      },
    },
    // minimizer: [
    //   new TerserPlugin({
    //     terserOptions: {
    //       keep_fnames: true,
    //       output: {
    //         comments: false,
    //       },
    //     },
    //     extractComments: false,
    //   }),
    // ],
  },
  entry: {
    js: sourcePath + '/app.tsx',
    vendor: [
      'react',
      'react-dom',
      'react-router',
      'react-router-dom',
      'moment',
      'lodash',
    ],
  },
  node: {
    fs: 'empty',
  },
  output: {
    path: buildPath,
    publicPath: '',
    filename: 'assets/[name]-[hash].js',
    chunkFilename: 'assets/[name]-[hash].js',
  },
  module: {
    rules,
  },
  resolve: {
    extensions: ['.mjs', '.webpack-loader.js', '.web-loader.js',
      '.loader.js', '.js', '.ts', '.tsx', '.css', '.scss', '.svg', 'jpg'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      sourcePath,
    ],
  },
  plugins,
  devServer: {
    contentBase: isProduction ? buildPath : sourcePath,
    historyApiFallback: {disableDotRule: true},
    port: 3005,
    compress: isProduction,
    inline: !isProduction,
    hot: !isProduction,
    host: '0.0.0.0',
    disableHostCheck: true,
    stats: {
      assets: true,
      children: false,
      chunks: false,
      hash: false,
      modules: false,
      publicPath: false,
      timings: true,
      version: false,
      warnings: true,
      colors: {
        green: '\u001B[32m',
      },
    },
    proxy: {


    },
  },
};
