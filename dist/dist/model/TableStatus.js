class TableStatus {
  static FREE = new TableStatus('空闲');
  static RESERVED = new TableStatus('已预订');
  static PAID = new TableStatus('已支付');
  static SEATED = new TableStatus('用餐中');

  constructor(value) {
    this.value = value;
  }

  // 中文转葡语
  toPt() {
    const translations = {
      '空闲': 'Livre',
      '已预订': 'Reservado',
      '已支付': 'Pago',
      '用餐中': 'Ocupado'
    };
    return translations[this.value] || this.value;
  }

  // 葡语转中文
  static fromPt(ptValue) {
    const translations = {
      'Livre': '空闲',
      'Reservado': '已预订',
      'Pago': '已支付',
      'Ocupado': '用餐中'
    };
    return translations[ptValue] || ptValue; // 返回中文或原值
  }

  toString() {
    return this.value;
  }

  // 获取所有枚举值
  static values() {
    return [this.FREE, this.RESERVED, this.PAID, this.SEATED];
  }

  // 从字符串创建枚举（现在支持中文和葡语）
  static fromString(value) {
    // 如果是葡语，先转换为中文
    const chineseValue = this.isPortuguese(value) ? this.fromPt(value) : value;
    
    const all = this.values();
    return all.find(status => status.value === chineseValue) || null;
  }

  // 检查是否是葡语状态
  static isPortuguese(value) {
    return ['Livre', 'Reservado', 'Pago', 'Ocupado'].includes(value);
  }
}

module.exports = { TableStatus }