module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/tests'],
  testMatch: ['**/?(*.)+(test).[jt]s'],
  moduleFileExtensions: ['js', 'json'],
  verbose: true,
  // 关闭自动清理 mock，方便在单测中更直观地控制
  clearMocks: true,
};
