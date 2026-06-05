const { createMbWayPayment, checkMbWayPaymentStatus } = require('./mbwayService.js');
const { createMultibancoPayment } = require('./multibancoService.js');
const { createWalletPayment } = require('./gatewayPayService.js');
const { createDirectDebitPayment } = require('./directDebitService.js');
const { createCreditCardPayment } = require('./creditCardService.js');
const { LIST_API_METHODS, checkPaymentViaListOfPayments } = require('./listOfPaymentsService.js');

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

/**
 * 统一 payer 字段：所有支付方式均可传 mobileNumber / nif / 姓名；
 * 并映射到各子服务常用字段（Multibanco client*、Gateway customer* 等）。
 */
function enrichPaymentDataForProvider(paymentData = {}, email) {
  const p = { ...paymentData };

  const nameCandidate = [p.customerName, p.payerName, p.name].find((x) => x != null && String(x).trim() !== '');
  if (nameCandidate) {
    const v = String(nameCandidate).trim();
    if (!p.customerName) p.customerName = v;
    if (!p.clientName) p.clientName = v;
  }

  const phoneCandidate = [p.mobileNumber, p.customerPhone, p.phone].find((x) => x != null && String(x).trim() !== '');
  if (phoneCandidate) {
    const v = String(phoneCandidate).trim();
    if (!p.customerPhone) p.customerPhone = v;
    if (!p.clientPhone) p.clientPhone = v;
  }

  const nifCandidate = p.nif ?? p.NIF ?? p.Nif;
  if (nifCandidate != null && String(nifCandidate).trim() !== '') {
    const v = String(nifCandidate).trim();
    if (!p.nif) p.nif = v;
    if (!p.taxId) p.taxId = v;
  }

  if (email != null && String(email).trim() !== '') {
    const e = String(email).trim().slice(0, 200);
    if (!p.clientEmail) p.clientEmail = e;
    if (!p.customerEmail) p.customerEmail = e;
  }

  return p;
}

async function createIfthenpayCheckout({ method, amount, orderId, description, email, paymentData }) {
  const normalizedMethod = normalizeMethod(method);
  const enriched = enrichPaymentDataForProvider(paymentData || {}, email);

  if (normalizedMethod === METHOD_MBWAY) {
    return createMbWayPayment({
      amount,
      orderId,
      description,
      email,
      mobileNumber: enriched.mobileNumber,
      mbWayKey: enriched.mbWayKey
    });
  }
  if (normalizedMethod === METHOD_MULTIBANCO) {
    return createMultibancoPayment({
      amount,
      orderId,
      description,
      paymentData: enriched
    });
  }
  if (normalizedMethod === METHOD_CREDITCARD) {
    return createCreditCardPayment({
      amount,
      orderId,
      paymentData: enriched
    });
  }
  if (normalizedMethod === METHOD_GOOGLEPAY || normalizedMethod === METHOD_APPLEPAY || normalizedMethod === METHOD_WALLET) {
    return createWalletPayment({
      walletMethod: normalizedMethod,
      amount,
      orderId,
      description,
      paymentData: enriched
    });
  }
  if (normalizedMethod === METHOD_DIRECTDEBIT) {
    return createDirectDebitPayment({
      amount,
      orderId,
      description,
      paymentData: enriched
    });
  }

  throw new Error(`METHOD_NOT_SUPPORTED:${normalizedMethod}`);
}

async function checkIfthenpayCheckoutStatus({ method, requestId, paymentData = {} }) {
  const normalizedMethod = normalizeMethod(method);

  if (normalizedMethod === METHOD_MBWAY) {
    return checkMbWayPaymentStatus(requestId, paymentData?.mbWayKey);
  }
  if (LIST_API_METHODS.has(normalizedMethod)) {
    return checkPaymentViaListOfPayments({
      method: normalizedMethod,
      requestId,
      orderId: paymentData.orderId,
      reference: paymentData.reference,
      amount: paymentData.amount,
      createdAt: paymentData.createdAt
    });
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
  enrichPaymentDataForProvider,
  createIfthenpayCheckout,
  checkIfthenpayCheckoutStatus
};
