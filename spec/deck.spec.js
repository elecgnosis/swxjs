import { assert, beforeAll } from 'chai';
import { spy, stub } from 'sinon';
import _ from 'underscore';
import suits from '../src/strings/suits';
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
    it('assigns the suits array to its suits field', () => {
      assert.strictEqual(deck.suits, suits);
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
      deck.makeCards();
      const cardNamesWithsuit = deck.cards.map((card) => card.getNameAndsuit());
      const noDuplicatesArray = _.uniq(cardNamesWithsuit);
      assert.lengthOf(noDuplicatesArray, cardNamesWithsuit.length);
    });
    it('stores fifty-two instances of the Card class in the cards array.', () => {
      deck.makeCards();
      let cardCount = 0;
      deck.cards.forEach(card => card instanceof Card ? cardCount += 1 : null);
      assert.strictEqual(cardCount, 52);
    });
  });
  describe('#showCards()', () => {
    it('calls console.log with the result of calling card.getNameAndsuit for each element in the cards array.', () => {
      let tally = 0;
      deck.makeCards();
      deck.cards.forEach(card => {
        spy(card, 'getNameAndsuit');
      });
      deck.showCards();
      deck.cards.forEach(card => {
        tally += card.getNameAndsuit.callCount;
      });
      assert.strictEqual(tally, 52);
    });
  });
  describe('#sortCards()', () => {
    it('sorts the elements in the cards array alphabetically by suit and within each suit numerically by value.', () => {
      // make cards
      // shuffle cards
      // sort cards
      //
      deck.makeCards();
      deck.shuffleCards();
      deck.sortCards();
      const uniqsuits = _.uniq(deck.cards.map(card => card.suit));
      const originalsuits = suits.slice();
      originalsuits.sort((a, b) => a.localeCompare(b));
      let isSortedByAlpha = true;
      let isSortedByValue = true;
      for (let i = 0;
        i < (originalsuits.length)
          && isSortedByAlpha
          && isSortedByValue;
        i += 1) {
        if (originalsuits[i] !== uniqsuits[i]) isSortedByAlpha = false;
        for (let j = 0; j < 13 && isSortedByValue; j += 1) {
          if (deck.cards[j + (i * 13)].value !== (j + 1)) isSortedByValue = false;
        }
      }
      assert.isTrue((isSortedByAlpha && isSortedByValue));
    });
  });
  describe('#shuffleCards()', () => {
    it('randomizes the position of elements in the cards array.', () => {
      deck.makeCards();
      const initialCardOrder = deck.cards.slice();
      deck.shuffleCards();
      assert.notDeepEqual(deck.cards, initialCardOrder);
    });
  });
});
