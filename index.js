'use strict';

module.exports = function(array, num) {
    num = (num || 0) % array.length;
    if (num < 0) {
        num += array.length;
    }
    var removed = array.splice(0, num);
    array.push.apply(array, removed);
    return array;
};
