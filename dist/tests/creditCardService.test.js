const {
  computeCreditCardSignature,
  verifyCreditCardRedirectPayload
} = require('../services/creditCardService.js');

describe('creditCardService (ifthenpay CCARD redirect sk)', () => {
  test('computed sk round-trips verifyCreditCardRedirectPayload', () => {
    const orderId = 'order_456781';
    const amount = '11.55';
    const requestId = '36jvlEhUYeknQ8PHKprR';
    const ccardKey = 'AAA-000000';
    const sk = computeCreditCardSignature(orderId, amount, requestId, ccardKey);
    expect(sk.length).toBe(64);
    expect(
      verifyCreditCardRedirectPayload({
        orderId,
        amount,
        requestId,
        sk,
        ccardKey
      })
    ).toBe(true);
  });

  test('reject wrong sk', () => {
    expect(
      verifyCreditCardRedirectPayload({
        orderId: 'order_456781',
        amount: '11.55',
        requestId: '36jvlEhUYeknQ8PHKprR',
        sk: 'deadbeef',
        ccardKey: 'AAA-000000'
      })
    ).toBe(false);
  });
});
