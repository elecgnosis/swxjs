import { assert, beforeAll } from 'chai';
import { stub } from 'sinon';
import Card from '../src/card';

let mocksuit = 'suit';
let mockCardName = 'cardName';
let mockCardValue = 0;

describe('Card', () => {
  describe('#Card(suit, name, value)', () => {
    it('returns an instance of the Card class.', () => {
      const card = new Card(mocksuit, mockCardName, mockCardValue);
      assert.instanceOf(card, Card);
    });
    it('throws a TypeError if the suit parameter is empty', () => {
      assert.throws(() => {
        const card = new Card(null, mockCardName, mockCardValue);
      }, TypeError);
    });
    it('throws a TypeError if the suit parameter is not a string.', () => {
      assert.throws(() => {
        const card = new Card(mockCardValue, mockCardName, mockCardValue);
      }, TypeError);
    });
    it('throws a TypeError if the name parameter is empty.', () => {
      assert.throws(() => {
        const card = new Card(mocksuit, null, mockCardValue);
      }, TypeError);
    });
    it('throws a TypeError if the name parameter is not a string.', () => {
      assert.throws(() => {
        const card = new Card(mocksuit, mockCardValue, mockCardValue);
      }, TypeError);
    });
    it('throws a TypeError if the value parameter is empty.', () => {
      assert.throws(() => {
        const card = new Card(mocksuit, null, mockCardValue);
      }, TypeError);
    });
    it('throws a TypeError if the value parameter is not a number.', () => {
      assert.throws(() => {
        const card = new Card(mocksuit, mockCardValue, mockCardValue);
      }, TypeError);
    });
    it('stores the suit provided.', () => {
      const card = new Card(mocksuit, mockCardName, mockCardValue);
      assert.strictEqual(card.suit, mocksuit);
    });
    it('stores the name provided.', () => {
      const card = new Card(mocksuit, mockCardName, mockCardValue);
      assert.strictEqual(card.name, mockCardName);
    });
    it('stores the value provided.', () => {
      const card = new Card(mocksuit, mockCardName, mockCardValue);
      assert.strictEqual(card.value, mockCardValue);
    });
  });
  describe('#getNameAndsuit', () => {
    it('returns a string containing the card\'s name and suit', () => {
      const card = new Card(mocksuit, mockCardName, mockCardValue);
      const cardNameAndsuit = card.getNameAndsuit();
      const isNamePresent = cardNameAndsuit.indexOf(mockCardName) !== -1;
      const issuitPresent = cardNameAndsuit.indexOf(mocksuit) !== -1;

      assert.isTrue((issuitPresent && issuitPresent));
    });
  });
});
