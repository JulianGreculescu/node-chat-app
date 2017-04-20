const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject a non string', () => {
    expect(isRealString(13)).toBe(false);
  });
  it('should reject an empty string', () => {
    expect(isRealString('')).toBe(false);
  });
  it('should reject a blank string', () => {
    expect(isRealString('  ')).toBe(false);
  });
  it('should validate a non blank string', () => {
    expect(isRealString(' 12 3 ')).toBe(true);
  });
});
