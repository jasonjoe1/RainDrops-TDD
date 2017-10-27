import chai from 'chai';
import myApp from '../src/main.js';

const assert = chai.assert;
describe('RainDrops', () => {
  describe('handle valid input', () => {
    it('converts 3', () => {
      assert.equal(myApp.RainDrops(3), 'Pling');
    });
    it('converts 6', () => {
      assert.equal(myApp.RainDrops(6), 'Pling');
    });
    it('converts 28', () => {
      assert.equal(myApp.RainDrops(28), 'Plong');
    });
    it('converts 34', () => {
      assert.equal(myApp.RainDrops(34), '34');
    });
    it('converts 9', () => {
      assert.equal(myApp.RainDrops(9), 'Pling');
    });
    it('converts 49', () => {
      assert.equal(myApp.RainDrops(49), 'Plong');
    });
    it('converts 105', () => {
      assert.equal(myApp.RainDrops(105), 'PlingPlangPlong');
    });
    it('converts 12121', () => {
      assert.equal(myApp.RainDrops(12121), '12121');
    });
    it('converts empty to undefined', () => {
      assert.equal(myApp.RainDrops('undefined'), 'undefined');
    });
    it('converts 21', () => {
      assert.equal(myApp.RainDrops(21), 'PlingPlong');
    });
  });
});
