import lodash from 'lodash';

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

let family = {
  THIN: 'Pretendard-Thin',
  LIGHT: 'Pretendard-Light',
  REGULAR: 'Pretendard-Regular',
  MEDIUM: 'Pretendard-Medium',
  BOLD: 'Pretendard-Bold',
  BLACK: 'Pretendard-Black',
};

const setFontFamily = (fontFamily: { THIN: string; LIGHT: string; REGULAR: string; MEDIUM: string; BOLD: string; BLACK: string; }) => {
  family = fontFamily;
}

const fonts = { size, lineHeight, family };

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
