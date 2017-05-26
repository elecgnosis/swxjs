import suites from './strings/suites';
import cardNames from './strings/cardnames';
import Card from './card';

export default class Deck {
  constructor() {
    this.suites = suites;
    this.cardNames = cardNames;
    this.cards = [];
  }
}
