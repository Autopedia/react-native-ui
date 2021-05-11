import './rn-addons';
import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import {
  addDecorator,
  configure,
  getStorybookUI,
} from '@storybook/react-native';
import { AppRegistry } from 'react-native';

import { name as appName } from '../app.json';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/styles';

const SThemeProvider = storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

// enables knobs for all stories
addDecorator(withKnobs);
addDecorator(SThemeProvider);

// import stories
configure(() => {
  require('../src/stories');
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({});

AppRegistry.registerComponent(appName, () => StorybookUIRoot);

export default StorybookUIRoot;
