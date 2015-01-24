module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            dist: {
                options: {
                    outputStyle: 'compressed',
                    sourceComments: 'map'
                },
                files: {
                    'app/css/main.css': 'app/scss/main.scss'
                }
            }
        },
        watch: {
            grunt: {
                files: ['Gruntfile.js']
            },
            sass: {
                files: 'app/scss/**/*.scss',
                tasks: ['sass']
            },
            livereload: {
                options: {
                    livereload: true
                },
                files: ['app/css/**/*.css', '**/*.html']
            }
        }
    });

    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('build', ['sass']);
    grunt.registerTask('default', ['build', 'watch']);
};
