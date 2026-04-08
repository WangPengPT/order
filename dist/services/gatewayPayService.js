const REQUEST_TIMEOUT_MS = 10000;
const GATEWAY_BASE_URL = 'https://api.ifthenpay.com/gateway';

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
    return `${Date.now()}`.slice(-25);
  }
  return raw.slice(0, 25);
}

function getGatewayKey(overrideKey) {
  const key = overrideKey || process.env.IFTHENPAY_GATEWAY_KEY;
  if (!key) throw new Error('GATEWAY_KEY_NOT_CONFIGURED');
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

function buildMethodsForWallet(walletMethod, paymentData = {}) {
  if (Array.isArray(paymentData.methods) && paymentData.methods.length > 0) {
    return paymentData.methods;
  }
  const methods = [];
  if (walletMethod === 'googlepay' || walletMethod === 'wallet') {
    const key = paymentData.googleKey || process.env.IFTHENPAY_GOOGLE_KEY;
    if (!key) throw new Error('GOOGLE_KEY_NOT_CONFIGURED');
    methods.push(`GOOGLE|${key}`);
  }
  if (walletMethod === 'applepay' || walletMethod === 'wallet') {
    const key = paymentData.appleKey || process.env.IFTHENPAY_APPLE_KEY;
    if (!key) throw new Error('APPLE_KEY_NOT_CONFIGURED');
    methods.push(`APPLE|${key}`);
  }
  return methods;
}

async function createWalletPayment({ walletMethod, amount, orderId, description, paymentData = {} }) {
  const gatewayKey = getGatewayKey(paymentData.gatewayKey);
  const payload = {
    amount: normalizeAmount(amount),
    orderId: normalizeOrderId(orderId),
    methods: buildMethodsForWallet(walletMethod, paymentData)
  };
  if (description) payload.description = String(description).slice(0, 200);

  const passthroughKeys = [
    'successUrl', 'errorUrl', 'cancelUrl', 'language', 'btnCloseUrl',
    'customerName', 'customerEmail', 'customerPhone', 'expiryDays'
  ];
  passthroughKeys.forEach((key) => {
    if (paymentData[key] !== undefined && paymentData[key] !== null && paymentData[key] !== '') {
      payload[key] = paymentData[key];
    }
  });

  const response = await requestWithTimeout(`${GATEWAY_BASE_URL}/pinpay/${gatewayKey}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload)
  });

  if (!response.ok) {
    const error = new Error('WALLET_REQUEST_FAILED');
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
  createWalletPayment
};
