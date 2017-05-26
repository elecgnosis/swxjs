import { assert } from 'chai';
import Card from '../src/card';

let mockSuite = 'suite';
let mockCardName = 'cardName';
let mockCardValue = '0';

describe('Card', () => {
  describe('constructor(suite, name, value)', () => {
    it('returns an instance of the Card class.', () => {
      const card = new Card(mockSuite, mockCardName, mockCardValue);
      assert.instanceOf(card, Card);
    });
    it('throws a TypeError if the suite parameter is empty', () => {
      assert.throws(() => {
        const card = new Card(null, mockCardName, mockCardValue);
      }, TypeError);
    });
  });
});
