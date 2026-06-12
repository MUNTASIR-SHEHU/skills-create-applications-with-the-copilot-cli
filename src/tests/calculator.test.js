const { add, sub, mul, div, toNumbers, modulo, power, squareRoot } = require('../calculator');

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

  describe('modulo', () => {
    test('5 % 2 = 1', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('negative divisor modulo works', () => {
      expect(modulo(5, -2)).toBe(1);
    });

    test('modulo by zero throws', () => {
      expect(() => modulo(5, 0)).toThrow(/Division by zero/);
    });
  });

  describe('power', () => {
    test('2 ^ 3 = 8', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('2 ^ -1 = 0.5', () => {
      expect(power(2, -1)).toBeCloseTo(0.5);
    });

    test('floating exponent', () => {
      expect(power(9, 0.5)).toBeCloseTo(3);
    });
  });

  describe('squareRoot', () => {
    test('sqrt(16) = 4', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('sqrt(2) is approximately 1.414', () => {
      expect(squareRoot(2)).toBeCloseTo(Math.SQRT2);
    });

    test('squareRoot of negative number throws', () => {
      expect(() => squareRoot(-1)).toThrow(/Cannot take square root of negative number/);
    });
  });

  describe('input validation', () => {
    test('toNumbers throws on invalid input', () => {
      expect(() => toNumbers(['a', '2'])).toThrow(/All operands must be valid numbers/);
    });
  });
});
