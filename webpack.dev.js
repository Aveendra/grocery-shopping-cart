var path = require('path');
var webpack = require('webpack');
var embedFileSize = 65536;
module.exports = {
  resolve: {
    root: [
      path.resolve(path.join(__dirname, '..'))
    ]
  },
  context: path.resolve('./'),
  entry: {
    'entry-hc-home-cart': './components/home-cart/hc-home-cart.js',
    'entry-hc-checkout': './components/checkout/hc-checkout.js',
    'entry-hc-checkout-success': './components/checkout-success/hc-checkout-success.js'
  },
  output: {
    path: path.resolve('./scripts/bundles/'),
    filename: '[name].js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      'Promise': 'imports?this=>global!exports?global.Promise!es6-promise',
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
      'matchMedia': 'imports?this=>global!exports?global.matchMedia!match-media'
    })
  ],
  module: {
    loaders: [{
      test: /\.(es6|js)$/,
      exclude: /node_modules/,
      loaders: ['babel-loader']
    },

			{
				test: /\.scss/,
				exclude: /node_modules/,
				loaders: ['style', 'css?modules&localIdentName=[local]---[hash:base64:5]', 'cssnext', 'sass']
			},
			{
				test: /\.json/,
				exclude: /node_modules/,
				loader: 'json-loader'
			},
      {test: /\.svg$/, loader: `url?limit=${embedFileSize}&mimetype=image/svg+xml`},
      {test: /\.png$/, loader: `url?limit=${embedFileSize}&mimetype=image/png`},
      {test: /\.jpg$/, loader: `url?limit=${embedFileSize}&mimetype=image/jpeg`},
      {test: /\.gif$/, loader: `url?limit=${embedFileSize}&mimetype=image/gif`}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.es6']
  },
  devServer: {
    contentBase: './'
  }
};
