import Sum from '../../../src/components/App/App-Helpers';

describe('Test using typescript', () => {
  it('Should sum', () => {
    expect(Sum(1, 2)).toBe(3);
  });
});
