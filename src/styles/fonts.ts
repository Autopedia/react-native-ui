import lodash from 'lodash';

import { scale } from './scale';

const size = {
  XXXS: scale(11),
  XXS: scale(13),
  XS: scale(15),
  S: scale(18),
  M: scale(20),
  L: scale(22),
  XL: scale(28),
  XXL: scale(34),
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

const family = {
  THIN: 'NotoSansKR-Thin',
  LIGHT: 'NotoSansKR-Light',
  REGULAR: 'NotoSansKR-Regular',
  MEDIUM: 'NotoSansKR-Medium',
  BOLD: 'NotoSansKR-Bold',
  BLACK: 'NotoSansKR-Black',
};

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
