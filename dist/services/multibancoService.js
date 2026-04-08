const MULTIBANCO_BASE_URL = 'https://api.ifthenpay.com/multibanco/reference';
const REQUEST_TIMEOUT_MS = 10000;

function normalizeAmount(amount) {
  const n = Number(amount);
  if (!Number.isFinite(n) || n <= 0) {
    throw new Error('INVALID_AMOUNT');
  }
  return n.toFixed(2);
}

function normalizeOrderId(orderId) {
  const raw = String(orderId || '').trim();
  if (!raw) {
    const generated = `${Date.now()}`.slice(-25);
    return generated;
  }
  const sanitized = raw.replace(/[^a-zA-Z0-9_-]/g, '');
  if (!sanitized) {
    throw new Error('INVALID_ORDER_ID');
  }
  return sanitized.slice(0, 25);
}

function getMbKey(overrideKey) {
  const key = overrideKey || process.env.IFTHENPAY_MB_KEY;
  if (!key) {
    throw new Error('MB_KEY_NOT_CONFIGURED');
  }
  return key;
}

function clip(value, max) {
  if (value === undefined || value === null) return undefined;
  return String(value).slice(0, max);
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

async function createMultibancoPayment({ amount, orderId, description, paymentData = {} }) {
  const payload = {
    mbKey: getMbKey(paymentData.mbKey),
    orderId: normalizeOrderId(orderId),
    amount: normalizeAmount(amount)
  };

  const endpoint = paymentData?.sandbox ? 'sandbox' : 'init';
  if (description) payload.description = clip(description, 200);
  if (paymentData.url) payload.url = clip(paymentData.url, 200);
  if (paymentData.clientCode) payload.clientCode = clip(paymentData.clientCode, 200);
  if (paymentData.clientName) payload.clientName = clip(paymentData.clientName, 200);
  if (paymentData.clientEmail) payload.clientEmail = clip(paymentData.clientEmail, 200);
  if (paymentData.clientUsername) payload.clientUsername = clip(paymentData.clientUsername, 200);
  if (paymentData.clientPhone) payload.clientPhone = clip(paymentData.clientPhone, 200);
  if (paymentData.expiryDays !== undefined && paymentData.expiryDays !== null && paymentData.expiryDays !== '') {
    payload.expiryDays = Number(paymentData.expiryDays);
  }

  const response = await requestWithTimeout(`${MULTIBANCO_BASE_URL}/${endpoint}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const error = new Error('MULTIBANCO_REQUEST_FAILED');
    error.details = response.data;
    error.httpStatus = response.status;
    throw error;
  }

  return {
    request: payload,
    response: response.data
  };
}

module.exports = {
  createMultibancoPayment
};
