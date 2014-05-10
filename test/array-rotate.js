'use strict';

var test = require('tape');
var rotate = require('../');

test('rotate with no num arg is a noop', function(t) {
    t.plan(1);

    var array = ['foo', 'bar'];
    var result = rotate(array);
    t.same(result, ['foo', 'bar']);
});

test('returns the input array', function(t) {
    t.plan(1);

    var array = [];
    t.equal(rotate(array), array);
});

test('rotates according to positive num', function(t) {
    t.plan(3);

    var array = ['one', 'two', 'three', 'four'];

    rotate(array, 2);
    t.same(array, ['three', 'four', 'one', 'two']);

    rotate(array, 3);
    t.same(array, ['two', 'three', 'four', 'one']);

    rotate(array, 0);
    t.same(array, ['two', 'three', 'four', 'one']);
});

test('wraps when num is greater than array size', function(t) {
    t.plan(3);

    var array = ['foo', 'bar', 'boom', 'bang', 'baz'];

    rotate(array, 5);
    t.same(array, ['foo', 'bar', 'boom', 'bang', 'baz']);

    rotate(array, 6);
    t.same(array, ['bar', 'boom', 'bang', 'baz', 'foo']);

    rotate(array, 12);
    t.same(array, ['bang', 'baz', 'foo', 'bar', 'boom']);
});

test('rotates according to positive num', function(t) {
    t.plan(3);

    var array = ['one', 'two', 'three', 'four'];

    rotate(array, -2);
    t.same(array, ['three', 'four', 'one', 'two']);

    rotate(array, -3);
    t.same(array, ['four', 'one', 'two', 'three']);

    rotate(array, -0);
    t.same(array, ['four', 'one', 'two', 'three']);
});

test('wraps when abs(negative num) greater than array size', function(t) {
    t.plan(3);

    var array = ['foo', 'bar', 'boom', 'bang', 'baz'];

    rotate(array, -5);
    t.same(array, ['foo', 'bar', 'boom', 'bang', 'baz']);

    rotate(array, -6);
    t.same(array, ['baz', 'foo', 'bar', 'boom', 'bang']);

    rotate(array, -12);
    t.same(array, ['boom', 'bang', 'baz', 'foo', 'bar']);
});
