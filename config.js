module.exports = {
  extends: ['plugin:eslint-plugin/recommended', 'prettier', 'plugin:egrand/recommended'],
  plugins: ['eslint-plugin', 'prettier', 'egrand'],
  parserOptions: {
    parser: require.resolve('babel-eslint'),
    ecmaVersion: 2017,
    sourceType: 'module'
  },
  env: {
    es6: true,
    node: true
  },
  globals: {
    document: false,
    navigator: false,
    window: false
  },
  rules: {
    'prefer-template': 'error',
    'no-var': 'error',
    'no-unused-vars': 'error',
    'space-before-function-paren': ['error', 'never']
  }
}
