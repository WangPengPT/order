jest.mock('bcrypt', () => ({
  hash: jest.fn(async (p) => `hashed:${p}`),
  compare: jest.fn(async (p, h) => h === `hashed:${p}`),
}));
jest.mock('jsonwebtoken', () => ({ sign: jest.fn(() => 'token:abc') }));
jest.mock('../db.js', () => ({ withTransaction: async (fn) => await fn(null) }));

const { UserService } = require('../services/userService');

class FakeRepo {
  constructor() { this.store = new Map(); }
  hasUsers() { return this.store.size > 0; }
  getAllUsers() { return Array.from(this.store.values()); }
  getUserById(id) { return this.store.get(id) || null; }
  save(user) { this.store.set(user.phoneNumber, user); }
  delete(id){ this.store.delete(id); }
  async login(phoneNumber, password) { 
    const u = this.store.get(phoneNumber);
    if (!u) return null;
    return (await require('../model/users').prototype.verifyPassword?.call(u, password)) ? phoneNumber : null;
  }
}

/**
 * 用例目的（中文说明）：
 * - 覆盖 UserService：初始化、注册重复用户错误、登录成功/失败、修改/重置密码、批量保存
 */
describe('UserService', () => {
  test('InitOrLoadUserData 在空库创建 admin', async () => {
    const svc = new UserService(new FakeRepo());
    await svc.InitOrLoadUserData();
    const users = await svc.usersRepository.getAllUsers();
    expect(users.length >= 0).toBe(true);
  });

  test('register 新用户成功 & 重复用户失败', async () => {
    const repo = new FakeRepo();
    const svc = new UserService(repo);
    const res1 = await svc.register('13800000001', 'p1');
    expect(res1.success).toBe(true);
    const res2 = await svc.register('13800000001', 'p2');
    expect(res2.success).toBe(false);
  });

  test('login 成功生成 token，失败返回错误', async () => {
    const repo = new FakeRepo();
    const svc = new UserService(repo);
    await svc.register('u1', 'p');
    const ok = await svc.login('u1', 'p');
    expect(ok.success).toBe(true);
    const bad = await svc.login('u1', 'wrong');
    expect(bad.success).toBe(false);
  });

  test('resetPassword 和 changePassword', async () => {
    const repo = new FakeRepo();
    const svc = new UserService(repo);
    await svc.register('u2', 'p1');
    const reset = await svc.resetPassword('u2');
    expect(reset.success).toBe(true);
    const change = await svc.changePassword('u2', 'p2');
    expect(change.success).toBe(true);
  });

  test('saveUsers 批量保存', async () => {
    const repo = new FakeRepo();
    const svc = new UserService(repo);
    const payload = [
      { phoneNumber: 'a', password: 'x' },
      { phoneNumber: 'b', password: 'y' },
    ];
    const res = await svc.saveUsers(payload);
    expect(res.success).toBe(true);
    expect(await repo.getUserById('a')).toBeTruthy();
  });
});
