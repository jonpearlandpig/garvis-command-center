import { describe, it, expect } from 'vitest';
import { isTruthy } from '../src/utils/smoke';

describe('smoke: basic utilities', () => {
  it('isTruthy should coerce truthy values to true', () => {
    expect(isTruthy(true)).toBe(true);
    expect(isTruthy(1)).toBe(true);
    expect(isTruthy('x')).toBe(true);
  });

  it('isTruthy should coerce falsy values to false', () => {
    expect(isTruthy(false)).toBe(false);
    expect(isTruthy(0)).toBe(false);
    expect(isTruthy('')).toBe(false);
    expect(isTruthy(null)).toBe(false);
  });
});
