import lodash from 'lodash';

export const systemColors = {
  PRIMARY: '#007AFF',
  PRIMARY_DARK: '#0056B4',
  PRIMARY_TOUCHED: '#0056B4',
  PRIMARY_LIGHT: '#BDDBFF',
  PRIMARY_DISABLED: '#BDDBFF',
  PRIMARY_EXTRALIGHT: '#E0ECFA',
  SUCCESS: '#48CF7C',
  SUCCESS_DARK: '#0FA364',
  SUCCESS_TOUCHED: '#0FA364',
  SUCCESS_LIGHT: '#B4F4C6',
  SUCCESS_DISABLED: '#B4F4C6',
  SUCCESS_EXTRALIGHT: '#D8F4E1',
  ERROR: '#FA4339',
  ERROR_DARK: '#C5372F',
  ERROR_TOUCHED: '#C5372F',
  ERROR_LIGHT: '#FFB7B2',
  ERROR_DISABLED: '#FFB7B2',
  ERROR_EXTRALIGHT: '#FFEAE9',
  BLACK: '#000000',
  WHITE: '#FFFFFF',
};

export const systemColorMap = lodash.invert(systemColors);

export type SystemColorKey = keyof typeof systemColors;
