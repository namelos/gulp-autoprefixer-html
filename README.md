# gulp-autoprefixer-html
This library exists because html-autoprefixer does not accepct *can I use* browser options. There is a pull request, which has been pending for a long time.

## Installation
```sh
yarn add gulp-autoprefixer-html
```

Usage
```js
var gulp = require( "gulp" );
var htmlAutoprefixer = require( "gulp-html-autoprefixer" );

gulp.task( "html-autoprefix", function( ) {
  return gulp.src( "./path/to/index-or-other.html" )
    .pipe( htmlAutoprefixer({ browsers: ['ie >= 10'] }) )
    .pipe( gulp.dest( "dist" ) );
} );
```
