'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _underscore = require('underscore');

var _underscore2 = _interopRequireDefault(_underscore);

var _suits = require('./strings/suits');

var _suits2 = _interopRequireDefault(_suits);

var _cardnames = require('./strings/cardnames');

var _cardnames2 = _interopRequireDefault(_cardnames);

var _card = require('./card');

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Deck is a class to manage Card classes. It holds the names of suits and
 * cards, which it uses together with an inferred value to produce Card objects
 * representing a standard deck of playing cards.
 * It offers a method for generating the collection of cards, a utility method
 * for displaying all of those cards' fancy names with suits, and two other
 * methods for sorting and shuffling the card collection.
 * @type {Deck}
 */
var Deck = function () {
  /**
   * Takes no parameter. Sets internal reference to external String Arrays
   * containing the names of the suits and cards in a standard deck of
   * playing cards.
   * @return {Deck} Deck object for managing collection of Card objects.
   */
  function Deck() {
    _classCallCheck(this, Deck);

    this.suits = _suits2.default;
    this.cardNames = _cardnames2.default;
    this.cards = [];
    this.makeCards;
  }
  /**
   * Generates fifty-two Card objects using the suite and cardName Arrays. On
   * subsequent calls, it empties out the existing array of cards before
   * generating a new one.
   * @return {null} No return value.
   */


  _createClass(Deck, [{
    key: 'makeCards',
    value: function makeCards() {
      var _this = this;

      this.cards = [];
      this.suits.forEach(function (suite) {
        _this.cardNames.forEach(function (cardName, value) {
          _this.cards.push(new _card2.default(suite, cardName, value + 1));
        });
      });
    }
    /**
     * Uses console.log to print the card names with suits of the cards in the
     * cards array in their current order.
     * @return {null} No return value.
     */

  }, {
    key: 'showCards',
    value: function showCards() {
      this.cards.forEach(function (card) {
        return console.log(card.getNameAndSuite());
      });
    }
    /**
     * Sorts the elements in the cards array using the suite name as a primary
     * sort and the card value as a secondary sort. The end result is the four
     * suits sorted one after the other alphabetically, cards within numerically.
     * @return {null} No return value.
     */

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
    /**
     * Shuffles the elements in the cards array using underscore.js's .shuffle.
     * @return {null} No return value.
     */

  }, {
    key: 'shuffleCards',
    value: function shuffleCards() {
      this.cards = _underscore2.default.shuffle(this.cards);
    }
  }]);

  return Deck;
}();

exports.default = Deck;