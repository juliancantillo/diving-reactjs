var config = {
   // tell webpack where our root component is
   entry: './app/components/app.js',
   output: {
      filename: 'public/bundle.js'
   },
   resolve: {
      extensions: ['', '.js', '.jsx']
   },
   module: {
      loaders: [
         {
            test: '/\.jsx?$/',
            exclude: '/(node_modules | bower_components)/',
            loader: 'babel'
         }
      ]
   }
};

// export an object that has all webpack configuration stuff
module.exports = config;