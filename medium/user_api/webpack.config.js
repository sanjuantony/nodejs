const path = require('path');
const logger = require('./logger/logger');

logger.info("__dirname: "+__dirname);

/*
module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'api.bundle.js'
  },
  target: 'node'
};
*/

var config = {
    entry: './index.js',
    target: 'node'
};

module.exports = function(env, argv) {
    //entry: './index.js',
    if(argv.mode === 'development') {
        config.output = {
            path: path.resolve(__dirname, 'qa-dist'),
            filename: 'qa.api.bundle.js'
        }
    }
    
    if(argv.mode === 'production') {
        config.output = {
            path: path.resolve(__dirname, 'prod-dist'),
            filename: 'prod.api.bundle.js'
        }
    }

    return config;
  };