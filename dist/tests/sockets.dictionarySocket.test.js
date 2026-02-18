jest.mock('../services/dictinaryService', () => {
  return function Mock() {
    return {
      updateDictionaryWord: jest.fn(async () => ({ success: true })),
      resetDictionary: jest.fn(async () => ({ success: true })),
      getAll: jest.fn(async () => ({ success: true, data: [] })),
    }
  }
});

const DictionarySocket = require('../socket/dictionarySocket');

/**
 * 用例目的（中文说明）：
 * - 覆盖 DictionarySocket：更新/重置/刷新流程
 */
describe('socket/DictionarySocket', () => {
  const io = { emit: jest.fn() };
  const s = new DictionarySocket(io);

  test('updateDictionary 成功返回 200', async () => {
    const cb = jest.fn();
    await s.updateDictionary({ add: [] }, cb);
    expect(cb).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));
  });

  test('updateDictionary 失败返回 400', async () => {
    s.dictionaryService.updateDictionaryWord.mockResolvedValueOnce({ success: false, data: 'e' });
    const cb = jest.fn();
    await s.updateDictionary({ add: [] }, cb);
    expect(cb).toHaveBeenCalledWith(expect.objectContaining({ code: 400 }));
  });

  test('resetDictionary 成功返回 200', async () => {
    const cb = jest.fn();
    await s.resetDictionary(cb);
    expect(cb).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));
  });
});
