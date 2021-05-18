import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { theme } from '../styles';

const SThemeDecorator = (storyFn: any) => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
);

export default SThemeDecorator;
