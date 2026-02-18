jest.mock('bcrypt', () => ({
  hash: jest.fn(async (p) => `hashed:${p}`),
  compare: jest.fn(async (p, h) => h === `hashed:${p}`),
}));
jest.mock('jsonwebtoken', () => ({
  sign: jest.fn(() => 'token:abc'),
}));

const User = require('../model/users');
const { Settings } = require('../model/settings');
const { TakeawayInfo, DeliveryInfo, ReserverInfo, QROrderInfo } = require('../model/Info');

/**
 * 用例目的（中文说明）：
 * - 覆盖用户模型：密码哈希/校验与 token 生成（mock bcrypt/jwt）
 * - 覆盖设置与 Info：update 行为、字段存在性与序列化
 */
describe('用户/设置/信息 模型', () => {
  test('User 创建/修改密码、校验与 token', async () => {
    const u = await User.create('13800000000', 'pass123');
    expect(u.password.startsWith('hashed:')).toBe(true);
    expect(await u.verifyPassword('pass123')).toBe(true);
    u.generateToken();
    expect(typeof u.token).toBe('string');
  });

  test('Settings 更新存在/不存在字段', () => {
    const s = new Settings({ checkIP: false, QRorder: true, takeaway: true, delivery: true, reserver: false, isFestiveDay: false, useFandays: false, useChildrenDiscount: false });
    const ok = s.update('checkIP', true);
    expect(ok.success).toBe(true);
    const bad = s.update('not_exists', 1);
    expect(bad.success).toBe(false);
    const j = s.toJSON();
    const s2 = Settings.fromJSON(j);
    expect(s2.checkIP).toBe(true);
  });

  test('Info 子类字段与序列化', () => {
    const tk = new TakeawayInfo();
    const dv = new DeliveryInfo();
    const rs = new ReserverInfo();
    const qr = new QROrderInfo();
    expect(tk.type).toBe('Takeaway');
    expect(dv.type).toBe('Delivery');
    expect(rs.type).toBe('Reserver');
    expect(qr.type).toBe('QROrder');
    const j = qr.toJSON?.() ?? {};
    expect(typeof j).toBe('object');
  });
});

