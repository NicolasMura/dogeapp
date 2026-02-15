import { toNumber } from './number.utils';

describe('toNumber', () => {
  it('parses numeric strings', () => {
    expect(toNumber('123.45')).toBe(123.45);
  });

  it('returns numbers unchanged', () => {
    expect(toNumber(42)).toBe(42);
  });

  it('returns NaN for non-numeric strings', () => {
    expect(Number.isNaN(toNumber('abc'))).toBe(true);
  });

  it('returns NaN for non-finite numbers', () => {
    expect(Number.isNaN(toNumber(Infinity))).toBe(true);
  });
});
