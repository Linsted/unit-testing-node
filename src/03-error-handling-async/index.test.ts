// Uncomment the code below and write your tests
import {
  resolveValue,
  throwCustomError,
  throwError,
  rejectCustomError,
} from './index';

describe('resolveValue', () => {
  test('should resolve provided value', async () => {
    // Write your test here
    expect(await resolveValue(5)).toEqual(5);
  });
});

describe('throwError', () => {
  test('should throw error with provided message', () => {
    // Write your test here
    const ERROR = 'Custom error';

    expect(() => throwError(ERROR)).toThrow(ERROR);
  });

  test('should throw error with default message if message is not provided', () => {
    // Write your test here
    const DEFAULT_ERROR = 'Oops!';
    expect(() => throwError()).toThrow(DEFAULT_ERROR);
  });
});

describe('throwCustomError', () => {
  test('should throw custom error', () => {
    // Write your test here
    expect(() => {
      throwCustomError();
    }).toThrow('This is my awesome custom error!');
  });
});

describe('rejectCustomError', () => {
  test('should reject custom error', async () => {
    // Write your test here
    await expect(rejectCustomError()).rejects.toThrow(
      'This is my awesome custom error!',
    );
  });
});
