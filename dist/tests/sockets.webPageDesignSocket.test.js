jest.mock('../services/webPageDesignService', () => {
  return { WebPageDesignService: function(){
    return {
      savePageData: jest.fn(async () => ({ success: true })),
      getWebpageById: jest.fn(async () => ({ success: true, data: { id: 1 } })),
      getAllPageInformation: jest.fn(async () => ({ success: true, data: [] })),
      deleteDescriptionIamges: jest.fn(async () => ({ success: true })),
      addPage: jest.fn(async () => ({ success: true, data: 2 })),
      editPage: jest.fn(async () => ({ success: true })),
      deletePage: jest.fn(async () => ({ success: true })),
      applayPage: jest.fn(async () => ({ success: true })),
      getCurrentPage: jest.fn(async () => ({ success: true, data: {} })),
    }
  } }
});

const { WebPageDesignSocket } = require('../socket/webPageDesignSocket');

/**
 * 用例目的（中文说明）：
 * - 覆盖 WebPageDesignSocket：保存/获取/删除/新增/编辑/应用页面等接口的成功与失败分支
 */
describe('socket/WebPageDesignSocket', () => {
  const io = { emit: jest.fn() };
  const s = new WebPageDesignSocket(io);

  test('savePageData 回调 200', async () => {
    const cb = jest.fn();
    await s.savePageData(1, {}, cb);
    expect(cb).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));
  });

  test('savePageData 失败返回 400', async () => {
    s.webPageDesignService.savePageData.mockResolvedValueOnce({ success: false, data: 'e' });
    const cb = jest.fn();
    await s.savePageData(1, {}, cb);
    expect(cb).toHaveBeenCalledWith(expect.objectContaining({ code: 400 }));
  });

  test('getPageById 回调 200', async () => {
    const cb = jest.fn();
    await s.getPageById(1, cb);
    expect(cb).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));
  });

  test('getPageById 失败返回 404', async () => {
    s.webPageDesignService.getWebpageById.mockResolvedValueOnce({ success: false, data: 'e' });
    const cb = jest.fn();
    await s.getPageById(1, cb);
    expect(cb).toHaveBeenCalledWith(expect.objectContaining({ code: 404 }));
  });

  test('deleteDescriptionIamges 成功与失败', async () => {
    const cbOk = jest.fn();
    await s.deleteDescriptionIamges(1, ['/a'], cbOk);
    expect(cbOk).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));

    s.webPageDesignService.deleteDescriptionIamges.mockResolvedValueOnce({ success: false, data: 'e' });
    const cbBad = jest.fn();
    await s.deleteDescriptionIamges(1, ['/a'], cbBad);
    expect(cbBad).toHaveBeenCalledWith(expect.objectContaining({ code: 400 }));
  });

  test('addPage 成功与失败', async () => {
    const cbOk = jest.fn();
    await s.addPage('n', 'd', 'type', cbOk);
    expect(cbOk).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));

    s.webPageDesignService.addPage.mockResolvedValueOnce({ success: false, data: 'e' });
    const cbBad = jest.fn();
    await s.addPage('n', 'd', 'type', cbBad);
    expect(cbBad).toHaveBeenCalledWith(expect.objectContaining({ code: 400 }));
  });

  test('editPage 成功与失败', async () => {
    const cbOk = jest.fn();
    await s.editPage(1, 'n', 'd', cbOk);
    expect(cbOk).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));

    s.webPageDesignService.editPage.mockResolvedValueOnce({ success: false, data: 'e' });
    const cbBad = jest.fn();
    await s.editPage(1, 'n', 'd', cbBad);
    expect(cbBad).toHaveBeenCalledWith(expect.objectContaining({ code: 400 }));
  });

  test('deletePage 成功与失败', async () => {
    const cbOk = jest.fn();
    await s.deletePage(1, cbOk);
    expect(cbOk).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));

    s.webPageDesignService.deletePage.mockResolvedValueOnce({ success: false, data: 'e' });
    const cbBad = jest.fn();
    await s.deletePage(1, cbBad);
    expect(cbBad).toHaveBeenCalledWith(expect.objectContaining({ code: 400 }));
  });

  test('applayPage 成功与失败', async () => {
    const cbOk = jest.fn();
    await s.applayPage(1, 'type', cbOk);
    expect(cbOk).toHaveBeenCalledWith(expect.objectContaining({ code: 200 }));

    s.webPageDesignService.applayPage.mockResolvedValueOnce({ success: false, data: 'e' });
    const cbBad = jest.fn();
    await s.applayPage(1, 'type', cbBad);
    expect(cbBad).toHaveBeenCalledWith(expect.objectContaining({ code: 400 }));
  });
});
