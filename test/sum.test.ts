import test from './sum';

describe('sum', () => {
  it('calculate 1 + 2', () => {
    expect(test.sum(1, 2)).toBe(3);
  });

  it('calculates all numbers', () => {
    expect(test.sumOf([1, 2, 3, 4, 5])).toBe(15);
  });
});
