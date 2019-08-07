'use strict';

var _a = require('./js/a');

var info = _interopRequireWildcard(_a);

var _b = require('./js/b');

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

//默认抛出的，在接受的时候，放在第一个接受
//as 重命名
//引入
console.log(info);
console.log(info.sum(1, 2, 3, 4, 5));

console.log((0, info.default)(5, "*"));