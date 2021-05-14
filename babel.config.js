module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extentions: ['.js', '.ts', '.tsx', '.json', '.*.tsx'],
        alias: {
          '@assets': './src/assets',
          '@styles': './src/styles',
          '@utils': './src/utils',
          '@atoms': './src/atoms',
          '@molecules': './src/molecules',
          '@organisms': './src/organisms',
          '@decorators': './src/decorators',
        },
      },
    ],
  ],
};
