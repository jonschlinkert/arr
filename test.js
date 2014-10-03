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

  describe('.filterType()', function () {
    it('should return a filtered array with only elements of the given type.', function () {
      utils.filterType(fixture1, 'number').should.eql([1, 2]);
      utils.filterType(fixture2, 'number').should.eql([1, 2, 3, 4, 5]);
      utils.filterType(fixture2, 'object').should.eql([{a: 'b'}, {c: 'd'}]);
      utils.filterType(fixture2, 'string').should.eql(['a', 'b', 'c']);
    });
  });

  describe('.firstIndexOf()', function () {
    it('should return the first index of `type`', function () {
      utils.firstIndexOf(fixture1, 'string').should.equal(0);
      utils.firstIndexOf(fixture1, 'number').should.equal(3);
      utils.firstIndexOf(fixture1, 'object').should.equal(2);
      utils.firstIndexOf(fixture1, 'function').should.equal(1);
    });
  });

  describe('.lastOfType()', function () {
    it('should return the last of `type`', function () {
      utils.lastOfType(fixture1, 'number').should.equal(2);
    });
  });

  describe('.firstOfType()', function () {
    it('should return the first of `type`', function () {
      utils.firstOfType(fixture1, 'number').should.equal(1);
    });
  });

  describe('.lastIsType()', function () {
    it('should return `true` if the last value is the given type', function () {
      utils.lastIsType(fixture1, 'number').should.equal(false);
      utils.lastIsType(fixture2, 'object').should.equal(true);
    });
  });

  describe('.firstIsType()', function () {
    it('should return `true` if the first value is the given type', function () {
      utils.firstIsType(fixture1, 'string').should.equal(true);
    });
  });

  describe('.firstString()', function () {
    it('should return the first string', function () {
      utils.firstString(fixture1, 'string').should.equal('a');
    });
  });

  describe('.lastString()', function () {
    it('should return the last string', function () {
      utils.lastString(fixture1, 'string').should.equal('c');
    });
  });

  describe('.firstFunction()', function () {
    it('should return the first function', function () {
      utils.firstFunction(fixture1, 'function').should.equal(one);
    });
  });

  describe('.lastFunction()', function () {
    it('should return the last function', function () {
      utils.lastFunction(fixture1, 'function').should.equal(two);
    });
  });

  describe('.firstNumber()', function () {
    it('should return the first object', function () {
      utils.firstNumber(fixture2).should.eql(1);
    });
  });

  describe('.lastNumber()', function () {
    it('should return the last object', function () {
      utils.lastNumber(fixture2).should.eql(5);
    });
  });

  describe('.firstObject()', function () {
    it('should return the first object', function () {
      utils.firstObject(fixture1).should.eql({a: 'b'});
    });
  });

  describe('.lastObject()', function () {
    it('should return the last object', function () {
      utils.lastObject(fixture1).should.eql({c: 'd'});
    });
  });
});
