"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
var sum = function sum() {
    for (var _len = arguments.length, arg = Array(_len), _key = 0; _key < _len; _key++) {
        arg[_key] = arguments[_key];
    }

    return arg.reduce(function (prev, cur) {
        return prev + cur;
    });
};
var a = function a() {
    return 666;
};
// sum(1,2,3,4,5);


exports.sum = sum;
exports.a = a;

//抛出

exports.default = function (n, str) {
    //repeat (3,*)
    return str.repeat(n);
};

//默认抛出一个js文件只能有一个