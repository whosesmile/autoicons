# grunt-autoicons

> The best Grunt plugin ever.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-autoicons --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-autoicons');
```

## The "autoicons" task

### Overview
In your project's Gruntfile, add a section named `autoicons` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  autoicons: {
    options: {
      rename: function (name) {
        // this name is as class
        return name;
      },
      repath: function (path) {
        // this path is as background-image
        return path;
      }
    },
    icons: {
      src: 'src/images/icons/*.png',
      dest: 'src/css/icons.css'
    }
  }
});
```

### Options

#### options.prefix
Type: `String`
Default value: `icon-`

A string value that is used to prefix this icon image filename as classname

#### options.rename
Type: `function`
Default value: `this icon filename`

A function that is used to rename this classname, default is the icon filename

#### options.repath
Type: `function`
Default value: `this src path`

A function that is used to set this background-url, default is the icon src relative path
