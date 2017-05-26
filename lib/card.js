'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Card holds three pieces of information: a suite name, a card name, and a
 * numeric value for comparisons. It also has a method for getting a fancy name
 * made of the card name and suite name together.
 * @type {Card}
 */
var Card = function () {
  function Card(suite, name, value) {
    _classCallCheck(this, Card);

    if (!suite) throw new TypeError('Suite name is required.');
    if (!name) throw new TypeError('Suite name is required.');
    if (!value && value !== 0) throw new TypeError('Value is required.');
    if (typeof suite !== 'string') throw new TypeError('First parameter must be a string.');
    if (typeof name !== 'string') throw new TypeError('Second parameter must be a string.');
    if (typeof value !== 'number') throw new TypeError('Third parameter be a number.');

    this.suite = suite;
    this.name = name;
    this.value = value;
  }

  _createClass(Card, [{
    key: 'getNameAndSuite',
    value: function getNameAndSuite() {
      return this.name + ' of ' + this.suite;
    }
  }]);

  return Card;
}();

exports.default = Card;