const REQUEST_TIMEOUT_MS = 10000;
const DIRECT_DEBIT_BASE_URL = 'https://services.ifthenpay.com/directdebit';

function getDirectDebitCredentials(paymentData = {}) {
  const key = paymentData.ddKey || process.env.IFTHENPAY_DD_KEY;
  const secret = paymentData.ddSecret || process.env.IFTHENPAY_DD_SECRET;
  if (!key || !secret) {
    throw new Error('DD_CREDENTIALS_NOT_CONFIGURED');
  }
  return { key, secret };
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

async function getDirectDebitToken(paymentData = {}) {
  const { key, secret } = getDirectDebitCredentials(paymentData);
  const payload = paymentData.auth || { key, secret };
  const res = await requestWithTimeout(`${DIRECT_DEBIT_BASE_URL}/api/v1/auth/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });
  if (!res.ok) {
    const error = new Error('DIRECTDEBIT_AUTH_FAILED');
    error.httpStatus = res.status;
    error.details = res.data;
    throw error;
  }
  return res.data?.access_token || res.data?.token || res.data?.jwt || null;
}

async function createDirectDebitPayment({ amount, orderId, description, paymentData = {} }) {
  const token = paymentData.token || await getDirectDebitToken(paymentData);
  if (!token) {
    throw new Error('DIRECTDEBIT_TOKEN_MISSING');
  }

  // operation:
  // - authorization: create a new mandate
  // - collection: create collection for a mandate (requires mandateId)
  const operation = String(paymentData.operation || 'authorization').toLowerCase();
  let endpoint = '/api/v1/authorization/create';
  let payload = {
    amount,
    orderId,
    description,
    ...paymentData.authorization
  };

  if (operation === 'collection') {
    const mandateId = paymentData.mandateId;
    if (!mandateId) {
      throw new Error('MANDATE_ID_REQUIRED');
    }
    endpoint = `/api/v1/collection/create/${encodeURIComponent(mandateId)}`;
    payload = {
      amount,
      orderId,
      description,
      ...paymentData.collection
    };
  }

  const res = await requestWithTimeout(`${DIRECT_DEBIT_BASE_URL}${endpoint}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const error = new Error('DIRECTDEBIT_REQUEST_FAILED');
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
  createDirectDebitPayment
};
