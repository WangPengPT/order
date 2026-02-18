const { Page } = require('../model/page');
const { Pages } = require('../model/pages');

/**
 * 用例目的（中文说明）：
 * - 覆盖页面模型：Page / Pages
 * - 验证：类型常量、合并模板、更新图片/Logo、序列化/反序列化、ID 管理
 */
describe('页面模型', () => {
  test('Page 类型与合并模板', () => {
    expect(Page.getTypes()).toContain('Dine-in');
    const p = new Page({ id: 1, name: 'welcome', description: 'd', data: { title: 'X' } });
    expect(p.data.title).toBe('X');
    const j = p.toJSON();
    const p2 = Page.fromJSON(j);
    expect(p2.name).toBe('welcome');
  });

  test('Page 更新欢迎图片/Logo/背景路径', () => {
    // 提供最简数据结构以匹配模型实现
    const p = new Page({ id: 1, name: 'welcome', description: '', data: { images_description: { images: [] }, background: { image: '' } } });
    p.updateWelcomeImges(['/a.png']);
    p.updateWelcomeLogo('/logo.png');
    p.updateBackground('/bg.jpg');
    expect(p.data.logoPath).toBe('/logo.png');
    expect(p.data.background.image).toBe('/bg.jpg');
  });

  test('Pages 添加/删除/序列化', () => {
    const ps = new Pages([]);
    const id = ps.add(new Page({ name: 'A', description: '' }));
    expect(ps.get(id).name).toBe('A');
    const json = ps.toJSON();
    const ps2 = Pages.fromJSON(json);
    expect(ps2.get(id).name).toBe('A');
    ps2.deletePage(id);
    expect(ps2.get(id)).toBeUndefined();
  });
});
