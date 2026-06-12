const { add, sub, mul, div, toNumbers } = require('../calculator');

describe('Calculator functions', () => {
  describe('addition', () => {
    test('2 + 3 = 5', () => {
      expect(add([2, 3])).toBe(5);
    });

    test('1 + 2 + 3 = 6', () => {
      expect(add([1, 2, 3])).toBe(6);
    });

    test('floating point addition', () => {
      expect(add([2.5, 0.5])).toBeCloseTo(3);
    });
  });

  describe('subtraction', () => {
    test('10 - 4 = 6', () => {
      expect(sub([10, 4])).toBe(6);
    });

    test('10 - 4 - 1 = 5', () => {
      expect(sub([10, 4, 1])).toBe(5);
    });
  });

  describe('multiplication', () => {
    test('45 * 2 = 90', () => {
      expect(mul([45, 2])).toBe(90);
    });

    test('2 * 3.5 = 7 (floating)', () => {
      expect(mul([2, 3.5])).toBeCloseTo(7);
    });
  });

  describe('division', () => {
    test('20 / 5 = 4', () => {
      expect(div([20, 5])).toBe(4);
    });

    test('7 / 2 = 3.5 (floating)', () => {
      expect(div([7, 2])).toBeCloseTo(3.5);
    });

    test('division by zero throws', () => {
      expect(() => div([10, 0])).toThrow(/Division by zero/);
    });
  });

  describe('input validation', () => {
    test('toNumbers throws on invalid input', () => {
      expect(() => toNumbers(['a', '2'])).toThrow(/All operands must be valid numbers/);
    });
  });
});