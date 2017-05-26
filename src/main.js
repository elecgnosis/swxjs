import Deck from './deck';

const deck = new Deck();
console.log('\nlet\'s deal');
deck.makeCards();
console.log('\nshow cards:');
deck.showCards();
deck.shuffleCards();
console.log('\nshow cards shuffled');
deck.showCards();
deck.sortCards();
console.log('\nshow cards sorted');
deck.showCards();
console.log('show\'s over, go home');
