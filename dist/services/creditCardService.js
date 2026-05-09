const crypto = require('crypto');

const REQUEST_TIMEOUT_MS = 10000;
const CREDITCARD_BASE_URL = 'https://api.ifthenpay.com/creditcard';

/**
 * HMAC-SHA256(ccardKey, id + amount + requestId), hex. Success redirect only (`sk`).
 * @see https://ifthenpay.com/docs/en/api/ccard/
 */
function computeCreditCardSignature(orderId, amount, requestId, ccardKey) {
  const id = String(orderId || '').trim();
  const amt = String(amount || '').trim();
  const rid = String(requestId || '').trim();
  const key = String(ccardKey || '').trim();
  if (!id || !amt || !rid || !key) return '';
  return crypto.createHmac('sha256', key).update(`${id}${amt}${rid}`, 'utf8').digest('hex');
}

function verifyCreditCardRedirectPayload({ orderId, amount, requestId, sk, ccardKey }) {
  const expected = computeCreditCardSignature(orderId, amount, requestId, ccardKey);
  const incoming = String(sk || '').trim().toLowerCase();
  if (!expected || !incoming) return false;
  return incoming === expected.toLowerCase();
}

function normalizeAmount(amount) {
  const n = Number(amount);
  if (!Number.isFinite(n) || n <= 0) {
    throw new Error('INVALID_AMOUNT');
  }
  return n.toFixed(2);
}

function normalizeOrderId(orderId) {
  const raw = String(orderId || '').trim();
  if (!raw) return `${Date.now()}`.slice(-15);
  return raw.slice(0, 15);
}

function getCcardKey(paymentData = {}) {
  const key = paymentData.ccardKey || process.env.IFTHENPAY_CCARD_KEY;
  if (!key) throw new Error('CCARD_KEY_NOT_CONFIGURED');
  return key;
}

async function requestWithTimeout(url, options = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), REQUEST_TIMEOUT_MS);
  try {
    const res = await fetch(url, { ...options, signal: controller.signal });
    const text = await res.text();
    let data;
    try {
      data = text ? JSON.parse(text) : {};
    } catch (_) {
      data = { raw: text };
    }
    return { ok: res.ok, status: res.status, data };
  } finally {
    clearTimeout(timer);
  }
}

async function createCreditCardPayment({ amount, orderId, paymentData = {} }) {
  const ccardKey = getCcardKey(paymentData);
  const sandbox = Boolean(paymentData.sandbox);
  const endpoint = sandbox ? `sandbox/init/${ccardKey}` : `init/${ccardKey}`;

  const payload = {
    orderId: normalizeOrderId(orderId),
    amount: normalizeAmount(amount),
    successUrl: paymentData.successUrl,
    errorUrl: paymentData.errorUrl,
    cancelUrl: paymentData.cancelUrl
  };
  if (!payload.successUrl || !payload.errorUrl || !payload.cancelUrl) {
    throw new Error('CREDITCARD_URLS_REQUIRED');
  }
  if (paymentData.language) payload.language = String(paymentData.language).slice(0, 10);

  const res = await requestWithTimeout(`${CREDITCARD_BASE_URL}/${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const error = new Error('CREDITCARD_REQUEST_FAILED');
    error.httpStatus = res.status;
    error.details = res.data;
    throw error;
  }

  return {
    request: payload,
    response: res.data
  };
}

module.exports = {
  createCreditCardPayment,
  computeCreditCardSignature,
  verifyCreditCardRedirectPayload
};
