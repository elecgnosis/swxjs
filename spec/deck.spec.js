import { assert, beforeAll } from 'chai';
import { spy, stub } from 'sinon';
import _ from 'underscore';
import suites from '../src/strings/suites';
import cardNames from '../src/strings/cardnames';
import Card from '../src/card';
import Deck from '../src/deck';

describe('Deck', () => {
  let deck;
  beforeEach(() => {
    deck = new Deck();
  });
  describe('#Deck()', () => {
    it('returns an instance of the Deck class', () => {
      assert.instanceOf(deck, Deck);
    });
    it('assigns the suites array to its suites field', () => {
      assert.strictEqual(deck.suites, suites);
    });
    it('assigns the cardNames array to its cardNames field', () => {
      assert.strictEqual(deck.cardNames, cardNames);
    });
    it('assigns an array to its cards field', () => {
      assert.isArray(deck.cards);
    });
    it('assigns an empty array to its cards field', () => {
      assert.lengthOf(deck.cards, 0);
    });
  });
  describe('#makeCards()', () => {
    it('empties the cards array before proceeding', () => {
      deck.makeCards();
      const firstRunCardsLength = deck.cards.length;
      deck.makeCards();
      const secondRunCardsLength = deck.cards.length;
      assert.strictEqual(secondRunCardsLength, firstRunCardsLength);
    });
    it('calls the Card class constructor with different arguments fifty-two times.', () => {
      // Stub Card constructor to capture different argument calls
      // Or call .getNameAndSuite on every card and assert no duplicates
      // Or just use Underscore.js
      deck.makeCards();
      const cardNamesWithSuite = deck.cards.map((card) => card.getNameAndSuite());
      const noDuplicatesArray = _.uniq(cardNamesWithSuite);
      assert.lengthOf(noDuplicatesArray, cardNamesWithSuite.length);
    });
    it('stores fifty-two instances of the Card class in the cards array.', () => {
      deck.makeCards();
      let cardCount = 0;
      deck.cards.forEach(card => {
        if (card instanceof Card) cardCount += 1;
      });
      assert.strictEqual(cardCount, 52);
    });
  });
  describe('#showCards()', () => {
    it('calls console.log with the result of calling card.getNameAndSuite for each element in the cards array.', () => {
      // make cards
      // spy on .getNameAndSuite for each
      // call showCards
      // tally spy method calls
      let tally = 0;
      deck.makeCards();
      deck.cards.forEach(card => {
        spy(card, 'getNameAndSuite');
      });
      deck.showCards();
      deck.cards.forEach(card => {
        tally += card.getNameAndSuite.callCount;
      });
      assert.strictEqual(tally, 52);
    });
  });
  describe('#sortCards()', () => {
    it('sorts the elements in the cards array alphabetically by suite and within each suite numerically by value.', () => {
      // make cards
      // shuffle cards
      // sort cards
      // 
      deck.makeCards();
      deck.shuffleCards();
      deck.sortCards();


    });
  });
  describe('#shuffleCards()', () => {
    it('randomizes the position of elements in the cards array.', () => {
      // make cards
      // ...underscore again
      deck.makeCards();
      const initialCardOrder = deck.cards.slice();
      deck.shuffleCards();
      assert.notDeepEqual(deck.cards, initialCardOrder);
    });
  });
});
