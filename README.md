# arr [![NPM version](https://badge.fury.io/js/arr.png)](http://badge.fury.io/js/arr)

> Simple JavaScript utilities for working with arrays.

## Install
Install with [npm](npmjs.org):

```bash
npm i arr --save-dev
```

## Usage

```js
var utils = require('arr');
```

## API
### [filterType](index.js#L32)

Filter `array`, returning only the values of the given `type`.

* `array` **{Array}**    
* `type` **{String}**: Native type, e.g. `string`, `object`    
* `returns`: {Boolean}  

```js
var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];

utils.filterType(arr, 'object');
//=> [{a: 'b'}, {c: 'd'}]
```

### [numbers](index.js#L54)

* `array` **{Array}**    
* `index` **{Array}**: Optionally specify the index of the number to return, otherwise all numbers are returned.    
* `returns`: {Array}  

Filter `array`, returning only the numbers.

### [strings](index.js#L68)

* `array` **{Array}**    
* `index` **{Array}**: Optionally specify the index of the string to return, otherwise all strings are returned.    
* `returns`: {Array}  

Filter `array`, returning only the strings.

### [objects](index.js#L82)

* `array` **{Array}**    
* `index` **{Array}**: Optionally specify the index of the object to return, otherwise all objects are returned.    
* `returns`: {Array}  

Filter `array`, returning only the objects.

### [functions](index.js#L96)

* `array` **{Array}**    
* `index` **{Array}**: Optionally specify the index of the function to return, otherwise all functions are returned.    
* `returns`: {Array}  

Filter `array`, returning only the functions.

### [arrays](index.js#L110)

* `array` **{Array}**    
* `index` **{Array}**: Optionally specify the index of the array to return, otherwise all arrays are returned.    
* `returns`: {Array}  

Filter `array`, returning only the arrays.

### [first](index.js#L123)

* `array` **{Array}**    
* `returns`: {*}  

Get the first element in `array`. Included for completeness.

### [last](index.js#L135)

* `array` **{Array}**    
* `returns`: {*}  

Get the last element in `array`.

### [lastOfType](index.js#L153)

Get the last element in `array` of the given `type`.

* `array` **{Array}**    
* `type` **{String}**: The native type to get.    
* `returns`: {*}  

```js
var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];
lastOfType(arr, 'number');
//=> 2
```

### [firstOfType](index.js#L171)

Get the first element in `array` of the given `type`.

* `array` **{Array}**    
* `type` **{String}**: The native type to get.    
* `returns`: {*}  

```js
var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];
firstOfType(arr, 'number');
//=> 1
```

### [lastIsType](index.js#L189)

Returns `true` if the last element in `array` is the given `type`.

* `array` **{Array}**    
* `type` **{String}**: The native type to check.    
* `returns`: {Boolean}  

```js
var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];
lastIsType(arr, 'number');
//=> false
```

### [firstIsType](index.js#L207)

Returns `true` if the first element in `array` is the given `type`.

* `array` **{Array}**    
* `type` **{String}**: The native type to check.    
* `returns`: {Boolean}  

```js
var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];
firstIsType(arr, 'string');
//=> true
```

### [firstString](index.js#L224)

Get the first string in `array`.

* `array` **{Array}**    
* `returns`: {String}  

```js
var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];
firstString(arr, 'string');
//=> 'a'
```

### [lastString](index.js#L241)

Get the last string in `array`.

* `array` **{Array}**    
* `returns`: {String}  

```js
var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];
lastString(arr, 'string');
//=> 'c'
```

### [firstFunction](index.js#L258)

Get the first function in `array`.

* `array` **{Array}**    
* `returns`: {Function}  

```js
var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];
firstFunction(arr, 'function');
//=> 'a'
```

### [lastFunction](index.js#L275)

Get the last function in `array`.

* `array` **{Array}**    
* `returns`: {Function}  

```js
var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];
lastFunction(arr, 'function');
//=> 'a'
```

### [firstNumber](index.js#L292)

Get the first number in `array`.

* `array` **{Array}**    
* `returns`: {Function}  

```js
var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];
firstNumber(arr, 'number');
//=> '1'
```

### [lastNumber](index.js#L309)

Get the last number in `array`.

* `array` **{Array}**    
* `returns`: {Function}  

```js
var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];
lastNumber(arr, 'number');
//=> '2'
```

### [firstObject](index.js#L326)

Get the first object in `array`.

* `array` **{Array}**    
* `returns`: {Object}  

```js
var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];
firstObject(arr);
//=> {a: 'b'}
```

### [lastObject](index.js#L343)

Get the last object in `array`.

* `array` **{Array}**    
* `returns`: {Object}  

```js
var arr = ['a', {a: 'b'}, 1, 'b', 2, {c: 'd'}, 'c'];
lastObject(arr);
//=> {c: 'd'}
```

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2014 Jon Schlinkert, contributors.  
Released under the MIT license

***

_This file was generated by [verb-cli](https://github.com/assemble/verb-cli) on September 30, 2014._