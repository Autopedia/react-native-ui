import lodash from 'lodash';
import { Platform } from 'react-native';

import { scale } from './scale';

const size = {
  XXS: scale(12),
  XS: scale(14),
  S: scale(16),
  M: scale(20),
  L: scale(24),
  XL: scale(28),
  XXL: scale(32),
};

const lineHeight = {
  XXXS: scale(16),
  XXS: scale(19),
  XS: scale(22),
  S: scale(26),
  M: scale(29),
  L: scale(35),
  XL: scale(40),
  XXL: scale(55),
};

type fontFamily = { THIN: string; LIGHT: string; REGULAR: string; MEDIUM: string; BOLD: string; BLACK: string; }

let family: fontFamily = Platform.OS === 'android' ? {
  THIN: 'Roboto-Thin',
  LIGHT: 'Roboto-Light',
  REGULAR: 'Roboto-Regular',
  MEDIUM: 'Roboto-Medium',
  BOLD: 'Roboto-Bold',
  BLACK: 'Roboto-Black',
} : {
  THIN: 'AppleSDGothicNeo-Thin',
  LIGHT: 'AppleSDGothicNeo-Light',
  REGULAR: 'AppleSDGothicNeo-Regular',
  MEDIUM: 'AppleSDGothicNeo-Medium',
  BOLD: 'AppleSDGothicNeo-Bold',
  BLACK: 'AppleSDGothicNeo-Black',
};

const setFontFamily = (fontFamily: fontFamily) => {
  fonts.family = fontFamily;
}

const fonts = { size, lineHeight, family, setFontFamily };

export default fonts;
export const fontsTheme = {
  family,
  fontSize: lodash.mapValues(size, value => `${value}px`),
  lineHeight: lodash.mapValues(lineHeight, value => `${value}px`),
  size: lodash.mapValues(
    size,
    (value, key: keyof typeof size) =>
      `${value}px; line-height: ${lineHeight[key]}px`,
  ),
};
