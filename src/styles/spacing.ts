import lodash from 'lodash';
import { Dimensions } from 'react-native';

import { scale } from './scale';

const { width, height } = Dimensions.get('window');

const spacing = {
  SCREEN_WIDTH: width,
  SCREEN_HEIGHT: height,
  SPACE_1: scale(1),
  SPACE_2: scale(2),
  SPACE_3: scale(3),
  SPACE_4: scale(4),
  SPACE_5: scale(5),
  SPACE_6: scale(6),
  SPACE_8: scale(8),
  SPACE_10: scale(10),
  SPACE_12: scale(12),
  SPACE_14: scale(14),
  SPACE_16: scale(16),
  SPACE_20: scale(20),
  SPACE_24: scale(24),
  SPACE_26: scale(26),
  SPACE_30: scale(30),
  SPACE_32: scale(32),
  SPACE_40: scale(40),
  SPACE_50: scale(50),
  SPACE_52: scale(52),
  SPACE_57: scale(57),
  SPACE_60: scale(60),
  SPACE_64: scale(64),
  SPACE_72: scale(72),
  SPACE_80: scale(80),
  SPACE_85: scale(85),
  SPACE_88: scale(88),
  SPACE_90: scale(90),
  SPACE_92: scale(92),
  SPACE_100: scale(100),
  SPACE_110: scale(110),
  SPACE_120: scale(120),
  SPACE_130: scale(130),
  SPACE_160: scale(160),
  SPACE_180: scale(180),
  SPACE_190: scale(190),
  SPACE_200: scale(200),
  SPACE_260: scale(260),
  SPACE_280: scale(280),
  STICKY_BOTTOM_HEIGHT: scale(65),
};

export default spacing;
export const spacingTheme = lodash.mapValues(spacing, value => `${value}px`);
