"use strict"

const {src, dest } = require("gulp");
const gulp = require ("gulp");
const browserSync = require ("browser-sync");
const del = require ("del");
const autoprefixer = require ("gulp-autoprefixer");
const cssbeautify = require ("gulp-cssbeautify");
const cssnano = require ("gulp-cssnano");
const imagemin = require ("gulp-imagemin");
const plumber = require ("gulp-plumber");
const rename = require ("gulp-rename");
const rigger = require ("gulp-rigger");
const sass = require ("gulp-sass")(require ('sass'));
const removeComments = require ("gulp-strip-css-comments");
const uglify = require ("gulp-uglify");
const panini = require ("panini");



