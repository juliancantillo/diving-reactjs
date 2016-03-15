var path = require('path'),
   config = {
   // tell webpack where our root component is
   entry: path.resolve(__dirname, './app/components/app.js'),
   output: {
      filename: path.resolve(__dirname, 'public/bundle.js')
   },
   resolve: {
      extensions: ['', '.js', '.jsx']
   },
   module: {
      loaders: [
         {
            test: '/\.jsx?$/',
            exclude: '/(node_modules | bower_components)/',
            loader: 'babel',
            query: {
               presets: ['es2015', 'react']
            }
         }
      ]
   }
};

// export an object that has all webpack configuration stuff
module.exports = config;