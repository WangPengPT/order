const IFTHENPAY_BASE_URL = 'https://api.ifthenpay.com/spg/payment';
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
    const generated = `${Date.now()}`.slice(-15);
    return generated;
  }

  const sanitized = raw.replace(/[^a-zA-Z0-9_-]/g, '');
  if (!sanitized) {
    throw new Error('INVALID_ORDER_ID');
  }
  return sanitized.slice(0, 15);
}

function normalizeMobileNumber(mobileNumber) {
  const raw = String(mobileNumber || '').trim();
  if (!raw) {
    throw new Error('MOBILE_NUMBER_REQUIRED');
  }

  // Docs format: 351#912345678
  if (/^\d{1,4}#\d{6,15}$/.test(raw)) {
    return raw;
  }

  const digits = raw.replace(/\D/g, '');
  if (digits.length < 9) {
    throw new Error('INVALID_MOBILE_NUMBER');
  }

  const countryCode = process.env.IFTHENPAY_COUNTRY_CODE || '351';
  return `${countryCode}#${digits}`;
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

function getMbWayKey(overrideKey) {
  const key = overrideKey || process.env.IFTHENPAY_MBWAY_KEY;
  if (!key) {
    throw new Error('MBWAY_KEY_NOT_CONFIGURED');
  }
  return key;
}

async function createMbWayPayment({
  amount,
  mobileNumber,
  orderId,
  description,
  email,
  mbWayKey
}) {
  const usedMbWayKey = getMbWayKey(mbWayKey);
  const payload = {
    mbWayKey: usedMbWayKey,
    orderId: normalizeOrderId(orderId),
    amount: normalizeAmount(amount),
    mobileNumber: normalizeMobileNumber(mobileNumber)
  };

  if (description) payload.description = String(description).slice(0, 100);
  if (email) payload.email = String(email).slice(0, 100);

  const response = await requestWithTimeout(`${IFTHENPAY_BASE_URL}/mbway`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const error = new Error('MBWAY_REQUEST_FAILED');
    error.details = response.data;
    error.httpStatus = response.status;
    throw error;
  }

  return {
    request: payload,
    response: response.data
  };
}

async function checkMbWayPaymentStatus(requestId, mbWayKeyOverride) {
  const mbWayKey = getMbWayKey(mbWayKeyOverride);
  const reqId = String(requestId || '').trim();
  if (!reqId) {
    throw new Error('REQUEST_ID_REQUIRED');
  }

  const url = `${IFTHENPAY_BASE_URL}/mbway/status?mbWayKey=${encodeURIComponent(mbWayKey)}&requestId=${encodeURIComponent(reqId)}`;
  const response = await requestWithTimeout(url, { method: 'GET' });

  if (!response.ok) {
    const error = new Error('MBWAY_STATUS_FAILED');
    error.details = response.data;
    error.httpStatus = response.status;
    throw error;
  }

  return response.data;
}

module.exports = {
  createMbWayPayment,
  checkMbWayPaymentStatus,
  normalizeAmount,
  normalizeMobileNumber,
  normalizeOrderId
};
