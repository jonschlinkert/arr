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
 * lastOf(arr, 'number');
 * //=> 2
 * ```
 * @param  {Array} `array`
 * @param  {String} `type` The native type to get.
 * @return {*}
 * @api public
 */

function lastOf(arr, type) {
  return last(filterType(arr, type));
}

/**
 * Get the first element in `array` of the given `type`.
 *
 * ```js
 * var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];
 * firstOf(arr, 'number');
 * //=> 1
 * ```
 * @param  {Array} `array`
 * @param  {String} `type` The native type to get.
 * @return {*}
 * @api public
 */

function firstOf(arr, type) {
  return filterType(arr, type)[0];
}

/**
 * Returns `true` if the last element in `array` is the given `type`.
 *
 * ```js
 * var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];
 * lastIs(arr, 'number');
 * //=> false
 * ```
 * @param  {Array} `array`
 * @param  {String} `type` The native type to check.
 * @return {Boolean}
 * @api public
 */

function lastIs(arr, type) {
  return typeOf(last(arr)) === type;
}

/**
 * Returns `true` if the first element in `array` is the given `type`.
 *
 * ```js
 * var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];
 * firstIs(arr, 'string');
 * //=> true
 * ```
 * @param  {Array} `array`
 * @param  {String} `type` The native type to check.
 * @return {Boolean}
 * @api public
 */

function firstIs(arr, type) {
  return typeOf(arr[0]) === type;
}

/**
 * Get the first string in `array`.
 *
 * ```js
 * var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];
 * firstStr(arr, 'string');
 * //=> 'a'
 * ```
 * @param  {Array} `array`
 * @return {String}
 * @api public
 */

function firstStr(arr) {
  return firstOf(arr, 'string');
}

/**
 * Get the last string in `array`.
 *
 * ```js
 * var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];
 * lastStr(arr, 'string');
 * //=> 'c'
 * ```
 * @param  {Array} `array`
 * @return {String}
 * @api public
 */

function lastStr(arr) {
  return lastOf(arr, 'string');
}

/**
 * Get the first function in `array`.
 *
 * ```js
 * var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];
 * firstFn(arr, 'function');
 * //=> 'a'
 * ```
 * @param  {Array} `array`
 * @return {Function}
 * @api public
 */

function firstFn(arr) {
  return firstOf(arr, 'function');
}

/**
 * Get the last function in `array`.
 *
 * ```js
 * var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];
 * lastFn(arr, 'function');
 * //=> 'a'
 * ```
 * @param  {Array} `array`
 * @return {Function}
 * @api public
 */

function lastFn(arr) {
  return lastOf(arr, 'function');
}

/**
 * Get the first object in `array`.
 *
 * ```js
 * var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];
 * firstObj(arr);
 * //=> {a: 'b'}
 * ```
 * @param  {Array} `array`
 * @return {Object}
 * @api public
 */

function firstObj(arr) {
  return firstOf(arr, 'object');
}

/**
 * Get the last object in `array`.
 *
 * ```js
 * var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];
 * lastObj(arr);
 * //=> {c: 'd'}
 * ```
 * @param  {Array} `array`
 * @return {Object}
 * @api public
 */

function lastObj(arr) {
  return lastOf(arr, 'object');
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


exports.filterType = filterType;
exports.numbers = numbers;
exports.strings = strings;
exports.objects = objects;
exports.functions = functions;
exports.arrays = arrays;
exports.last = last;
exports.lastOf = lastOf;
exports.firstOf = firstOf;
exports.lastIs = lastIs;
exports.firstIs = firstIs;
exports.firstStr = firstStr;
exports.lastStr = lastStr;
exports.firstFn = firstFn;
exports.lastFn = lastFn;
exports.firstObj = firstObj;
exports.lastObj = lastObj;
exports.isType = isType;
exports.isString = isString;
exports.isObject = isObject;

