/**
 * Dependencies
 */

var config = require('../../config');

/**
 * Main Controller
 */

module.exports = {

    index: function index (req, res) {

        res.render('index', {
            env: config.env
        });

    }

};