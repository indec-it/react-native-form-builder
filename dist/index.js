'use strict';

exports.__esModule = true;
exports.types = exports.MapQuestions = undefined;

var _MapQuestions2 = require('./questions/MapQuestions');
var _MapQuestions3 = _interopRequireDefault(_MapQuestions2);
var _types2 = require('./constants/constants');
var _types3 = _interopRequireWildcard(_types2);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports.MapQuestions = _MapQuestions3['default'];
exports.types = _types3;
