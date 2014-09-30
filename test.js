/*!
 * arr <https://github.com/jonschlinkert/arr>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var utils = require('./');


describe('array utils', function () {
  var one = function a() {};
  var two = function b() {};

  var fixture1 = ['a', one, {a: 'b'}, 1, 'b', 2, two, {c: 'd'}, 'c'];
  var fixture2 = [one, 1, {a: 'b'}, 'a','b', 2, 3, 4, two, 'c', 5, {c: 'd'}];

  it('should return a filtered array with only elements of the given type.', function () {
    utils.filterType(fixture1, 'number').should.eql([1, 2]);
    utils.filterType(fixture2, 'number').should.eql([1, 2, 3, 4, 5]);
    utils.filterType(fixture2, 'object').should.eql([{a: 'b'}, {c: 'd'}]);
    utils.filterType(fixture2, 'string').should.eql(['a', 'b', 'c']);
  });
  it('should return the last of `type`', function () {
    utils.lastOfType(fixture1, 'number').should.equal(2);
  });
  it('should return the first of `type`', function () {
    utils.firstOfType(fixture1, 'number').should.equal(1);
  });
  it('should return `true` if the last value is the given type', function () {
    utils.lastIsType(fixture1, 'number').should.equal(false);
    utils.lastIsType(fixture2, 'object').should.equal(true);
  });
  it('should return `true` if the first value is the given type', function () {
    utils.firstIsType(fixture1, 'string').should.equal(true);
  });
  it('should return the first string', function () {
    utils.firstString(fixture1, 'string').should.equal('a');
  });
  it('should return the last string', function () {
    utils.lastString(fixture1, 'string').should.equal('c');
  });
  it('should return the first function', function () {
    utils.firstFunction(fixture1, 'function').should.equal(one);
  });
  it('should return the last function', function () {
    utils.lastFunction(fixture1, 'function').should.equal(two);
  });
  it('should return the first object', function () {
    utils.firstNumber(fixture2).should.eql(1);
  });
  it('should return the last object', function () {
    utils.lastNumber(fixture2).should.eql(5);
  });
  it('should return the first object', function () {
    utils.firstObject(fixture1).should.eql({a: 'b'});
  });
  it('should return the last object', function () {
    utils.lastObject(fixture1).should.eql({c: 'd'});
  });
});
