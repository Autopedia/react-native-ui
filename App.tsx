/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';

import { ThemeProvider } from 'styled-components';
import { theme } from './src/styles';

const App = () => {
  return <ThemeProvider theme={theme} />;
};

export default App;
