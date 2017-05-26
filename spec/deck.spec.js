import { assert, beforeAll } from 'chai';
import { stub } from 'sinon';
import suites from '../src/strings/suites';
import cardNames from '../src/strings/cardnames';
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

    });
    it('calls the Card class constructor with different arguments fifty-two times.', () => {

    });
    it('stores fifty-two instances of the Card class in the cards array.', () => {

    });
  });
  describe('#showCards()', () => {
    it('calls console.log with the result of calling card.getNameAndSuite for each element in the cards array.', () => {

    });
  });
  describe('#sort()', () => {
    it('sorts the elements in the cards array alphabetically by suite and within each suite numerically by value.', () => {

    });
  });
  describe('#shuffle()', () => {
    it('randomizes the position of elements in the cards array.', () => {

    });
  });
});
