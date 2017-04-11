module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint:{
            files:['*.js','!gruntfile.js'],
            options:{
                "curly":true,
                "eqnull":true,
                "eqeqeq":true,
                "undef":false,
                "globals":{
                    "jQuery":true
                }
            }
        },
        sass: {
            options: {
                sourceMap: true,
                style: 'expanded'
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: './sass/',
                    src: ['**/style.scss'],
                    dest: './sass/',
                    ext: '.css'
                }]
            }
        },
        cssmin: {
            target: {
                files: [{
                    expand: true,
                    cwd: './sass/',
                    src: ['style.css', '!*.min.css'],
                    dest: '',
                    ext: '.min.css'
                }]
            }
        },
        watch: {
            scripts: {
                files: ['**/*.js'],
                tasks: ['jshint'],
                options: {
                    spawn: false
                }
            },
            sass: {
                files: ['./sass/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false
                }
            },
            cssmin: {
                files: './sass/*.css',
                tasks: ['cssmin'],
                options: {
                    spawn:false,
                    event:['all']
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    //Load the plugin that provides the "cssmin" task
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    //Load the plugin that provides the "jshint" task
    grunt.loadNpmTasks('grunt-contrib-jshint');
    // Default task(s).
    grunt.registerTask('default', ['jshint','sass','cssmin']);

};