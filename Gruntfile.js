module.exports = function (grunt) {

  'use strict';

  grunt.initConfig({

    pkg: grunt.file.readJSON('package.json'),

    concurrent: {
      options: {
        logConcurrentOutput: true
      },
      development: ['nodemon', 'watch']
    },

    nodemon: {
      development: {
        options: {
          ignore: ['node_modules/**/*', 'public/**/*']
        },
        script: 'app.js'
      }
    },

    watch: {
      stylus: {
        files: 'public/src/stylus/**/*',
        tasks: ['stylus']
      },
      livereload: {
        options: {
          livereload: true
        },
        files: ['public/src/css/main.css']
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc',
        reporter: require('jshint-stylish')
      },
      files: ['public/src/js/**/*.js']
    },

    stylus: {
      compile: {
        options: {
          compress: false,
          'include css': true,
          import: ['../bower_components/normalize-css/normalize.css']
        },
        files: {
          'public/src/css/main.css': 'public/src/stylus/main.styl'
        }
      }
    }

  });

  require('load-grunt-tasks')(grunt);

  grunt.registerTask('default', [
    'newer:stylus',
    'concurrent'
  ]);

};