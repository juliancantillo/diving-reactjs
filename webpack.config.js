var config = {
   // tell webpack where our root component is
   entry: './app/components/app.js',
   output: {
      filename: 'public/bundle.js'
   },
   module: {
      loaders: [
         {
            test: '/\.jsx?$/',
            exclude: '/(node_modules | bower_components)/',
            loader: 'babel',
            query: {
               // all the transformations that babel is going to do in or code
               presets: ['es2015', 'react']
            }
         }
      ]
   }
};

// export an object that has all webpack configuration stuff
module.exports = config;