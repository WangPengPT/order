const DB = require('../db');

class CheckoutRepository {
  constructor(
    paymentTable = 'checkout_payments',
    billTable = 'checkout_bills',
    callbackEventTable = 'checkout_callback_events',
    counterTable = 'checkout_counters'
  ) {
    this.paymentTable = paymentTable;
    this.billTable = billTable;
    this.callbackEventTable = callbackEventTable;
    this.counterTable = counterTable;
  }

  async savePayment(payment, session = null) {
    await DB.set(this.paymentTable, payment, session);
  }

  async getPayment(requestId, session = null) {
    return await DB.get(this.paymentTable, requestId, null, session);
  }

  async getAllPayments(session = null) {
    return await DB.getAll(this.paymentTable, session);
  }

  async saveBill(bill, session = null) {
    await DB.set(this.billTable, bill, session);
  }

  async getBill(billId, session = null) {
    return await DB.get(this.billTable, billId, null, session);
  }

  async updateBillStatus(billId, statusData, session = null) {
    const existing = await this.getBill(billId, session);
    if (!existing) return null;
    const updated = { ...existing, ...statusData, id: billId };
    await DB.set(this.billTable, updated, session);
    return updated;
  }

  async saveCallbackEvent(event, session = null) {
    await DB.set(this.callbackEventTable, event, session);
  }

  async getNextOrderSeq(counterId = 'default', session = null) {
    const id = `order_seq:${counterId}`;
    const seq = await DB.incrementField(this.counterTable, id, 'seq', 1, session);
    return Number(seq) || 0;
  }
}

module.exports = CheckoutRepository;
