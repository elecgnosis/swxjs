import { assert } from 'chai';
import Card from '../src/card';

describe('Card', () => {
  describe('constructor(profile)', () => {
    it('returns an instanceof the Card class.', () => {
      const card = new Card('suite', 'name', 0);
      assert.instanceOf(card, Card);
    });
  });
});
