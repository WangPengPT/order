const DB = require('../db');

class CheckoutRepository {
  constructor(paymentTable = 'checkout_payments', billTable = 'checkout_bills', callbackEventTable = 'checkout_callback_events') {
    this.paymentTable = paymentTable;
    this.billTable = billTable;
    this.callbackEventTable = callbackEventTable;
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
}

module.exports = CheckoutRepository;
