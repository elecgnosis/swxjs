'use strict';

var _deck = require('./deck');

var _deck2 = _interopRequireDefault(_deck);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deck = new _deck2.default();
console.log('\nlet\'s deal');
deck.makeCards();
console.log('\nshow cards:');
deck.showCards();
deck.shuffleCards();
console.log('\nshow shuffled cards');
deck.showCards();
deck.sortCards();
console.log('\nshow sorted cards');
deck.showCards();
console.log('show\'s over, go home');