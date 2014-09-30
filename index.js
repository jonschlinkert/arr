/*!
 * arr <https://github.com/jonschlinkert/arr>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

/**
 * Module dependencies
 */

var typeOf = require('kind-of');

/**
 * Filter `array`, returning only the values of the given `type`.
 *
 * ```js
 * var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];
 *
 * utils.filterType(arr, 'object');
 * //=> [{a: 'b'}, {c: 'd'}]
 * ```
 *
 * @param  {Array} `array`
 * @param  {String} `type` Native type, e.g. `string`, `object`
 * @return {Boolean}
 * @api public
 */

function filterType(arr, type) {
  var len = arr.length;
  var res = [];

  for (var i = 0; i < len; i++) {
    var ele = arr[i];
    if (typeOf(ele) === type) {
      res.push(ele);
    }
  }
  return res;
}

/**
 * Filter `array`, returning only the numbers.
 *
 * ```js
 * var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];
 *
 * utils.numbers(arr);
 * //=> [1, 2]
 * ```
 *
 * @param  {Array} `array`
 * @param  {Array} `index` Optionally specify the index of the number to return, otherwise all numbers are returned.
 * @return {Array}
 * @api public
 */

function numbers(arr, i) {
  var type = filterType(arr, 'number');
  return i ? type[i] : type;
}

/**
 * Filter `array`, returning only the strings.
 *
 * ```js
 * var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];
 *
 * utils.strings(arr);
 * //=> ['a', 'b', 'c']
 * ```
 *
 * @param  {Array} `array`
 * @param  {Array} `index` Optionally specify the index of the string to return, otherwise all strings are returned.
 * @return {Array}
 * @api public
 */

function strings(arr, i) {
  var type = filterType(arr, 'string');
  return i ? type[i] : type;
}

/**
 * Filter `array`, returning only the objects.
 *
 * ```js
 * var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];
 *
 * utils.objects(arr);
 * //=> [{a: 'b'}, {c: 'd'}]
 * ```
 *
 * @param  {Array} `array`
 * @param  {Array} `index` Optionally specify the index of the object to return, otherwise all objects are returned.
 * @return {Array}
 * @api public
 */

function objects(arr, i) {
  var type = filterType(arr, 'object');
  return i ? type[i] : type;
}

/**
 * Filter `array`, returning only the functions.
 *
 * ```js
 * var one = function() {};
 * var two = function() {};
 * var arr = ['a', {a: 'b'}, 1, one, 'b', 2, {c: 'd'}, two, 'c'];
 *
 * utils.functions(arr);
 * //=> [one, two]
 * ```
 *
 * @param  {Array} `array`
 * @param  {Array} `index` Optionally specify the index of the function to return, otherwise all functions are returned.
 * @return {Array}
 * @api public
 */

function functions(arr, i) {
  var type = filterType(arr, 'function');
  return i ? type[i] : type;
}

/**
 * Filter `array`, returning only the arrays.
 *
 * ```js
 * var arr = ['a', ['aaa'], 1, 'b', ['bbb'], 2, {c: 'd'}, 'c'];
 *
 * utils.objects(arr);
 * //=> [['aaa'], ['bbb']]
 * ```
 *
 * @param  {Array} `array`
 * @param  {Array} `index` Optionally specify the index of the array to return, otherwise all arrays are returned.
 * @return {Array}
 * @api public
 */

function arrays(arr, i) {
  var type = filterType(arr, 'array');
  return i ? type[i] : type;
}

/**
 * Get the first element in `array`. Included for completeness.
 *
 * ```js
 * var arr = ['a', {a: 'b'}, 1, one, 'b', 2, {c: 'd'}, two, 'c'];
 *
 * utils.functions(arr);
 * //=> 'a'
 * ```
 *
 * @param  {Array} `array`
 * @return {*}
 * @api public
 */

function first(arr) {
  return arr[0];
}

/**
 * Get the last element in `array`.
 *
 * ```js
 * var arr = ['a', {a: 'b'}, 1, one, 'b', 2, {c: 'd'}, two, 'c'];
 *
 * utils.functions(arr);
 * //=> 'c'
 * `
 * @param  {Array} `array`
 * @return {*}
 * @api public
 */

function last(arr) {
  return arr[arr.length - 1];
}

/**
 * Get the last element in `array` of the given `type`.
 *
 * ```js
 * var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];
 * lastOfType(arr, 'number');
 * //=> 2
 * ```
 * @param  {Array} `array`
 * @param  {String} `type` The native type to get.
 * @return {*}
 * @api public
 */

function lastOfType(arr, type) {
  return last(filterType(arr, type));
}

/**
 * Get the first element in `array` of the given `type`.
 *
 * ```js
 * var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];
 * firstOfType(arr, 'number');
 * //=> 1
 * ```
 * @param  {Array} `array`
 * @param  {String} `type` The native type to get.
 * @return {*}
 * @api public
 */

function firstOfType(arr, type) {
  return filterType(arr, type)[0];
}

/**
 * Returns `true` if the last element in `array` is the given `type`.
 *
 * ```js
 * var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];
 * lastIsType(arr, 'number');
 * //=> false
 * ```
 * @param  {Array} `array`
 * @param  {String} `type` The native type to check.
 * @return {Boolean}
 * @api public
 */

function lastIsType(arr, type) {
  return typeOf(last(arr)) === type;
}

/**
 * Returns `true` if the first element in `array` is the given `type`.
 *
 * ```js
 * var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];
 * firstIsType(arr, 'string');
 * //=> true
 * ```
 * @param  {Array} `array`
 * @param  {String} `type` The native type to check.
 * @return {Boolean}
 * @api public
 */

function firstIsType(arr, type) {
  return typeOf(arr[0]) === type;
}

/**
 * Get the first string in `array`.
 *
 * ```js
 * var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];
 * firstString(arr, 'string');
 * //=> 'a'
 * ```
 * @param  {Array} `array`
 * @return {String}
 * @api public
 */

function firstString(arr) {
  return firstOfType(arr, 'string');
}

/**
 * Get the last string in `array`.
 *
 * ```js
 * var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];
 * lastString(arr, 'string');
 * //=> 'c'
 * ```
 * @param  {Array} `array`
 * @return {String}
 * @api public
 */

function lastString(arr) {
  return lastOfType(arr, 'string');
}

/**
 * Get the first function in `array`.
 *
 * ```js
 * var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];
 * firstFunction(arr, 'function');
 * //=> 'a'
 * ```
 * @param  {Array} `array`
 * @return {Function}
 * @api public
 */

function firstFunction(arr) {
  return firstOfType(arr, 'function');
}

/**
 * Get the last function in `array`.
 *
 * ```js
 * var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];
 * lastFunction(arr, 'function');
 * //=> 'a'
 * ```
 * @param  {Array} `array`
 * @return {Function}
 * @api public
 */

function lastFunction(arr) {
  return lastOfType(arr, 'function');
}

/**
 * Get the first number in `array`.
 *
 * ```js
 * var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];
 * firstNumber(arr, 'number');
 * //=> '1'
 * ```
 * @param  {Array} `array`
 * @return {Function}
 * @api public
 */

function firstNumber(arr) {
  return firstOfType(arr, 'number');
}

/**
 * Get the last number in `array`.
 *
 * ```js
 * var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];
 * lastNumber(arr, 'number');
 * //=> '2'
 * ```
 * @param  {Array} `array`
 * @return {Function}
 * @api public
 */

function lastNumber(arr) {
  return lastOfType(arr, 'number');
}

/**
 * Get the first object in `array`.
 *
 * ```js
 * var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];
 * firstObject(arr);
 * //=> {a: 'b'}
 * ```
 * @param  {Array} `array`
 * @return {Object}
 * @api public
 */

function firstObject(arr) {
  return firstOfType(arr, 'object');
}

/**
 * Get the last object in `array`.
 *
 * ```js
 * var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];
 * lastObject(arr);
 * //=> {c: 'd'}
 * ```
 * @param  {Array} `array`
 * @return {Object}
 * @api public
 */

function lastObject(arr) {
  return lastOfType(arr, 'object');
}

/**
 * Returns a function that returns `true` if a
 * value is the given type.
 *
 * @param  {String}  type
 * @return {Boolean}
 * @api private
 */

function isType(type) {
  return function (val) {
    return typeof val === type;
  };
}

/**
 * Utils for getting the `typeof` a value.
 *
 * @param  {*} `val`
 * @return {*}
 * @api private
 */

function isString(val) {
  return typeOf(val) === 'string';
}

function isObject(val) {
  return typeOf(val) === 'string';
}


exports.arrays = arrays;
exports.filterType = filterType;
exports.first = first;
exports.firstFunction = firstFunction;
exports.firstIsType = firstIsType;
exports.firstNumber = firstNumber;
exports.firstObject = firstObject;
exports.firstOfType = firstOfType;
exports.firstString = firstString;
exports.functions = functions;
exports.isObject = isObject;
exports.isString = isString;
exports.isType = isType;
exports.last = last;
exports.lastFunction = lastFunction;
exports.lastIsType = lastIsType;
exports.lastNumber = lastNumber;
exports.lastObject = lastObject;
exports.lastOfType = lastOfType;
exports.lastString = lastString;
exports.numbers = numbers;
exports.objects = objects;
exports.strings = strings;