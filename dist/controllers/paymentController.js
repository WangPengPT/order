const {
  METHOD_MBWAY,
  normalizeMethod,
  createIfthenpayCheckout,
  checkIfthenpayCheckoutStatus
} = require('../services/ifthenpayCheckoutService.js');
const tableService = require('../services/tableService.js');
const db = require('../filedb.js');
const { appState } = require('../state.js');
const CheckoutRepository = require('../repositories/checkoutRepository.js');
const { logger } = require('../utils/logger.js');

const checkoutRepository = new CheckoutRepository();

function normalizeTableId(tableId) {
  const id = String(tableId || '').replace('#', '').trim();
  if (!id) {
    throw new Error('TABLE_ID_REQUIRED');
  }
  return id;
}

function ensureCheckoutState() {
  if (!appState.checkoutPayments || typeof appState.checkoutPayments !== 'object') {
    appState.checkoutPayments = {};
  }
  if (!appState.checkoutPayments.records) {
    appState.checkoutPayments.records = {};
  }
  if (!appState.checkoutPayments.activeByTable) {
    appState.checkoutPayments.activeByTable = {};
  }
  if (!appState.checkoutPayments.latestByTable) {
    appState.checkoutPayments.latestByTable = {};
  }
  if (!appState.checkoutPayments.callbackEvents) {
    appState.checkoutPayments.callbackEvents = {};
  }
}

function isPaymentFinal(payment) {
  const method = normalizeMethod(payment?.method || METHOD_MBWAY);
  const normalized = normalizeInternalStatus({ method, status: payment?.status, message: payment?.message });
  return ['paid', 'failed', 'cancelled', 'expired'].includes(normalized);
}

function normalizeInternalStatus({ method, status, message }) {
  const m = normalizeMethod(method || METHOD_MBWAY);
  const statusText = String(status ?? '').trim().toLowerCase();
  const messageText = String(message ?? '').trim().toLowerCase();
  const text = `${statusText} ${messageText}`;

  if (text.includes('cancel')) return 'cancelled';
  if (text.includes('expir')) return 'expired';
  if (text.includes('fail') || text.includes('error')) return 'failed';

  if (m === 'mbway') {
    if (messageText === 'success' || statusText === '000') return 'paid';
    if (messageText === 'pending') return 'pending';
  } else if (m === 'multibanco') {
    if (messageText === 'success' || statusText === '0') return 'pending';
  } else {
    if (messageText === 'success' || statusText === '0' || statusText === 'paid') return 'paid';
  }

  if (statusText === 'paid' || messageText === 'paid') return 'paid';
  return 'pending';
}

function getActivePaymentByTable(tableId) {
  ensureCheckoutState();
  const requestId = appState.checkoutPayments.activeByTable[tableId];
  if (!requestId) return null;
  const payment = appState.checkoutPayments.records[requestId];
  if (!payment) return null;
  if (isPaymentFinal(payment)) return null;
  return payment;
}

function getCheckoutMethodConfig(method) {
  const config = appState.checkoutConfig || {};
  const methods = config.methods || {};
  return methods[method] || {};
}

function ensureCheckoutMethodEnabled(method) {
  const globalEnabled = appState.checkoutConfig?.enabled;
  if (globalEnabled === false) {
    const error = new Error('CHECKOUT_DISABLED');
    error.httpStatus = 403;
    throw error;
  }
  const methodConfig = getCheckoutMethodConfig(method);
  if (methodConfig && Object.prototype.hasOwnProperty.call(methodConfig, 'enabled') && methodConfig.enabled === false) {
    const error = new Error('CHECKOUT_METHOD_DISABLED');
    error.httpStatus = 403;
    throw error;
  }
}

function getPublicCheckoutConfigData() {
  const config = appState.checkoutConfig || {};
  const methods = config.methods || {};
  const publicMethods = {};
  for (const [name, value] of Object.entries(methods)) {
    publicMethods[name] = {
      enabled: value?.enabled !== false
    };
  }
  return {
    enabled: config.enabled !== false,
    methods: publicMethods
  };
}

function buildBillSnapshot(tableId) {
  const tableResult = tableService.getTableById(tableId);
  if (!tableResult || !tableResult.success || !tableResult.data) {
    throw new Error('TABLE_NOT_FOUND');
  }

  const orderItems = Array.isArray(tableResult.data.order) ? tableResult.data.order : [];
  const priceResult = appState.getTableTotalAmount(tableId);
  return {
    tableId,
    tableStatus: tableResult.data.status,
    peopleType: tableResult.data.peopleType,
    orderItems,
    price: priceResult
  };
}

function parseCheckoutAmount({ amount, tableId }) {
  if (amount !== undefined && amount !== null && amount !== '') {
    return amount;
  }

  if (!tableId) {
    throw new Error('AMOUNT_OR_TABLE_REQUIRED');
  }

  const tableResult = tableService.getTableById(tableId);
  if (!tableResult || !tableResult.success || !tableResult.data) {
    throw new Error('TABLE_NOT_FOUND');
  }

  const orders = Array.isArray(tableResult.data.order) ? tableResult.data.order : [];
  const total = orders.reduce((sum, item) => {
    const price = Number(item.price) || 0;
    const quantity = Number(item.quantity) || 0;
    return sum + price * quantity;
  }, 0);

  if (total <= 0) {
    throw new Error('INVALID_AMOUNT');
  }

  return total;
}

function extractProviderRequestId(response = {}) {
  const candidates = [
    response.RequestId,
    response.requestId,
    response.request_id,
    response.TransactionId,
    response.transactionId,
    response.transaction_id,
    response.Id,
    response.id
  ];
  for (const value of candidates) {
    const v = String(value || '').trim();
    if (v) return v;
  }
  return '';
}

async function persistPaymentUpdate(updated) {
  appState.checkoutPayments.records[updated.requestId] = updated;
  if (isPaymentFinal(updated) && updated.tableId && appState.checkoutPayments.activeByTable[updated.tableId] === updated.requestId) {
    delete appState.checkoutPayments.activeByTable[updated.tableId];
  }
  db.saveAppStateData(appState);
  await checkoutRepository.savePayment({ id: updated.requestId, ...updated });

  if (updated.billId && ['paid', 'failed', 'cancelled', 'expired'].includes(updated.internalStatus)) {
    await checkoutRepository.updateBillStatus(updated.billId, {
      status: updated.internalStatus,
      paymentStatus: updated.status || null,
      paymentMessage: updated.message || null,
      paidAt: updated.internalStatus === 'paid' ? (updated.providerUpdatedAt || updated.updatedAt) : null,
      updatedAt: new Date().toISOString()
    });
  }
}

async function createCheckout(req, res) {
  try {
    const tableId = normalizeTableId(req.body?.tableId);
    const method = normalizeMethod(req.body?.method || METHOD_MBWAY);
    ensureCheckoutMethodEnabled(method);
    const activePayment = getActivePaymentByTable(tableId);
    if (activePayment) {
      return res.status(200).json({
        success: true,
        data: {
          hasActivePayment: true,
          payment: activePayment
        }
      });
    }

    const amount = parseCheckoutAmount(req.body || {});
    const bill = buildBillSnapshot(tableId);
    const configuredPaymentData = getCheckoutMethodConfig(method);
    const requestPaymentData = req.body?.paymentData || (req.body?.mobileNumber ? { mobileNumber: req.body.mobileNumber } : {});
    const mergedPaymentData = { ...configuredPaymentData, ...requestPaymentData };
    const result = await createIfthenpayCheckout({
      method,
      amount,
      orderId: req.body?.orderId,
      description: req.body?.description,
      email: req.body?.email,
      paymentData: mergedPaymentData
    });

    const requestId = extractProviderRequestId(result?.response);
    if (!requestId) {
      const err = new Error('PROVIDER_REQUEST_ID_MISSING');
      err.httpStatus = 502;
      err.details = result?.response || null;
      throw err;
    }

    const now = new Date().toISOString();
    ensureCheckoutState();
    const paymentRecord = {
      id: requestId,
      requestId,
      method,
      tableId,
      orderId: result.request.orderId,
      amount: result.request.amount,
      mobileNumber: result.request.mobileNumber || null,
        mbWayKey: method === 'mbway' ? (result.request.mbWayKey || mergedPaymentData.mbWayKey || null) : null,
      entity: result.response?.Entity || null,
      reference: result.response?.Reference || null,
      expiryDate: result.response?.ExpiryDate || null,
      paymentUrl: result.response?.PaymentUrl || result.response?.paymentUrl || null,
      pin: result.response?.Pin || result.response?.PIN || null,
      status: result.response?.Status || null,
      message: result.response?.Message || null,
      internalStatus: normalizeInternalStatus({
        method,
        status: result.response?.Status,
        message: result.response?.Message
      }),
      createdAt: now,
      updatedAt: now,
      billId: `${tableId}-${requestId}`
    };
    appState.checkoutPayments.records[requestId] = paymentRecord;
    appState.checkoutPayments.activeByTable[tableId] = requestId;
    appState.checkoutPayments.latestByTable[tableId] = requestId;
    db.saveAppStateData(appState);

    await checkoutRepository.savePayment(paymentRecord);
    await checkoutRepository.saveBill({
      id: paymentRecord.billId,
      requestId,
      tableId,
      amount: paymentRecord.amount,
      orderId: paymentRecord.orderId,
      createdAt: now,
      snapshot: bill
    });

    return res.status(200).json({
      success: true,
      data: {
        hasActivePayment: false,
        ...result
      }
    });
  } catch (error) {
    const status = error.httpStatus && Number.isInteger(error.httpStatus) ? error.httpStatus : 400;
    return res.status(status).json({
      success: false,
      error: error.message,
      details: error.details || null
    });
  }
}

async function getCheckoutStatus(req, res) {
  try {
    ensureCheckoutState();
    const methodQuery = req.query?.method ? normalizeMethod(req.query.method) : undefined;
    const tableIdQuery = String(req.query?.tableId || '').replace('#', '').trim();
    const requestIdRaw = String(req.query?.requestId || '').trim();
    const requestId = requestIdRaw || appState.checkoutPayments.latestByTable[tableIdQuery];
    if (!requestId) {
      return res.status(404).json({
        success: false,
        error: 'PAYMENT_NOT_FOUND'
      });
    }
    const existing = appState.checkoutPayments.records[requestId] || { requestId };
    const method = methodQuery || normalizeMethod(existing.method || METHOD_MBWAY);
    let result;
    try {
      result = await checkIfthenpayCheckoutStatus({
        method,
        requestId,
        paymentData: {
          mbWayKey: existing.mbWayKey || null
        }
      });
    } catch (providerError) {
      if (providerError.message === 'STATUS_BY_REQUEST_NOT_SUPPORTED') {
        return res.status(200).json({
          success: true,
          data: {
            RequestId: existing.requestId || requestId,
            Status: existing.status || null,
            Message: existing.message || 'Pending',
            Entity: existing.entity || null,
            Reference: existing.reference || null,
            ExpiryDate: existing.expiryDate || null,
            Source: 'local_record'
          }
        });
      }
      throw providerError;
    }

    if (requestId) {
      const updated = {
        ...existing,
        method,
        status: result?.Status || existing.status || null,
        message: result?.Message || existing.message || null,
        internalStatus: normalizeInternalStatus({
          method,
          status: result?.Status || existing.status,
          message: result?.Message || existing.message
        }),
        providerCreatedAt: result?.CreatedAt || existing.providerCreatedAt || null,
        providerUpdatedAt: result?.UpdateAt || existing.providerUpdatedAt || null,
        updatedAt: new Date().toISOString()
      };
      await persistPaymentUpdate(updated);
    }

    return res.status(200).json({
      success: true,
      data: result
    });
  } catch (error) {
    const status = error.httpStatus && Number.isInteger(error.httpStatus) ? error.httpStatus : 400;
    return res.status(status).json({
      success: false,
      error: error.message,
      details: error.details || null
    });
  }
}

function getCheckoutByTable(req, res) {
  try {
    ensureCheckoutState();
    const tableId = normalizeTableId(req.query?.tableId);
    const requestId = appState.checkoutPayments.latestByTable[tableId];
    if (!requestId) {
      return res.status(404).json({
        success: false,
        error: 'PAYMENT_NOT_FOUND'
      });
    }

    const payment = appState.checkoutPayments.records[requestId];
    if (!payment) {
      return res.status(404).json({
        success: false,
        error: 'PAYMENT_NOT_FOUND'
      });
    }

    return res.status(200).json({
      success: true,
      data: payment
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
}

async function getActiveCheckoutByTable(req, res) {
  try {
    const tableId = normalizeTableId(req.query?.tableId);
    const activePayment = getActivePaymentByTable(tableId);
    return res.status(200).json({
      success: true,
      data: {
        hasActivePayment: Boolean(activePayment),
        payment: activePayment || null
      }
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.message
    });
  }
}

async function cancelActiveCheckoutByTable(req, res) {
  try {
    ensureCheckoutState();
    const tableId = normalizeTableId(req.body?.tableId || req.query?.tableId);
    const reason = String(req.body?.reason || 'CANCELLED_BY_USER');
    const active = getActivePaymentByTable(tableId);
    if (!active) {
      return res.status(404).json({
        success: false,
        error: 'NO_ACTIVE_PAYMENT'
      });
    }

    const updated = {
      ...active,
      message: 'Cancelled',
      internalStatus: 'cancelled',
      cancelReason: reason,
      cancelledAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    await persistPaymentUpdate(updated);

    return res.status(200).json({
      success: true,
      data: updated
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: error.message
    });
  }
}

function buildCallbackEventKey(payload) {
  const requestId = payload.requestId || payload.RequestId || payload.request_id || '';
  const orderId = payload.orderId || payload.OrderId || payload.id || '';
  const status = payload.status || payload.Status || '';
  const message = payload.message || payload.Message || '';
  const amount = payload.amount || payload.Amount || '';
  return `${requestId}|${orderId}|${status}|${message}|${amount}`;
}

function resolveCallbackPayment(payload) {
  const requestId = String(
    payload.requestId || payload.RequestId || payload.request_id || payload.transactionId || payload.transaction_id || ''
  ).trim();
  if (requestId && appState.checkoutPayments.records[requestId]) {
    return appState.checkoutPayments.records[requestId];
  }

  const orderId = String(payload.orderId || payload.OrderId || payload.id || '').trim();
  if (!orderId) return null;

  const records = Object.values(appState.checkoutPayments.records || {});
  const match = records
    .filter((it) => String(it.orderId || '').trim() === orderId)
    .sort((a, b) => String(b.createdAt || '').localeCompare(String(a.createdAt || '')))[0];
  return match || null;
}

function verifyCallbackAuth(req) {
  const configuredToken = String(appState.checkoutConfig?.callbackToken || '').trim();
  if (!configuredToken) return false;
  const incoming = String(
    req.headers['x-ifthenpay-token'] ||
    req.headers['x-callback-token'] ||
    req.query?.token ||
    req.body?.token ||
    ''
  );
  return incoming === configuredToken;
}

async function checkoutCallback(req, res) {
  try {
    ensureCheckoutState();
    if (!verifyCallbackAuth(req)) {
      return res.status(401).json({ success: false, error: 'INVALID_CALLBACK_TOKEN' });
    }

    const payload = { ...(req.query || {}), ...(req.body || {}) };
    const eventKey = buildCallbackEventKey(payload);
    if (!eventKey || eventKey === '||||') {
      return res.status(400).json({ success: false, error: 'INVALID_CALLBACK_PAYLOAD' });
    }

    if (appState.checkoutPayments.callbackEvents[eventKey]) {
      return res.status(200).json({ success: true, data: 'duplicate_ignored' });
    }

    const payment = resolveCallbackPayment(payload);
    if (!payment) {
      appState.checkoutPayments.callbackEvents[eventKey] = { at: new Date().toISOString(), status: 'orphan' };
      db.saveAppStateData(appState);
      await checkoutRepository.saveCallbackEvent({
        id: eventKey,
        payload,
        status: 'orphan',
        createdAt: new Date().toISOString()
      });
      return res.status(202).json({ success: true, data: 'orphan_callback_received' });
    }

    const status = payload.status || payload.Status || payment.status || null;
    const message = payload.message || payload.Message || payment.message || null;
    const updated = {
      ...payment,
      status,
      message,
      internalStatus: normalizeInternalStatus({ method: payment.method, status, message }),
      callbackPayload: payload,
      providerUpdatedAt: payload.UpdateAt || payload.updatedAt || payment.providerUpdatedAt || null,
      updatedAt: new Date().toISOString()
    };
    await persistPaymentUpdate(updated);

    appState.checkoutPayments.callbackEvents[eventKey] = {
      at: new Date().toISOString(),
      requestId: payment.requestId,
      internalStatus: updated.internalStatus
    };
    db.saveAppStateData(appState);
    await checkoutRepository.saveCallbackEvent({
      id: eventKey,
      requestId: payment.requestId,
      payload,
      internalStatus: updated.internalStatus,
      createdAt: new Date().toISOString()
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    logger.error(`[Checkout Callback] failed: ${error.message}`);
    return res.status(500).json({ success: false, error: error.message });
  }
}

async function reconcilePendingPayments() {
  ensureCheckoutState();
  const records = Object.values(appState.checkoutPayments.records || {});
  const pending = records.filter((it) => normalizeInternalStatus({
    method: it.method,
    status: it.status,
    message: it.message
  }) === 'pending');
  if (pending.length === 0) return { success: true, checked: 0, updated: 0 };

  let updatedCount = 0;
  for (const item of pending) {
    try {
      const method = normalizeMethod(item.method || METHOD_MBWAY);
      const result = await checkIfthenpayCheckoutStatus({
        method,
        requestId: item.requestId,
        paymentData: {
          mbWayKey: item.mbWayKey || null
        }
      });
      const updated = {
        ...item,
        status: result?.Status || item.status,
        message: result?.Message || item.message,
        internalStatus: normalizeInternalStatus({
          method,
          status: result?.Status || item.status,
          message: result?.Message || item.message
        }),
        providerCreatedAt: result?.CreatedAt || item.providerCreatedAt || null,
        providerUpdatedAt: result?.UpdateAt || item.providerUpdatedAt || null,
        updatedAt: new Date().toISOString()
      };
      if (
        updated.status !== item.status ||
        updated.message !== item.message ||
        updated.internalStatus !== item.internalStatus
      ) {
        await persistPaymentUpdate(updated);
        updatedCount += 1;
      }
    } catch (error) {
      if (error.message !== 'STATUS_BY_REQUEST_NOT_SUPPORTED') {
        logger.warn(`[Checkout Reconcile] ${item.requestId} failed: ${error.message}`);
      }
    }
  }

  return { success: true, checked: pending.length, updated: updatedCount };
}

function getPublicCheckoutConfig(req, res) {
  try {
    return res.status(200).json({
      success: true,
      data: getPublicCheckoutConfigData()
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: error.message
    });
  }
}

module.exports = {
  // 通用结账接口
  createCheckout,
  getCheckoutStatus,
  getCheckoutByTable,
  getActiveCheckoutByTable,
  cancelActiveCheckoutByTable,
  checkoutCallback,
  reconcilePendingPayments,
  getPublicCheckoutConfig,
  getPublicCheckoutConfigData
};
