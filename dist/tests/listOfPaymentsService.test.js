const {
  amountToCents,
  pickMatchingPayment,
  methodToEntity,
  checkPaymentViaListOfPayments
} = require('../services/listOfPaymentsService.js');

describe('listOfPaymentsService', () => {
  const originalFetch = global.fetch;

  afterEach(() => {
    global.fetch = originalFetch;
    delete process.env.IFTHENPAY_BO_KEY;
    delete process.env.IFTHENPAY_BACKOFFICE_KEY;
  });

  test('amountToCents converts decimal amounts', () => {
    expect(amountToCents('11.55')).toBe(1155);
    expect(amountToCents(10)).toBe(1000);
  });

  test('methodToEntity maps checkout methods', () => {
    expect(methodToEntity('multibanco')).toBe('MB');
    expect(methodToEntity('creditcard')).toBe('CCARD');
    expect(methodToEntity('googlepay')).toBe('GOOGLE');
    expect(methodToEntity('wallet')).toBeNull();
  });

  test('pickMatchingPayment prefers requestId', () => {
    const payments = [
      { requestId: 'req-a', orderId: 'ord-1', amount: 1000 },
      { requestId: 'req-b', orderId: 'ord-2', amount: 2000 }
    ];
    expect(pickMatchingPayment(payments, { requestId: 'req-b' })?.orderId).toBe('ord-2');
  });

  test('checkPaymentViaListOfPayments returns Paid when gateway lists payment', async () => {
    process.env.IFTHENPAY_BO_KEY = 'TEST-BO-KEY';
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      status: 200,
      text: async () => JSON.stringify({
        status: 200,
        message: 'OK',
        payments: [
          {
            requestId: 'abc123',
            orderId: 'ORDER001',
            amount: 1155,
            entity: 'CCARD',
            paymentDate: '21-10-2024 15:41:00'
          }
        ]
      })
    });

    const result = await checkPaymentViaListOfPayments({
      method: 'creditcard',
      requestId: 'abc123',
      orderId: 'ORDER001',
      amount: '11.55'
    });

    expect(result.Status).toBe('Paid');
    expect(result.Message).toBe('Success');
    expect(result.Source).toBe('list_of_payments');
    expect(global.fetch).toHaveBeenCalledTimes(1);
    const [, options] = global.fetch.mock.calls[0];
    const body = JSON.parse(options.body);
    expect(body.boKey).toBe('TEST-BO-KEY');
    expect(body.requestId).toBe('abc123');
    expect(body.entity).toBe('CCARD');
  });

  test('checkPaymentViaListOfPayments returns Pending when not listed', async () => {
    process.env.IFTHENPAY_BO_KEY = 'TEST-BO-KEY';
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      status: 200,
      text: async () => JSON.stringify({ status: 200, message: 'OK', payments: [] })
    });

    const result = await checkPaymentViaListOfPayments({
      method: 'multibanco',
      requestId: 'missing',
      orderId: 'ORD99',
      reference: '123456789'
    });

    expect(result.Status).toBe('Pending');
    expect(result.Source).toBe('list_of_payments');
  });

  test('checkPaymentViaListOfPayments without bo key throws STATUS_BY_REQUEST_NOT_SUPPORTED', async () => {
    await expect(
      checkPaymentViaListOfPayments({
        method: 'creditcard',
        requestId: 'x',
        orderId: 'y'
      })
    ).rejects.toMatchObject({ message: 'STATUS_BY_REQUEST_NOT_SUPPORTED' });
  });
});
