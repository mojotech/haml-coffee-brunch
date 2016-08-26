/* jshint mocha:true */
'use strict';

var assert = require('assert');
var Plugin = require('./');

describe('Plugin', function() {
  var plugin;
  this.timeout(5000);

  beforeEach(function() {
    plugin = new Plugin({ paths: { root: '.' }});
  });

  it('should be an object', function() {
    assert(plugin);
  });

  it('should have a #compileStatic method', function() {
    assert.equal(typeof plugin.compileStatic, 'function');
  });

  // it('should compile a valid result with hamlc template', function(done) {
  //   const content = '%h1= @title';
  //   const expected = '<h1>Haml Coffee Brunch</h1>';

  //   plugin.compileStatic({data: content, path: 'file.jst.hamlc'}).then(tmpl => {
  //     const result = tmpl({title: "Haml Coffee Brunch"});
  //     assert(result.indexOf(expected) !== -1);
  //     done();
  //   }, error => assert(!error));
  // });

  // it('should compile a valid result with an empty file', function(done) {
  //   const content = '';
  //   const expected = '';

  //   plugin.compileStatic({data: content, path: 'file.jst.hamlc'}).then(tmpl => {
  //     const result = tmpl();
  //     assert(result.indexOf(expected) !== -1);
  //     done();
  //   }, error => assert(!error));
  // });
});
