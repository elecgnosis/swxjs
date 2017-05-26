'use strict';

var _suites = require('./suites');

var _suites2 = _interopRequireDefault(_suites);

var _cardnames = require('./cardnames');

var _cardnames2 = _interopRequireDefault(_cardnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_suites2.default.forEach(function (suite) {
  return console.log(suite);
});
_cardnames2.default.forEach(function (cardname) {
  return console.log(cardname);
});