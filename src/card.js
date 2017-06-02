/**
 * Card holds three pieces of information: a suit name, a card name, and a
 * numeric value for comparisons. It also has a method for getting a fancy name
 * made of the card name and suit name together.
 * @type {Card}
 */
export default class Card {
  constructor(suit, name, value) {
    if (!suit) throw new TypeError('suit name is required.');
    if (!name) throw new TypeError('suit name is required.');
    if (!value && value !== 0) throw new TypeError('Value is required.');
    if (typeof suit !== 'string') throw new TypeError('First parameter must be a string.');
    if (typeof name !== 'string') throw new TypeError('Second parameter must be a string.');
    if (typeof value !== 'number') throw new TypeError('Third parameter be a number.');

    this.suit = suit;
    this.name = name;
    this.value = value;
  }
  getNameAndsuit() {
    return `${this.name} of ${this.suit}`;
  }
}
