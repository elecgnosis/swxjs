import { assert, beforeAll } from 'chai';
import { stub } from 'sinon';
import Card from '../src/card';

let mockSuite = 'suite';
let mockCardName = 'cardName';
let mockCardValue = '0';

describe('Card', () => {
  describe('#Card(suite, name, value)', () => {
    it('returns an instance of the Card class.', () => {
      const card = new Card(mockSuite, mockCardName, mockCardValue);
      assert.instanceOf(card, Card);
    });
    it('throws a TypeError if the suite parameter is empty', () => {
      assert.throws(() => {
        const card = new Card(null, mockCardName, mockCardValue);
      }, TypeError);
    });
    it('throws a TypeError if the suite parameter is not a string.', () => {
      assert.throws(() => {
        const card = new Card(mockCardValue, mockCardName, mockCardValue);
      }, TypeError);
    });
    it('throws a TypeError if the name parameter is empty.', () => {
      assert.throws(() => {
        const card = new Card(mockSuite, null, mockCardValue);
      }, TypeError);
    });
    it('throws a TypeError if the name parameter is not a string.', () => {
      assert.throws(() => {
        const card = new Card(mockSuite, mockCardValue, mockCardValue);
      }, TypeError);
    });
    it('throws a TypeError if the value parameter is empty.', () => {
      assert.throws(() => {
        const card = new Card(mockSuite, null, mockCardValue);
      }, TypeError);
    });
    it('throws a TypeError if the value parameter is not a number.', () => {
      assert.throws(() => {
        const card = new Card(mockSuite, mockCardValue, mockCardValue);
      }, TypeError);
    });
    it('stores the suite provided.', () => {
      const card = new Card(mockSuite, mockCardName, mockCardValue);
      assert.strictEqual(card.suite, mockSuite);
    });
    it('stores the name provided.', () => {
      const card = new Card(mockSuite, mockCardName, mockCardValue);
      assert.strictEqual(card.name, mockCardName);
    });
    it('stores the value provided.', () => {
      const card = new Card(mockSuite, mockCardName, mockCardValue);
      assert.strictEqual(card.value, mockCardValue);
    });
  });
  describe('#getNameAndSuite', () => {
    it('returns a string containing the card\'s name and suite', () => {
      const card = new Card(mockSuite, mockCardName, mockCardValue);
      const cardNameAndSuite = card.getNameAndSuite();
      const isNamePresent = cardNameAndSuite.indexOf(mockCardName);
      const isSuitePresent = cardNameAndSuite.indexOf(mockSuite);

      assert.isTrue((isSuitePresent && isSuitePresent));
    });
  });
});
