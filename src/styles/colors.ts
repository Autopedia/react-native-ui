import { systemColors } from './system-colors';
import { grayscaleColors } from './grayscale-colors';
import { subColors } from './sub-colors';

const colors = {
  // Baseline colors
  SECONDARY_EXTRALIGHT: '#FFE9E7',
  DEFAULT: '#FFFFFF',

  // UI colors
  BACKGROUND: '#FFFFFF',
  BACKGROUND_DARK: '#F5F5F5',
  BACKGROUND_CHAT: '#CCE2EE',
  CARD: '#FFFFFF',
  SELECT: '#E6F6FF',
  UNSELECT: '#FFFFFF',
  MUTED: '#8C8C8C',
  RATING: '#FED600',

  // Action colors
  DISABLED: '#F5F5F5',

  // Brand colors
  APPLE: '#000000',
  GOOGLE: '#FFFFFF',
  KAKAO: '#FEE500',

  // Grayscale colors
  EXTRALIGHT: '#F5F5F5',
  LIGHT: '#D9D9D9',
  GREY: '#8C8C8C',
  DARK: '#434343',
  EXTRADARK: '#1F1F1F',

  // On colors
  ON_PRIMARY: '#FFFFFF',
  ON_PRIMARY_LIGHT: '#FFFFFF',
  ON_PRIMARY_EXTRALIGHT: '#007AFF',
  ON_PRIMARY_DARK: '#FFFFFF',
  ON_DEFAULT: '#1F1F1F',
  ON_BACKGROUND: '#1F1F1F',
  ON_BACKGROUND_DARK: '#8C8C8C',
  ON_CARD: '#1F1F1F',
  ON_SELECT: '#007AFF',
  ON_UNSELECT: '#1F1F1F',
  ON_ERROR: '#FFFFFF',
  ON_DISABLED: '#8C8C8C',
  ON_APPLE: '#FFFFFF',
  ON_GOOGLE: '#000000',
  ON_KAKAO: '#000000',

  // Border colors
  BORDER_BACKGROUND_DARK: '#D9D9D9',
  BORDER_CARD: '#F1F1F1',
  BORDER_SELECT: '#2997FF',
  BORDER_UNSELECT: '#D9D9D9',
  BORDER_GOOGLE: '#D9D9D9',
  BORDER_DEFAULT: '#D9D9D9',
  BORDER_DISABLED: '#D9D9D9',

  ...systemColors,
  ...grayscaleColors,
  ...subColors,
};

export default colors;
