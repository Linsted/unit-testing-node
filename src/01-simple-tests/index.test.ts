// Uncomment the code below and write your tests
import { Action, simpleCalculator } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ a: 2, b: 2, action: Action.Add });

    expect(result).toBe(4);
  });

  test('should subtract two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ a: 6, b: 2, action: Action.Subtract });

    expect(result).toBe(4);
  });

  test('should multiply two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ a: 6, b: 2, action: Action.Multiply });

    expect(result).toBe(12);
  });

  test('should divide two numbers', () => {
    // Write your test here
    const result = simpleCalculator({ a: 6, b: 2, action: Action.Divide });

    expect(result).toBe(3);
  });

  test('should exponentiate two numbers', () => {
    // Write your test here
    const result = simpleCalculator({
      a: 5,
      b: 2,
      action: Action.Exponentiate,
    });

    expect(result).toBe(25);
  });

  test('should return null for invalid action', () => {
    // Write your test here
    const result = simpleCalculator({
      a: 3,
      b: 2,
      action: 'Divid',
    });

    expect(result).toBe(null);
  });

  test('should return null for invalid arguments', () => {
    // Write your test here
    const firstResult = simpleCalculator({
      a: '3',
      b: 2,
      action: Action.Add,
    });

    const secondResult = simpleCalculator({
      a: 3,
      b: '2',
      action: Action.Add,
    });

    const thirdResult = simpleCalculator({
      a: '3',
      b: '2',
      action: Action.Add,
    });

    expect(firstResult).toBe(null);
    expect(secondResult).toBe(null);
    expect(thirdResult).toBe(null);
  });
});
