import Base from './base';
import Colors from './colors';
import Border from './border';
import 'styled-components';
import { spacingTheme } from './spacing';
import { fontsTheme } from './fonts';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof Colors;
    spacing: typeof spacingTheme;
    fonts: typeof fontsTheme;
    border: typeof Border;
    base: typeof Base;
  }
}
