import _ from 'underscore';
import suites from './strings/suites';
import cardNames from './strings/cardnames';
import Card from './card';

export default class Deck {
  constructor() {
    this.suites = suites;
    this.cardNames = cardNames;
    this.cards = [];
  }
  makeCards() {
    this.cards = [];
    this.suites.forEach(suite => {
      this.cardNames.forEach((cardName, value) => {
        this.cards.push(new Card(suite, cardName, (value + 1)));
      });
    });
  }
  showCards() {
    this.cards.forEach(card => console.log(card.getNameAndSuite()));
  }
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
  shuffleCards() {
    this.cards = _.shuffle(this.cards);
  }
}
