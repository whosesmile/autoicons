/*
 * grunt-autoicons
 * https://github.com/whosesmile/autoicons
 *
 * Copyright (c) 2015 whosesmile
 * Licensed under the MIT license.
 */

'use strict';
var util = require('util');
var path = require('path');
var sizeOf = require('image-size');

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('autoicons', 'The best Grunt plugin ever.', function () {
    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      prefix: 'icon-',
      rename: function (name) {
        return name;
      },
      repath: function (path) {
        return path;
      }
    });

    // Iterate over all specified file groups.
    this.files.forEach(function (f) {
      // Concat specified files.
      var src = f.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        }
        else {
          return true;
        }
      }).map(function (filepath) {
        // Read file source.
        var dimensions = sizeOf(filepath);
        dimensions.path = filepath;

        return dimensions;
      });

      var content = '';

      src.forEach(function (item) {
        content += util.format('.%s%s { width: %dpx; height: %dpx; background-image: url(%s);}\n', options.prefix, options.rename(path.basename(item.path, path.extname(item.path))), item.width, item.height, options.repath(item.path));
      });

      // Write the destination file.
      grunt.file.write(f.dest, content);

      // Print a success message.
      grunt.log.writeln('File "' + f.dest + '" created.');
    });
  });

};