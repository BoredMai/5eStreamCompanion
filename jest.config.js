module.exports = {
  collectCoverageFrom: ['**/src/components/**/*.{js,jsx}'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: -10,
    },
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__tests__/mocks/fileMock.js',
    '\\.(css|less)$': 'identity-obj-proxy',
  },
  setupTestFrameworkScriptFile: '<rootDir>__tests__/setupEnzyme.js',
  testMatch: ['**/src/components/**/*.spec.js'],
};
