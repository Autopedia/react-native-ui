import { DefaultTheme } from 'styled-components';

import Base from './base';
import Border from './border';
import Colors from './colors';
import Fonts, { fontsTheme } from './fonts';
import * as Scale from './scale';
import Spacing, { spacingTheme } from './spacing';

const theme: DefaultTheme = {
  colors: Colors,
  spacing: spacingTheme,
  fonts: fontsTheme,
  border: Border,
  base: Base,
};

export { theme, Colors, Fonts, Scale, Spacing };
