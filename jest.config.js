module.exports = {
  testMatch: ['**/?(*.)(spec|test).ts?(x)'],
  rootDir: '',
  transform: {
    '.(ts|tsx)': '@swc/jest',
  },
  
}