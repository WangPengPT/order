const { UserSocket } = require('../socket/userSocket');

/**
 * 用例目的（中文说明）：
 * - 覆盖 UserSocket：登录/创建/修改/重置密码的成功与失败分支，以及事件绑定
 */
describe('socket/UserSocket', () => {
  const io = { emit: jest.fn() };

  function createSvc() {
    return {
      login: jest.fn(async () => ({ success: true, data: 'token' })),
      changePassword: jest.fn(async () => ({ success: true })),
      resetPassword: jest.fn(async () => ({ success: true })),
      register: jest.fn(async () => ({ success: true, data: 'u1' })),
    };
  }

  test('login 成功与失败（密码错误/其它错误）', async () => {
    const svc = createSvc();
    const s = new UserSocket(io, svc);

    const cbOk = jest.fn();
    await s.login({ phoneNumber: 'p', password: 'x' }, cbOk);
    expect(cbOk).toHaveBeenCalledWith(expect.objectContaining({ code: 200, success: true }));

    svc.login.mockResolvedValueOnce({ success: false, data: null });
    const cbWrong = jest.fn();
    await s.login({ phoneNumber: 'p', password: 'wrong' }, cbWrong);
    expect(cbWrong).toHaveBeenCalledWith(expect.objectContaining({ code: 401 }));

    svc.login.mockResolvedValueOnce({ success: false, data: 'error' });
    const cbErr = jest.fn();
    await s.login({ phoneNumber: 'p', password: 'err' }, cbErr);
    expect(cbErr).toHaveBeenCalledWith(expect.objectContaining({ code: 400 }));
  });

  test('changePassword 成功与失败', async () => {
    const svc = createSvc();
    const s = new UserSocket(io, svc);
    const cbOk = jest.fn();
    await s.changePassword('p', 'n', cbOk);
    expect(cbOk).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));

    svc.changePassword.mockResolvedValueOnce({ success: false, data: 'e' });
    const cbBad = jest.fn();
    await s.changePassword('p', 'n2', cbBad);
    expect(cbBad).toHaveBeenCalledWith(expect.objectContaining({ code: 400 }));
  });

  test('resetPassword 成功与失败', async () => {
    const svc = createSvc();
    const s = new UserSocket(io, svc);
    const cbOk = jest.fn();
    await s.resetPassword('p', cbOk);
    expect(cbOk).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));

    svc.resetPassword.mockResolvedValueOnce({ success: false, data: 'e' });
    const cbBad = jest.fn();
    await s.resetPassword('p', cbBad);
    expect(cbBad).toHaveBeenCalledWith(expect.objectContaining({ code: 400 }));
  });

  test('createUser 成功与失败', async () => {
    const svc = createSvc();
    const s = new UserSocket(io, svc);
    const cbOk = jest.fn();
    await s.createUser({ phoneNumber: 'p', password: 'x' }, cbOk);
    expect(cbOk).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));

    svc.register.mockResolvedValueOnce({ success: false, data: 'e' });
    const cbBad = jest.fn();
    await s.createUser({ phoneNumber: 'p', password: 'x' }, cbBad);
    expect(cbBad).toHaveBeenCalledWith(expect.objectContaining({ code: 400 }));
  });

  test('registerHandlers 绑定所有事件', async () => {
    const svc = createSvc();
    const s = new UserSocket(io, svc);
    const handlers = {};
    const fakeSocket = {
      on: (event, fn) => { handlers[event] = fn; }
    };

    s.registerHandlers(fakeSocket);

    expect(typeof handlers['manager_login']).toBe('function');
    expect(typeof handlers['manager_createNewUser']).toBe('function');
    expect(typeof handlers['manager_changePassword']).toBe('function');
    expect(typeof handlers['manager_resetPassword']).toBe('function');

    const cb = jest.fn();
    await handlers['manager_login']({ phoneNumber: 'p', password: 'x' }, cb);
    expect(cb).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));
  });
});

