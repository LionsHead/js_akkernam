/* global define, it, describe */

import assert from 'assert';
import akkerman from './solution';

describe('akkerman', () => {
  it('should work', () => {
    assert.equal(1, akkerman(0, 0));
    assert.equal(3, akkerman(1, 1));
    assert.equal(4, akkerman(1, 2));
    assert.equal(5, akkerman(2, 1));
    assert.equal(9, akkerman(2, 3));
  });
  it('bad value', () => {
    assert.equal(undefined, akkerman(-1, 1));
    assert.equal(undefined, akkerman(1, -1));
  });
});
