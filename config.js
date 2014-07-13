/**
 * Dependencies
 */

var _ = require('lodash'),
    path = require('path');

/**
 * Config
 */

var rootPath = path.normalize(__dirname),
    env = process.env.NODE_ENV || 'development';

/**
 * Common
 */

var common = {
    root: rootPath,
    port: 3000
};

/**
 * Specific
 */

var config = {

    development: {
        env: 'development',
        public: rootPath + '/public/src',
    },

    production: {
        env: 'production',
        public: rootPath + '/public/dist',
    }

};

module.exports = _.extend(common, config[env]);
