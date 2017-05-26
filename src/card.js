export default class Card {
  constructor(suite, name, value) {
    if (!suite) throw new TypeError('Suite name is required.');
    if (!name) throw new TypeError('Suite name is required.');
    if (!value && value !== 0) throw new TypeError('Value is required.');
    if (typeof suite !== 'string') throw new TypeError('First parameter must be a string.');
    if (typeof name !== 'string') throw new TypeError('Second parameter must be a string.');
    if (typeof value !== 'number') throw new TypeError('Third parameter be a number.');

    this.suite = suite;
    this.name = name;
    this.value = value;
  }
  getNameandSuite() {
    return `${name} of ${suite}`;
  }
}
