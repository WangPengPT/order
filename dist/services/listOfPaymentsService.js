const LIST_OF_PAYMENTS_URL = 'https://api.ifthenpay.com/v2/payments/read';
const REQUEST_TIMEOUT_MS = 15000;

const METHOD_MULTIBANCO = 'multibanco';
const METHOD_CREDITCARD = 'creditcard';
const METHOD_GOOGLEPAY = 'googlepay';
const METHOD_APPLEPAY = 'applepay';
const METHOD_WALLET = 'wallet';
const METHOD_DIRECTDEBIT = 'directdebit';

const LIST_API_METHODS = new Set([
  METHOD_MULTIBANCO,
  METHOD_CREDITCARD,
  METHOD_GOOGLEPAY,
  METHOD_APPLEPAY,
  METHOD_WALLET,
  METHOD_DIRECTDEBIT
]);

function methodToEntity(method) {
  const m = String(method || '').trim().toLowerCase();
  const map = {
    multibanco: 'MB',
    creditcard: 'CCARD',
    googlepay: 'GOOGLE',
    applepay: 'APPLE',
    wallet: null,
    directdebit: null
  };
  return map[m] ?? null;
}

function getBoKey() {
  return String(process.env.IFTHENPAY_BO_KEY || process.env.IFTHENPAY_BACKOFFICE_KEY || '').trim();
}

function hasBoKey() {
  return Boolean(getBoKey());
}

function amountToCents(amount) {
  if (amount === undefined || amount === null || amount === '') return null;
  const n = Number(String(amount).replace(',', '.'));
  if (!Number.isFinite(n)) return null;
  return Math.round(n * 100);
}

function formatApiDateTime(date) {
  const d = date instanceof Date ? date : new Date(date);
  if (Number.isNaN(d.getTime())) return null;
  const pad = (n) => String(n).padStart(2, '0');
  return `${pad(d.getDate())}-${pad(d.getMonth() + 1)}-${d.getFullYear()} ${pad(d.getHours())}:${pad(d.getMinutes())}:${pad(d.getSeconds())}`;
}

function buildDateWindow(createdAt) {
  if (!createdAt) return { dateStart: null, dateEnd: null };
  const start = new Date(createdAt);
  if (Number.isNaN(start.getTime())) return { dateStart: null, dateEnd: null };

  const dateStart = new Date(start.getTime() - 24 * 60 * 60 * 1000);
  const dateEnd = new Date(Date.now() + 60 * 60 * 1000);
  return {
    dateStart: formatApiDateTime(dateStart),
    dateEnd: formatApiDateTime(dateEnd)
  };
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

async function readPayments(filters = {}) {
  const boKey = getBoKey();
  if (!boKey) {
    const error = new Error('BO_KEY_NOT_CONFIGURED');
    error.httpStatus = 500;
    throw error;
  }

  const body = {
    boKey,
    entity: filters.entity ?? null,
    subEntity: null,
    reference: filters.reference ?? null,
    orderId: filters.orderId ?? null,
    amount: filters.amountCents != null ? String(filters.amountCents) : null,
    requestId: filters.requestId ?? null,
    dateStart: filters.dateStart ?? null,
    dateEnd: filters.dateEnd ?? null
  };

  const response = await requestWithTimeout(LIST_OF_PAYMENTS_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body)
  });

  if (!response.ok) {
    const error = new Error('LIST_OF_PAYMENTS_FAILED');
    error.details = response.data;
    error.httpStatus = response.status;
    throw error;
  }

  const apiStatus = Number(response.data?.status);
  if (apiStatus && apiStatus !== 200) {
    const error = new Error(response.data?.message || 'LIST_OF_PAYMENTS_REJECTED');
    error.details = response.data;
    error.httpStatus = apiStatus;
    throw error;
  }

  return response.data;
}

function pickMatchingPayment(payments, criteria = {}) {
  const list = Array.isArray(payments) ? payments : [];
  const reqId = String(criteria.requestId || '').trim();
  const ordId = String(criteria.orderId || '').trim();
  const ref = String(criteria.reference || '').trim();
  const amountCents = criteria.amountCents;

  for (const payment of list) {
    const pReqId = String(payment?.requestId || '').trim();
    const pOrdId = String(payment?.orderId || '').trim();
    const pRef = String(payment?.reference || '').trim();

    if (reqId && pReqId !== reqId) continue;
    if (!reqId && ordId && pOrdId !== ordId) continue;
    if (!reqId && !ordId && ref && pRef !== ref) continue;

    if (amountCents != null && payment?.amount != null) {
      const paidCents = Number(payment.amount);
      if (Number.isFinite(paidCents) && paidCents !== amountCents) continue;
    }

    return payment;
  }

  return null;
}

/**
 * Query ifthenpay List of Payments API for completed payments.
 * @see https://ifthenpay.com/docs/en/api/list-of-payments-rest/#tag/list-of-payments
 */
async function checkPaymentViaListOfPayments({
  method,
  requestId,
  orderId,
  reference,
  amount,
  createdAt
}) {
  if (!hasBoKey()) {
    const error = new Error('STATUS_BY_REQUEST_NOT_SUPPORTED');
    error.httpStatus = 400;
    throw error;
  }

  const reqId = String(requestId || '').trim();
  const ordId = String(orderId || '').trim();
  const ref = String(reference || '').trim();
  if (!reqId && !ordId && !ref) {
    throw new Error('REQUEST_ID_OR_ORDER_ID_REQUIRED');
  }

  const entity = methodToEntity(method);
  const amountCents = amountToCents(amount);
  const { dateStart, dateEnd } = buildDateWindow(createdAt);

  const useReference = method === METHOD_MULTIBANCO ? ref : null;
  const useOrderId = ordId || (!reqId ? ref : null);

  const data = await readPayments({
    entity,
    requestId: reqId || null,
    orderId: useOrderId || null,
    reference: useReference || null,
    amountCents,
    dateStart,
    dateEnd
  });

  const match = pickMatchingPayment(data?.payments, {
    requestId: reqId,
    orderId: ordId,
    reference: ref,
    amountCents
  });

  if (match) {
    return {
      Status: 'Paid',
      Message: 'Success',
      RequestId: match.requestId || reqId || null,
      OrderId: match.orderId || ordId || null,
      Reference: match.reference || ref || null,
      Amount: match.amount,
      PaymentDate: match.paymentDate || null,
      Entity: match.entity || entity || null,
      Source: 'list_of_payments'
    };
  }

  return {
    Status: 'Pending',
    Message: 'Pending',
    RequestId: reqId || null,
    OrderId: ordId || null,
    Source: 'list_of_payments'
  };
}

module.exports = {
  LIST_OF_PAYMENTS_URL,
  LIST_API_METHODS,
  METHOD_MULTIBANCO,
  METHOD_CREDITCARD,
  METHOD_GOOGLEPAY,
  METHOD_APPLEPAY,
  METHOD_WALLET,
  METHOD_DIRECTDEBIT,
  methodToEntity,
  getBoKey,
  hasBoKey,
  amountToCents,
  formatApiDateTime,
  buildDateWindow,
  pickMatchingPayment,
  readPayments,
  checkPaymentViaListOfPayments
};
