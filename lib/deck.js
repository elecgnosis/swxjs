'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _suites = require('./strings/suites');

var _suites2 = _interopRequireDefault(_suites);

var _cardnames = require('./strings/cardnames');

var _cardnames2 = _interopRequireDefault(_cardnames);

var _card = require('./card');

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Deck = function () {
  function Deck() {
    _classCallCheck(this, Deck);

    this.suites = _suites2.default;
    this.cardNames = _cardnames2.default;
    this.cards = [];
  }

  _createClass(Deck, [{
    key: 'makeCards',
    value: function makeCards() {
      var _this = this;

      this.cards = [];
      this.suites.forEach(function (suite) {
        _this.cardNames.forEach(function (cardName, value) {
          _this.cards.push(new _card2.default(suite, cardName, value + 1));
        });
      });
    }
  }, {
    key: 'showCards',
    value: function showCards() {
      this.cards.forEach(function (card) {
        return console.log(card.getNameAndSuite());
      });
    }
  }, {
    key: 'sortCards',
    value: function sortCards() {
      this.cards.sort(function (a, b) {
        var suiteCompareResult = a.suite.localeCompare(b.suite);
        if (suiteCompareResult === 0) {
          if (a.value > b.value) return 1;
          if (a.value === b.value) return 0;
          if (a.value < b.value) return -1;
        }
        return suiteCompareResult;
      });
    }
  }, {
    key: 'shuffleCards',
    value: function shuffleCards() {
      this.cards = _underscore2.default.shuffle(this.cards);
    }
  }]);

  return Deck;
}();

exports.default = Deck;