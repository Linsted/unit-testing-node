// Uncomment the code below and write your tests
import { getBankAccount } from '.';

describe('BankAccount', () => {
  const BALANCE = 250;

  const UserAccount = getBankAccount(BALANCE);
  test('should create account with initial balance', () => {
    // Write your test here

    expect(UserAccount.getBalance()).toBe(BALANCE);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    // Write your test here
    expect(() => UserAccount.withdraw(300)).toThrow(
      `Insufficient funds: cannot withdraw more than ${BALANCE}`,
    );
  });

  test('should throw error when transferring more than balance', () => {
    const SecondAccount = getBankAccount(200);

    // Write your test here
    expect(() => UserAccount.transfer(300, SecondAccount)).toThrow(
      `Insufficient funds: cannot withdraw more than ${BALANCE}`,
    );
  });

  test('should throw error when transferring to the same account', () => {
    // Write your test here
    expect(() => UserAccount.transfer(100, UserAccount)).toThrow(
      'Transfer failed',
    );
  });

  test('should deposit money', () => {
    // Write your test here
    UserAccount.deposit(BALANCE);

    expect(UserAccount.getBalance()).toBe(500);
  });

  test('should withdraw money', () => {
    // Write your test here

    UserAccount.withdraw(100);

    expect(UserAccount.getBalance()).toBe(150);
  });

  test('should transfer money', () => {
    // Write your test here

    const SecondAccount = getBankAccount(200);

    UserAccount.transfer(100, SecondAccount);

    expect(SecondAccount.getBalance()).toBe(300);
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your tests here
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
  });
});
