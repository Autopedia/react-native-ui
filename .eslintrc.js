module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  rules: {
    'no-shadow': 'off',
    'react-native/no-inline-styles': 'off',
    'no-control-regex': 'off',
    'no-spaced-func': 'off',
  },
  plugins: ['@typescript-eslint', 'import'],
  settings: {},
};
