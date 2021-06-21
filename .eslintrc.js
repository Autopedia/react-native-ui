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
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          '@assets': './src/assets',
          '@styles': './src/styles',
          '@utils': './src/utils',
          '@atoms': './src/atoms',
          '@molecules': './src/molecules',
          '@organisms': './src/organisms',
          '@global': './src/global',
        },
      },
    },
  },
};
