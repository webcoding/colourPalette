'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _tinycolor = require('tinycolor2');

var _tinycolor2 = _interopRequireDefault(_tinycolor);

var _bezierEasing = require('./bezierEasing');

var _bezierEasing2 = _interopRequireDefault(_bezierEasing);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var colorEasing = (0, _bezierEasing2.default)(0.26, 0.09, 0.37, 0.18);

var warmDark = 0.5;
var warmRotate = -26;
var coldDark = 0.55;
var coldRotate = 10;
var getShadeColor = function getShadeColor(c) {
  var shadeColor = (0, _tinycolor2.default)(c);

  if (shadeColor.toRgb().r > shadeColor.toRgb().b) {
    return shadeColor.darken(shadeColor.toHsl().l * warmDark * 100).spin(warmRotate).toHexString();
  }

  return shadeColor.darken(shadeColor.toHsl().l * coldDark * 100).spin(coldRotate).toHexString();
};
var primaryEasing = colorEasing(0.6);
var colorPalette = function colorPalette(color, index) {
  var currentEasing = colorEasing(index * 0.1);

  if (index <= 6) {
    return _tinycolor2.default.mix('#ffffff', color, currentEasing * 100 / primaryEasing).toHexString();
  }
  return _tinycolor2.default.mix(getShadeColor(color), color, (1 - (currentEasing - primaryEasing) / (1 - primaryEasing)) * 100).toHexString();
};

exports.default = colorPalette;