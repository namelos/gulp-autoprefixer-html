'use strict';

var autoPrefixerHtml = require('autoprefixer-html');
var es = require('event-stream');

module.exports = function(autoprefixerConfig) {
  return es.map(function(file, done) {
    var htmlString = file.contents.toString();

    var prefixed = autoPrefixerHtml(autoprefixerConfig).process(htmlString);
    file.contents = new Buffer(prefixed);

    next();

    function next(err) {
      done(err, file);
    }
  });
};
