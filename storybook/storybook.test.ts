import initStoryshots from '@storybook/addon-storyshots';
jest.useFakeTimers();
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

initStoryshots({
  storyKindRegex: /^((?!.*VideoMessage.*).)*$/gm,
});
