const { createMbWayPayment, checkMbWayPaymentStatus } = require('./mbwayService.js');
const { createMultibancoPayment } = require('./multibancoService.js');
const { createWalletPayment } = require('./gatewayPayService.js');
const { createDirectDebitPayment } = require('./directDebitService.js');
const { createCreditCardPayment } = require('./creditCardService.js');

const METHOD_MBWAY = 'mbway';
const METHOD_MULTIBANCO = 'multibanco';
const METHOD_CREDITCARD = 'creditcard';
const METHOD_GOOGLEPAY = 'googlepay';
const METHOD_APPLEPAY = 'applepay';
const METHOD_WALLET = 'wallet';
const METHOD_DIRECTDEBIT = 'directdebit';

function normalizeMethod(method) {
  return String(method || METHOD_MBWAY).trim().toLowerCase();
}

async function createIfthenpayCheckout({ method, amount, orderId, description, email, paymentData }) {
  const normalizedMethod = normalizeMethod(method);

  if (normalizedMethod === METHOD_MBWAY) {
    return createMbWayPayment({
      amount,
      orderId,
      description,
      email,
      mobileNumber: paymentData?.mobileNumber,
      mbWayKey: paymentData?.mbWayKey
    });
  }
  if (normalizedMethod === METHOD_MULTIBANCO) {
    return createMultibancoPayment({
      amount,
      orderId,
      description,
      paymentData
    });
  }
  if (normalizedMethod === METHOD_CREDITCARD) {
    return createCreditCardPayment({
      amount,
      orderId,
      paymentData
    });
  }
  if (normalizedMethod === METHOD_GOOGLEPAY || normalizedMethod === METHOD_APPLEPAY || normalizedMethod === METHOD_WALLET) {
    return createWalletPayment({
      walletMethod: normalizedMethod,
      amount,
      orderId,
      description,
      paymentData
    });
  }
  if (normalizedMethod === METHOD_DIRECTDEBIT) {
    return createDirectDebitPayment({
      amount,
      orderId,
      description,
      paymentData
    });
  }

  throw new Error(`METHOD_NOT_SUPPORTED:${normalizedMethod}`);
}

async function checkIfthenpayCheckoutStatus({ method, requestId, paymentData }) {
  const normalizedMethod = normalizeMethod(method);

  if (normalizedMethod === METHOD_MBWAY) {
    return checkMbWayPaymentStatus(requestId, paymentData?.mbWayKey);
  }
  if (
    normalizedMethod === METHOD_MULTIBANCO ||
    normalizedMethod === METHOD_CREDITCARD ||
    normalizedMethod === METHOD_GOOGLEPAY ||
    normalizedMethod === METHOD_APPLEPAY ||
    normalizedMethod === METHOD_WALLET ||
    normalizedMethod === METHOD_DIRECTDEBIT
  ) {
    const error = new Error('STATUS_BY_REQUEST_NOT_SUPPORTED');
    error.httpStatus = 400;
    throw error;
  }

  throw new Error(`METHOD_NOT_SUPPORTED:${normalizedMethod}`);
}

module.exports = {
  METHOD_MBWAY,
  METHOD_MULTIBANCO,
  METHOD_CREDITCARD,
  METHOD_GOOGLEPAY,
  METHOD_APPLEPAY,
  METHOD_WALLET,
  METHOD_DIRECTDEBIT,
  normalizeMethod,
  createIfthenpayCheckout,
  checkIfthenpayCheckoutStatus
};
