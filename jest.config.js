module.exports = {
  testMatch: ['**/?(*.)(spec|test).ts?(x)'],
  transform: {
    '.(ts|tsx)': '@swc/jest',
  },
  coverageThreshold: {
    global: {
      branches: 50,
      functions: 95,
      lines: 95,
      statements: 95,
    },
  },
  collectCoverage: true,
  coverageDirectory: './docs/jest-coverage',
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!**/vendor/**',
  ],
  coveragePathIgnorePatterns: ['/node_modules/', '/tests/'],
  //测试文件的类型
  moduleFileExtensions: ['ts', 'tsx', 'js', 'json', 'jsx', 'node'],
  reporters: [
    "default",
    [
      "jest-stare",
      {
        "resultDir": "../../docs/jest-stare",
        "reportTitle": "jest-stare!",
        "additionalResultsProcessors": [
          "jest-junit"
        ],
        "coverageLink": "../jest-coverage/lcov-report/index.html",
        "jestStareConfigJson": "jest-stare.json",
        "jestGlobalConfigJson": "globalStuff.json"
      }
    ]
  ],
}