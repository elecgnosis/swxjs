import Deck from './deck';

const deck = new Deck();
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
