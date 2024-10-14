import { simpleCalculator, Action } from './index';

const testCases = [
  { a: 1, b: 2, action: Action.Add, expected: 3 },
  { a: 2, b: 2, action: Action.Add, expected: 4 },
  { a: 3, b: 2, action: Action.Add, expected: 5 },
  { a: 6, b: 2, action: Action.Subtract, expected: 4 },
  { a: 6, b: 2, action: Action.Multiply, expected: 12 },
  { a: 6, b: 2, action: Action.Divide, expected: 3 },
  { a: 6, b: 2, action: Action.Exponentiate, expected: 36 },
  { a: 6, b: 2, action: 'divid', expected: null },
  { a: '6', b: 2, action: Action.Add, expected: null },
  { a: 6, b: '2', action: Action.Add, expected: null },
  { a: '6', b: '2', action: Action.Add, expected: null },
];

describe('simpleCalculator', () => {
  it.each(testCases)(
    `$a $action $b should result in $expected`,
    ({ a, b, action, expected }) => {
      const result = simpleCalculator({ a, b, action });

      expect(result).toBe(expected);
    },
  );
});
