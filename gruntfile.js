module.exports = function(grunt) {

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-clean');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      build: ['dist'],
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= pkg.version %> | Date: <%= grunt.template.today("yyyy-mm-dd")%> | Licensed: <%= pkg.license %> */\n',
        sourceMap: true
      },
      build: {
        files: [
          { src: 'js/modal-loading.js', dest: 'dist/js/modal-loading.min.js' }
        ]
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'css',
          src: ['**.css'],
          dest: 'dist/css',
          ext: '.min.css'
        }]
      }
    }
  });

  // Default task(s).
  grunt.registerTask('default', ['clean', 'uglify', 'cssmin']);

};