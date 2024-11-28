import {
  analyzeArray,
  caesarCipher,
  calculator,
  capitalize,
  reverseStr,
} from './app.js';

describe('Testing functions', () => {
  test('Capitalize String', () => {
    expect(capitalize('test')).toBe('Test');
  });

  test('Reverse string', () => {
    expect(reverseStr('rodney')).toBe('yendor');
  });

  test('Calculate based on the operation', () => {
    expect(calculator.add(1, 1)).toBe(2);
    expect(calculator.subtract(5, 2)).toBe(3);
    expect(calculator.multiply(3, 4)).toBe(12);
    expect(calculator.divide(10, 2)).toBe(5);
  });

  test('Caesar cipher', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    expect(caesarCipher('AabB!', 3)).toBe('DdeE!');
  });

  test('analyzes array correctly', () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
      average: 4,
      min: 1,
      max: 8,
      length: 6,
    });
  });

  test('analyzes array with negative numbers', () => {
    expect(analyzeArray([-1, -2, -3, 4, 5])).toEqual({
      average: 0.6,
      min: -3,
      max: 5,
      length: 5,
    });
  });
});

// TODO: Improve function and test to handle null, undefined, etc.
