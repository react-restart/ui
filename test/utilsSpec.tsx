import { describe, expect, it } from 'vitest';
import { getChildRef } from '../src/utils';

describe('utils', () => {
  describe('getChildRef', () => {
    it('should return null if ref is null', () => {
      expect(getChildRef(null)).to.equal(null);
    });

    it('should return null if ref is undefined', () => {
      expect(getChildRef(undefined)).to.equal(null);
    });

    it('should return null if ref is a function', () => {
      expect(getChildRef(() => null)).to.equal(null);
    });
  });
});
