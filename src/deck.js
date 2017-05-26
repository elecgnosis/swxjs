import _ from 'underscore';
import suits from './strings/suits';
import cardNames from './strings/cardnames';
import Card from './card';

/**
 * Deck is a class to manage Card classes. It holds the names of suits and
 * cards, which it uses together with an inferred value to produce Card objects
 * representing a standard deck of playing cards.
 * It offers a method for generating the collection of cards, a utility method
 * for displaying all of those cards' fancy names with suits, and two other
 * methods for sorting and shuffling the card collection.
 * @type {Deck}
 */
export default class Deck {
  /**
   * Takes no parameter. Sets internal reference to external String Arrays
   * containing the names of the suits and cards in a standard deck of
   * playing cards.
   * @return {Deck} Deck object for managing collection of Card objects.
   */
  constructor() {
    this.suits = suits;
    this.cardNames = cardNames;
    this.cards = [];
    this.makeCards
  }
  /**
   * Generates fifty-two Card objects using the suite and cardName Arrays. On
   * subsequent calls, it empties out the existing array of cards before
   * generating a new one.
   * @return {null} No return value.
   */
  makeCards() {
    this.cards = [];
    this.suits.forEach(suite => {
      this.cardNames.forEach((cardName, value) => {
        this.cards.push(new Card(suite, cardName, (value + 1)));
      });
    });
  }
  /**
   * Uses console.log to print the card names with suits of the cards in the
   * cards array in their current order.
   * @return {null} No return value.
   */
  showCards() {
    this.cards.forEach(card => console.log(card.getNameAndSuite()));
  }
  /**
   * Sorts the elements in the cards array using the suite name as a primary
   * sort and the card value as a secondary sort. The end result is the four
   * suits sorted one after the other alphabetically, cards within numerically.
   * @return {null} No return value.
   */
  sortCards() {
    this.cards.sort((a, b) => {
      const suiteCompareResult = a.suite.localeCompare(b.suite);
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
  shuffleCards() {
    this.cards = _.shuffle(this.cards);
  }
}
