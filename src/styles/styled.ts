import 'styled-components';

import Base from './base';
import Border from './border';
import Colors from './colors';
import { fontsTheme } from './fonts';
import { spacingTheme } from './spacing';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof Colors;
    spacing: typeof spacingTheme;
    fonts: typeof fontsTheme;
    border: typeof Border;
    base: typeof Base;
  }
}
