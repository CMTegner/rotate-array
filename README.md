# rotate-array

Rotates the elements of an array in place. Supports rotation in both directions and automatically wraps rotations which are larger than the input array size.

[![Build status](https://secure.travis-ci.org/CMTegner/rotate-array.png)](http://travis-ci.org/CMTegner/rotate-array) [![Dependency status](https://david-dm.org/CMTegner/rotate-array.png)](https://david-dm.org/CMTegner/rotate-array) [![NPM version](https://badge.fury.io/js/rotate-array.png)](https://npmjs.org/package/rotate-array)

[![Browser support](https://ci.testling.com/CMTegner/rotate-array.png)](https://ci.testling.com/CMTegner/rotate-array)

## Installation

```bash
npm i rotate-array
```

## Usage

```javascript
var rotate = require('rotate-array');
```

## rotate(array, num)

Rotates the array `num` places to the left, i.e. it shifts `num` items out of the array and pushes them back on the end. The reverse is done when `num` is negative. In addition, `rotate` automatically wraps rotations which are larger than `array.length`.

Example:

```javascript
var beatles = ['paul', 'john', 'ringo', 'george'];
rotate(beatles, 2);
console.log(beatles); // [ 'ringo', 'george', 'paul', 'john' ]
```
