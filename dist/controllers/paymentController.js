const {
  METHOD_MBWAY,
  METHOD_CREDITCARD,
  normalizeMethod,
  createIfthenpayCheckout,
  checkIfthenpayCheckoutStatus
} = require('../services/ifthenpayCheckoutService.js');
const { verifyCreditCardRedirectPayload } = require('../services/creditCardService.js');
const tableService = require('../services/tableService.js');
const db = require('../filedb.js');
const { appState } = require('../state.js');
const CheckoutRepository = require('../repositories/checkoutRepository.js');
const { logger } = require('../utils/logger.js');
const { TableStatus } = require('../model/TableStatus.js');

const checkoutRepository = new CheckoutRepository();

function normalizeTableId(tableId) {
  const id = String(tableId || '').replace('#', '').trim();
  if (!id) {
    throw new Error('TABLE_ID_REQUIRED');
  }
  return id;
}

function buildPaymentDataForStatusCheck(payment = {}) {
  return {
    mbWayKey: payment.mbWayKey || null,
    orderId: payment.orderId || null,
    reference: payment.reference || null,
    amount: payment.amount ?? payment.subTotalAmount ?? null,
    createdAt: payment.createdAt || null
  };
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
  // 优先用已存储的 internalStatus，避免用原始 status/message 重算把已完成的记录误判为 pending
  const stored = String(payment?.internalStatus || '').trim();
  if (stored) return ['paid', 'failed', 'cancelled', 'expired'].includes(stored);
  // 回退：首次创建还没写入 internalStatus 时才重算
  const method = normalizeMethod(payment?.method || METHOD_MBWAY);
  const normalized = normalizeInternalStatus({
    method,
    status: payment?.status,
    message: payment?.message,
    providerCreatedAt: payment?.providerCreatedAt,
    providerUpdatedAt: payment?.providerUpdatedAt
  });
  return ['paid', 'failed', 'cancelled', 'expired'].includes(normalized);
}

function normalizeInternalStatus({ method, status, message, providerCreatedAt, providerUpdatedAt }) {
  const m = normalizeMethod(method || METHOD_MBWAY);
  const statusText = String(status ?? '').trim().toLowerCase();
  const messageText = String(message ?? '').trim().toLowerCase();
  const text = `${statusText} ${messageText}`;

  if (text.includes('cancel')) return 'cancelled';
  if (text.includes('expir')) return 'expired';
  if (text.includes('fail') || text.includes('error')) return 'failed';

  if (m === 'mbway') {
    // MB WAY may return Status=000 for both pending and success; message decides.
    // Be conservative: only treat as paid when status check includes update signal.
    const hasUpdateSignal = Boolean(providerUpdatedAt) || (providerCreatedAt && providerUpdatedAt && providerCreatedAt !== providerUpdatedAt);
    if (messageText === 'success' && hasUpdateSignal) return 'paid';
    if (messageText === 'pending') return 'pending';
    if (messageText === 'success' && !hasUpdateSignal) return 'pending';
  }

  // For non-MB WAY methods, "Success" on create usually means request created, not paid.
  if (statusText === 'paid' || statusText === 'completed' || statusText === 'settled') return 'paid';
  if (messageText === 'paid' || messageText === 'completed') return 'paid';

  if (messageText === 'success') return 'pending';
  if (statusText === '0') return 'pending';
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

function getLatestPaidPaymentSnapshotForTable(tableId) {
  ensureCheckoutState();
  const rid = appState.checkoutPayments.latestByTable[tableId];
  if (rid) {
    const p = appState.checkoutPayments.records[rid];
    if (p && p.internalStatus === 'paid') return p;
  }
  let best = null;
  let bestTs = 0;
  for (const p of Object.values(appState.checkoutPayments.records || {})) {
    if (!p || p.tableId !== tableId || p.internalStatus !== 'paid') continue;
    const t = new Date(p.updatedAt || p.createdAt || 0).getTime();
    if (t >= bestTs) {
      bestTs = t;
      best = p;
    }
  }
  return best;
}

/** 桌子当前为「已支付」时，不应再创建新的结账请求 */
function getTableCheckoutPaidContext(tableId) {
  const tableResult = tableService.getTableById(tableId);
  if (!tableResult?.success || !tableResult.data) {
    return { alreadyPaid: false, tableStatus: null, paidPayment: null };
  }
  const parsed = TableStatus.fromString(String(tableResult.data.status || ''));
  const alreadyPaid = parsed === TableStatus.PAID;
  return {
    alreadyPaid,
    tableStatus: tableResult.data.status,
    paidPayment: alreadyPaid ? getLatestPaidPaymentSnapshotForTable(tableId) : null
  };
}

function getCheckoutMethodConfig(method) {
  const config = appState.checkoutConfig || {};
  const methods = config.methods || {};
  return methods[method] || {};
}

/** CCARD redirect URLs: supplied by client only (not from checkoutConfig merge). */
const CCARD_REDIRECT_URL_KEYS = ['successUrl', 'errorUrl', 'cancelUrl'];

function omitCreditcardRedirectUrls(cfg) {
  if (!cfg || typeof cfg !== 'object') return {};
  const copy = { ...cfg };
  for (const k of CCARD_REDIRECT_URL_KEYS) delete copy[k];
  return copy;
}

function getOrderIdMaxLenByMethod(method) {
  const m = normalizeMethod(method);
  if (m === 'multibanco') return 25;
  return 15; // mbway/creditcard compatible default
}

function makeOrderIdPrefix() {
  const envPrefix = String(process.env.CHECKOUT_ORDER_PREFIX || '').trim();
  if (envPrefix) {
    const localCompact = envPrefix.toUpperCase().replace(/[^A-Z0-9]/g, '');
    if (localCompact) return localCompact;
  }

  let rawName = 'SHOP';
  try {
    const centerSocket = require('../socket/centerSocket.js');
    const fromCenter = centerSocket.getOrderPrefix?.();
    if (fromCenter) return fromCenter;
    rawName = String(centerSocket.getRestaurant?.() || rawName);
  } catch (_) {
    rawName = 'SHOP';
  }
  const name = rawName.trim().toUpperCase();
  const compact = name.replace(/[^A-Z0-9]/g, '');
  return compact || 'SHOP';
}

async function buildNextCheckoutOrderId(method) {
  ensureCheckoutState();
  const restaurantId = makeOrderIdPrefix();
  const seqNum = await checkoutRepository.getNextOrderSeq(restaurantId);
  const seq = String(seqNum).padStart(6, '0');
  const maxLen = getOrderIdMaxLenByMethod(method);
  const prefixMax = Math.max(1, maxLen - seq.length);
  const prefix = restaurantId.slice(0, prefixMax);
  return `${prefix}${seq}`;
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
    discountRate: Number(tableResult.data.discountRate || 0),
    discountFixed: Number(tableResult.data.discountFixed || 0),
    peopleType: tableResult.data.peopleType,
    orderItems,
    price: priceResult
  };
}

function parseCheckoutAmount({ amount, tableId }, billSnapshot) {
  if (amount !== undefined && amount !== null && amount !== '') {
    return amount;
  }

  const billAmount = Number(billSnapshot?.price?.totalAmount);
  if (Number.isFinite(billAmount) && billAmount > 0) {
    return billAmount;
  }

  if (!tableId) {
    throw new Error('AMOUNT_OR_TABLE_REQUIRED');
  }

  const tableResult = tableService.getTableById(tableId);
  if (!tableResult || !tableResult.success || !tableResult.data) {
    throw new Error('TABLE_NOT_FOUND');
  }

  const tablePrice = appState.getTableTotalAmount(tableId);
  const total = Number(tablePrice?.totalAmount || 0);

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

  // Auto-mark table as paid after successful checkout.
  if (updated.internalStatus === 'paid' && updated.tableId) {
    const table = appState.getTableById(updated.tableId);
    if (table && table.status?.value !== TableStatus.PAID.value) {
      table.status = TableStatus.PAID;
      table.msg_pay = false;
      if (appState.socket_io) {
        appState.socket_io.emit('send_tables', appState.tables.toJSON());
        appState.socket_io.emit(`client_table${updated.tableId}`, table.toJSON());
      }
    }
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

async function refreshPaymentStatusIfPossible(payment) {
  if (!payment) return payment;
  const method = normalizeMethod(payment.method || METHOD_MBWAY);
  try {
    const result = await checkIfthenpayCheckoutStatus({
      method,
      requestId: payment.requestId,
      paymentData: buildPaymentDataForStatusCheck(payment)
    });
    const updated = {
      ...payment,
      status: result?.Status || payment.status || null,
      message: result?.Message || payment.message || null,
      internalStatus: normalizeInternalStatus({
        method,
        status: result?.Status || payment.status,
        providerCreatedAt: result?.CreatedAt || payment.providerCreatedAt || null,
        providerUpdatedAt: result?.UpdateAt || payment.providerUpdatedAt || null,
        message: result?.Message || payment.message
      }),
      providerCreatedAt: result?.CreatedAt || payment.providerCreatedAt || null,
      providerUpdatedAt: result?.UpdateAt || payment.providerUpdatedAt || null,
      updatedAt: new Date().toISOString()
    };
    if (
      updated.status !== payment.status ||
      updated.message !== payment.message ||
      updated.internalStatus !== payment.internalStatus
    ) {
      await persistPaymentUpdate(updated);
    }
    return updated;
  } catch (error) {
    // Some methods don't support status check by requestId.
    if (error.message !== 'STATUS_BY_REQUEST_NOT_SUPPORTED') {
      logger.warn(`[Checkout Active Refresh] ${payment.requestId} failed: ${error.message}`);
    }
    return payment;
  }
}

async function createCheckout(req, res) {
  try {
    const tableId = normalizeTableId(req.body?.tableId);
    const paidCtx = getTableCheckoutPaidContext(tableId);
    if (paidCtx.alreadyPaid) {
      return res.status(200).json({
        success: true,
        data: {
          alreadyPaid: true,
          hasActivePayment: false,
          tableStatus: paidCtx.tableStatus,
          payment: paidCtx.paidPayment
        }
      });
    }

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

    const bill = buildBillSnapshot(tableId);
    const amount = parseCheckoutAmount(req.body || {}, bill);
    const configuredPaymentData = getCheckoutMethodConfig(method);
    const requestPaymentData =
      typeof req.body?.paymentData === 'object' && req.body.paymentData ? { ...req.body.paymentData } : {};
    if (req.body?.mobileNumber != null && String(req.body.mobileNumber).trim() !== '') {
      requestPaymentData.mobileNumber = String(req.body.mobileNumber).trim();
    }
    const rawNif = req.body?.nif ?? requestPaymentData.nif ?? requestPaymentData.NIF ?? requestPaymentData.Nif;
    if (rawNif != null && String(rawNif).trim() !== '') {
      requestPaymentData.nif = String(rawNif).trim();
    }
    const rawCustomerName =
      req.body?.customerName ??
      req.body?.name ??
      requestPaymentData.customerName ??
      requestPaymentData.payerName ??
      requestPaymentData.name;
    if (rawCustomerName != null && String(rawCustomerName).trim() !== '') {
      requestPaymentData.customerName = String(rawCustomerName).trim();
    }

    let configuredForMerge = configuredPaymentData;
    if (normalizeMethod(method) === METHOD_CREDITCARD) {
      configuredForMerge = omitCreditcardRedirectUrls(configuredPaymentData);
      for (const k of CCARD_REDIRECT_URL_KEYS) {
        if (String(requestPaymentData[k] || '').trim()) continue;
        const raw = req.body?.[k];
        if (raw != null && String(raw).trim() !== '') {
          requestPaymentData[k] = String(raw).trim();
        }
      }
    }
    const mergedPaymentData = { ...configuredForMerge, ...requestPaymentData };

    if (normalizeMethod(method) === METHOD_CREDITCARD) {
      const incomplete = CCARD_REDIRECT_URL_KEYS.some((k) => !String(mergedPaymentData[k] || '').trim());
      if (incomplete) {
        const err = new Error('CLIENT_CCARD_REDIRECT_URLS_REQUIRED');
        err.httpStatus = 400;
        throw err;
      }
    }

    const orderId = req.body?.orderId ? String(req.body.orderId) : await buildNextCheckoutOrderId(method);
    const result = await createIfthenpayCheckout({
      method,
      amount,
      orderId,
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
    const nifForRecord =
      mergedPaymentData.nif != null && String(mergedPaymentData.nif).trim() !== ''
        ? String(mergedPaymentData.nif).trim()
        : null;
    const mobileForRecord =
      mergedPaymentData.mobileNumber != null && String(mergedPaymentData.mobileNumber).trim() !== ''
        ? String(mergedPaymentData.mobileNumber).trim()
        : result.request.mobileNumber || null;
    const customerNameForRecord =
      mergedPaymentData.customerName != null && String(mergedPaymentData.customerName).trim() !== ''
        ? String(mergedPaymentData.customerName).trim()
        : null;

    const paymentRecord = {
      id: requestId,
      requestId,
      method,
      tableId,
      orderId: result.request.orderId,
      amount: result.request.amount,
      subTotalAmount: Number(bill?.price?.subTotalAmount || result.request.amount || 0),
      discountRate: Number(bill?.price?.discountRate || 0),
      discountFixed: Number(bill?.price?.discountFixed || 0),
      percentDiscountAmount: Number(bill?.price?.percentDiscountAmount || 0),
      fixedDiscountAmount: Number(bill?.price?.fixedDiscountAmount || 0),
      discountAmount: Number(bill?.price?.discountAmount || 0),
      savedAmount: Number(bill?.price?.savedAmount || 0),
      mobileNumber: mobileForRecord,
      nif: nifForRecord,
      customerName: customerNameForRecord,
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
        message: result.response?.Message,
        providerCreatedAt: null,
        providerUpdatedAt: null
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
      subTotalAmount: paymentRecord.subTotalAmount,
      discountRate: paymentRecord.discountRate,
      discountFixed: paymentRecord.discountFixed,
      percentDiscountAmount: paymentRecord.percentDiscountAmount,
      fixedDiscountAmount: paymentRecord.fixedDiscountAmount,
      discountAmount: paymentRecord.discountAmount,
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
    const pollingHint = {
      nextPollMs: 2500,
      slowModeAfterMs: 30000,
      slowModePollMs: 5000,
      maxWaitMs: 300000
    };
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
        paymentData: buildPaymentDataForStatusCheck(existing)
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
            Source: 'local_record',
            pollingHint
          },
          pollingHint
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
          message: result?.Message || existing.message,
          providerCreatedAt: result?.CreatedAt || existing.providerCreatedAt || null,
          providerUpdatedAt: result?.UpdateAt || existing.providerUpdatedAt || null
        }),
        providerCreatedAt: result?.CreatedAt || existing.providerCreatedAt || null,
        providerUpdatedAt: result?.UpdateAt || existing.providerUpdatedAt || null,
        updatedAt: new Date().toISOString()
      };
      await persistPaymentUpdate(updated);
    }

    return res.status(200).json({
      success: true,
      data: {
        ...result,
        pollingHint
      },
      pollingHint
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
    const paidCtx = getTableCheckoutPaidContext(tableId);
    const activePaymentRaw = getActivePaymentByTable(tableId);
    const activePayment = await refreshPaymentStatusIfPossible(activePaymentRaw);
    const stillActive = activePayment && !isPaymentFinal(activePayment);
    return res.status(200).json({
      success: true,
      data: {
        hasActivePayment: Boolean(stillActive),
        payment: stillActive ? activePayment : null,
        alreadyPaid: paidCtx.alreadyPaid,
        tableStatus: paidCtx.tableStatus,
        paidPayment: paidCtx.paidPayment
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

function sameCheckoutAmount(left, right) {
  const x = Number.parseFloat(String(left ?? '').replace(',', '.'));
  const y = Number.parseFloat(String(right ?? '').replace(',', '.'));
  if (!Number.isFinite(x) || !Number.isFinite(y)) return false;
  return x.toFixed(2) === y.toFixed(2);
}

/**
 * Browser successUrl redirect — verify `sk` and mark paid (ifthenpay CCARD).
 */
async function creditCardCheckoutReturn(req, res) {
  try {
    ensureCheckoutState();
    const merged = { ...(req.query || {}), ...(req.body || {}) };
    const orderId = String(merged.id ?? merged.Id ?? '').trim();
    const amountStr = String(merged.amount ?? merged.Amount ?? '').trim();
    const requestId = String(
      merged.requestId ?? merged.RequestId ?? merged.request_id ?? merged.request_Id ?? ''
    ).trim();
    const sk = String(merged.sk ?? merged.Sk ?? '').trim();

    const methodCfg = getCheckoutMethodConfig(METHOD_CREDITCARD);
    const ccardKey = methodCfg.ccardKey || process.env.IFTHENPAY_CCARD_KEY;
    if (
      !ccardKey ||
      !verifyCreditCardRedirectPayload({
        orderId,
        amount: amountStr,
        requestId,
        sk,
        ccardKey
      })
    ) {
      return res.status(403).json({ success: false, error: 'INVALID_CCARD_SIGNATURE' });
    }

    let payment = null;
    if (requestId && appState.checkoutPayments.records[requestId]) {
      payment = appState.checkoutPayments.records[requestId];
    }
    if (!payment) {
      payment = resolveCallbackPayment({ orderId, OrderId: orderId });
    }

    if (!payment || normalizeMethod(payment.method) !== METHOD_CREDITCARD) {
      return res.status(404).json({ success: false, error: 'PAYMENT_NOT_FOUND' });
    }
    if (String(payment.requestId || '').trim() !== requestId) {
      return res.status(400).json({ success: false, error: 'REQUEST_ID_MISMATCH' });
    }
    if (String(payment.orderId || '').trim() !== orderId) {
      return res.status(400).json({ success: false, error: 'ORDER_ID_MISMATCH' });
    }
    if (!sameCheckoutAmount(payment.amount, amountStr)) {
      return res.status(400).json({ success: false, error: 'AMOUNT_MISMATCH' });
    }

    if (payment.internalStatus === 'paid') {
      return res.status(200).json({
        success: true,
        data: { payment: paymentToView(payment), alreadyMarkedPaid: true }
      });
    }

    const updated = {
      ...payment,
      status: merged.Status ?? 'Paid',
      message: merged.Message ?? 'Success',
      internalStatus: 'paid',
      providerUpdatedAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    };
    await persistPaymentUpdate(updated);

    return res.status(200).json({
      success: true,
      data: { payment: paymentToView(updated), alreadyMarkedPaid: false }
    });
  } catch (error) {
    const status = error.httpStatus && Number.isInteger(error.httpStatus) ? error.httpStatus : 500;
    return res.status(status).json({ success: false, error: error.message });
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
      internalStatus: normalizeInternalStatus({
        method: payment.method,
        status,
        message,
        providerCreatedAt: payment.providerCreatedAt || null,
        providerUpdatedAt: payload.UpdateAt || payload.updatedAt || payment.providerUpdatedAt || null
      }),
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

async function manualReconcilePayments(req, res) {
  try {
    const result = await reconcilePendingPayments();
    return res.status(200).json({ success: true, data: result });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}

async function refreshPaymentById(req, res) {
  try {
    ensureCheckoutState();
    const requestId = String(req.params?.requestId || '').trim();
    if (!requestId) return res.status(400).json({ success: false, error: 'REQUEST_ID_REQUIRED' });

    const payment = appState.checkoutPayments.records[requestId]
      || (await checkoutRepository.getPayment(requestId));
    if (!payment) return res.status(404).json({ success: false, error: 'PAYMENT_NOT_FOUND' });

    // 如果内存中没有，先同步进来，确保 persistPaymentUpdate 能正确处理
    if (!appState.checkoutPayments.records[requestId]) {
      appState.checkoutPayments.records[requestId] = payment;
    }

    const updated = await refreshPaymentStatusIfPossible(payment);
    return res.status(200).json({ success: true, data: paymentToView(updated) });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}

// MBWay 约 4 分钟后过期；超过此阈值的 pending 记录直接标为 expired，不再调外部 API
const MBWAY_AUTO_EXPIRE_MS = 10 * 60 * 1000;
// 并发检查外部 API 的最大并发数
const RECONCILE_CONCURRENCY = 5;

async function reconcilePendingPayments() {
  ensureCheckoutState();

  // 合并内存和数据库，以数据库为准，避免遗漏内存中没有的记录
  const dbRecords = await checkoutRepository.getAllPayments();
  for (const dbItem of (dbRecords || [])) {
    if (dbItem && dbItem.requestId && !appState.checkoutPayments.records[dbItem.requestId]) {
      appState.checkoutPayments.records[dbItem.requestId] = dbItem;
    }
  }

  const records = Object.values(appState.checkoutPayments.records || {});

  // 直接用已存储的 internalStatus，避免把已 paid 的记录重新算成 pending
  const pending = records.filter((it) => String(it.internalStatus || '').trim() === 'pending');
  if (pending.length === 0) return { success: true, checked: 0, updated: 0, autoExpired: 0 };

  // 第一步：把超时的 MBWay 直接标为 expired，不调 API
  const now = Date.now();
  let autoExpiredCount = 0;
  const toCheck = [];

  for (const item of pending) {
    const method = normalizeMethod(item.method || METHOD_MBWAY);
    if (method === METHOD_MBWAY) {
      const createdMs = new Date(item.createdAt || 0).getTime();
      if (now - createdMs > MBWAY_AUTO_EXPIRE_MS) {
        const expired = {
          ...item,
          internalStatus: 'expired',
          message: 'Expired',
          updatedAt: new Date().toISOString()
        };
        await persistPaymentUpdate(expired);
        autoExpiredCount += 1;
        continue;
      }
    }
    toCheck.push(item);
  }

  if (toCheck.length === 0) {
    return { success: true, checked: pending.length, updated: 0, autoExpired: autoExpiredCount };
  }

  // 第二步：剩余记录并发调 API（最多 RECONCILE_CONCURRENCY 个同时进行）
  let updatedCount = 0;
  let idx = 0;

  async function checkOne(item) {
    const method = normalizeMethod(item.method || METHOD_MBWAY);
    try {
      const result = await checkIfthenpayCheckoutStatus({
        method,
        requestId: item.requestId,
        paymentData: buildPaymentDataForStatusCheck(item)
      });
      const updated = {
        ...item,
        status: result?.Status || item.status,
        message: result?.Message || item.message,
        internalStatus: normalizeInternalStatus({
          method,
          status: result?.Status || item.status,
          message: result?.Message || item.message,
          providerCreatedAt: result?.CreatedAt || item.providerCreatedAt || null,
          providerUpdatedAt: result?.UpdateAt || item.providerUpdatedAt || null
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
        return true;
      }
      return false;
    } catch (error) {
      if (error.message !== 'STATUS_BY_REQUEST_NOT_SUPPORTED') {
        logger.warn(`[Checkout Reconcile] ${item.requestId} failed: ${error.message}`);
      }
      return false;
    }
  }

  async function worker() {
    const results = [];
    while (true) {
      const i = idx++;
      if (i >= toCheck.length) break;
      results.push(await checkOne(toCheck[i]));
    }
    return results;
  }

  const workerCount = Math.min(RECONCILE_CONCURRENCY, toCheck.length);
  const allResults = await Promise.all(Array.from({ length: workerCount }, worker));
  updatedCount = allResults.flat().filter(Boolean).length;

  return { success: true, checked: pending.length, updated: updatedCount, autoExpired: autoExpiredCount };
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

function toTime(value) {
  const t = new Date(value).getTime();
  return Number.isFinite(t) ? t : null;
}

function inRange(ts, start, end) {
  if (start && ts < start) return false;
  if (end && ts > end) return false;
  return true;
}

function buildPeriodRange(period, date, startAt, endAt) {
  if (period === 'custom') {
    return { start: toTime(startAt), end: toTime(endAt) };
  }

  const base = date ? new Date(date) : new Date();
  if (!Number.isFinite(base.getTime())) {
    return { start: null, end: null };
  }

  const start = new Date(base);
  const end = new Date(base);

  if (period === 'day') {
    start.setHours(0, 0, 0, 0);
    end.setHours(23, 59, 59, 999);
    return { start: start.getTime(), end: end.getTime() };
  }

  if (period === 'week') {
    const day = start.getDay() || 7;
    start.setDate(start.getDate() - day + 1);
    start.setHours(0, 0, 0, 0);
    end.setTime(start.getTime());
    end.setDate(start.getDate() + 6);
    end.setHours(23, 59, 59, 999);
    return { start: start.getTime(), end: end.getTime() };
  }

  if (period === 'month') {
    start.setDate(1);
    start.setHours(0, 0, 0, 0);
    end.setMonth(start.getMonth() + 1, 0);
    end.setHours(23, 59, 59, 999);
    return { start: start.getTime(), end: end.getTime() };
  }

  return { start: null, end: null };
}

function paymentToView(item) {
  return {
    requestId: item.requestId,
    method: item.method,
    tableId: item.tableId,
    orderId: item.orderId,
    amount: Number(item.amount || 0),
    subTotalAmount: Number(item.subTotalAmount || item.amount || 0),
    discountRate: Number(item.discountRate || 0),
    discountFixed: Number(item.discountFixed || 0),
    percentDiscountAmount: Number(item.percentDiscountAmount || 0),
    fixedDiscountAmount: Number(item.fixedDiscountAmount || 0),
    discountAmount: Number(item.discountAmount || 0),
    savedAmount: Number(item.savedAmount || item.discountAmount || 0),
    mobileNumber: item.mobileNumber || null,
    nif: item.nif || null,
    customerName: item.customerName || null,
    internalStatus: item.internalStatus || 'pending',
    status: item.status || null,
    message: item.message || null,
    createdAt: item.createdAt || null,
    updatedAt: item.updatedAt || null,
    paymentUrl: item.paymentUrl || null,
    entity: item.entity || null,
    reference: item.reference || null,
    expiryDate: item.expiryDate || null
  };
}

async function listCheckoutPayments(req, res) {
  try {
    const {
      tableId,
      method,
      internalStatus,
      startAt,
      endAt,
      keyword,
      page = 1,
      pageSize = 20,
      sortBy = 'createdAt',
      sortOrder = 'desc'
    } = req.query || {};

    const start = toTime(startAt);
    const end = toTime(endAt);
    const p = Math.max(1, Number(page) || 1);
    const size = Math.min(200, Math.max(1, Number(pageSize) || 20));
    const kw = String(keyword || '').trim().toLowerCase();

    const all = await checkoutRepository.getAllPayments();
    const filtered = (all || []).filter((item) => {
      if (tableId && String(item.tableId || '') !== String(tableId)) return false;
      if (method && String(item.method || '').toLowerCase() !== String(method).toLowerCase()) return false;
      if (internalStatus && String(item.internalStatus || '').toLowerCase() !== String(internalStatus).toLowerCase()) return false;
      const ts = toTime(item.createdAt);
      if ((start || end) && (!ts || !inRange(ts, start, end))) return false;

      if (kw) {
        const hit = [
          item.requestId,
          item.orderId,
          item.tableId,
          item.method,
          item.internalStatus,
          item.message,
          item.mobileNumber,
          item.nif,
          item.customerName
        ].some((v) => String(v || '').toLowerCase().includes(kw));
        if (!hit) return false;
      }
      return true;
    });

    const order = String(sortOrder).toLowerCase() === 'asc' ? 1 : -1;
    filtered.sort((a, b) => {
      const av = a?.[sortBy];
      const bv = b?.[sortBy];
      if (sortBy.toLowerCase().includes('at')) {
        return (toTime(av) - toTime(bv)) * order;
      }
      if (typeof av === 'number' && typeof bv === 'number') return (av - bv) * order;
      return String(av || '').localeCompare(String(bv || '')) * order;
    });

    const total = filtered.length;
    const startIdx = (p - 1) * size;
    const items = filtered.slice(startIdx, startIdx + size).map(paymentToView);
    const paidAmount = filtered
      .filter((it) => it.internalStatus === 'paid')
      .reduce((sum, it) => sum + (Number(it.amount) || 0), 0);

    return res.status(200).json({
      success: true,
      data: {
        items,
        total,
        page: p,
        pageSize: size,
        summary: {
          paidCount: filtered.filter((it) => it.internalStatus === 'paid').length,
          pendingCount: filtered.filter((it) => it.internalStatus === 'pending').length,
          paidAmount: Number(paidAmount.toFixed(2))
        }
      }
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}

async function getCheckoutPaymentById(req, res) {
  try {
    const requestId = String(req.params?.requestId || '').trim();
    if (!requestId) return res.status(400).json({ success: false, error: 'REQUEST_ID_REQUIRED' });
    const payment = await checkoutRepository.getPayment(requestId);
    if (!payment) return res.status(404).json({ success: false, error: 'PAYMENT_NOT_FOUND' });
    return res.status(200).json({ success: true, data: paymentToView(payment) });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}

async function getCheckoutPaymentStats(req, res) {
  try {
    const { period = 'day', date, startAt, endAt } = req.query || {};
    const range = buildPeriodRange(String(period), date, startAt, endAt);
    const all = await checkoutRepository.getAllPayments();
    const filtered = (all || []).filter((item) => {
      const ts = toTime(item.createdAt);
      return ts && inRange(ts, range.start, range.end);
    });

    const byStatus = {};
    const byMethod = {};
    let paidAmount = 0;
    let totalAmount = 0;

    filtered.forEach((item) => {
      const st = item.internalStatus || 'pending';
      const mt = item.method || 'unknown';
      byStatus[st] = (byStatus[st] || 0) + 1;
      byMethod[mt] = (byMethod[mt] || 0) + 1;
      const amount = Number(item.amount || 0);
      totalAmount += amount;
      if (st === 'paid') paidAmount += amount;
    });

    return res.status(200).json({
      success: true,
      data: {
        period,
        range: {
          startAt: range.start ? new Date(range.start).toISOString() : null,
          endAt: range.end ? new Date(range.end).toISOString() : null
        },
        totalCount: filtered.length,
        totalAmount: Number(totalAmount.toFixed(2)),
        paidAmount: Number(paidAmount.toFixed(2)),
        byStatus,
        byMethod
      }
    });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}

async function runControllerAsSocket(controllerFn, payload = {}, callback) {
  try {
    let statusCode = 200;
    let jsonBody = null;
    const req = {
      body: payload.body || {},
      query: payload.query || {},
      params: payload.params || {},
      headers: payload.headers || {}
    };
    const res = {
      status: (code) => {
        statusCode = code;
        return res;
      },
      json: (body) => {
        jsonBody = body;
        return body;
      }
    };
    await controllerFn(req, res);
    callback && callback({ code: statusCode, ...(jsonBody || {}) });
  } catch (error) {
    callback && callback({ code: 500, success: false, error: error.message });
  }
}

async function handleCheckoutSocketEvent(action, payload, callback) {
  const mapping = {
    request: { fn: createCheckout, payload: { body: payload || {} } },
    status: { fn: getCheckoutStatus, payload: { query: payload || {} } },
    latest: { fn: getCheckoutByTable, payload: { query: payload || {} } },
    active: { fn: getActiveCheckoutByTable, payload: { query: payload || {} } },
    cancel: { fn: cancelActiveCheckoutByTable, payload: { body: payload || {} } }
  };
  const target = mapping[action];
  if (!target) {
    callback && callback({ code: 400, success: false, error: 'UNSUPPORTED_CHECKOUT_SOCKET_ACTION' });
    return;
  }
  await runControllerAsSocket(target.fn, target.payload, callback);
}

async function handleManagerCheckoutSocketEvent(action, payload, callback) {
  const mapping = {
    list: { fn: listCheckoutPayments, payload: { query: payload || {} } },
    stats: { fn: getCheckoutPaymentStats, payload: { query: payload || {} } },
    by_id: { fn: getCheckoutPaymentById, payload: { params: { requestId: payload } } },
    reconcile: { fn: manualReconcilePayments, payload: {} },
    refresh: { fn: refreshPaymentById, payload: { params: { requestId: payload } } }
  };
  const target = mapping[action];
  if (!target) {
    callback && callback({ code: 400, success: false, error: 'UNSUPPORTED_MANAGER_CHECKOUT_SOCKET_ACTION' });
    return;
  }
  await runControllerAsSocket(target.fn, target.payload, callback);
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
  getPublicCheckoutConfigData,
  listCheckoutPayments,
  getCheckoutPaymentById,
  getCheckoutPaymentStats,
  manualReconcilePayments,
  refreshPaymentById,
  handleCheckoutSocketEvent,
  handleManagerCheckoutSocketEvent,
  creditCardCheckoutReturn
};
