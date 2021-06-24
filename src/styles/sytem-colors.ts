export const systemColors = {
  PRIMARY: '#007AFF',
  PRIMARY_DARK: '#0056B4',
  PRIMARY_LIGHT: '#BDDBFF',
  PRIMARY_EXTRALIGHT: '#E0ECFA',
  SUCCESS: '#48CF7C',
  SUCCESS_DARK: '#0FA364',
  SUCCESS_LIGHT: '#B4F4C6',
  SUCCESS_EXTRALIGHT: '#D8F4E1',
  ERROR: '#FA4339',
  ERROR_DARK: '#C5372F',
  ERROR_LIGHT: '#FFB7B2',
  ERROR_EXTRALIGHT: '#FFEAE9',
  BLACK: '#000000',
  WHITE: '#FFFFFF',
};

export const systemColorMap = {
  primary: 'PRIMARY',
  primary_dark: 'PRIMARY_DARK',
  primary_light: 'PRIMARY_LIGHT',
  primary_extralight: 'PRIMARY_EXTRALIGHT',
  success: 'SUCCESS',
  success_dark: 'SUCCESS_DARK',
  success_light: 'SUCCESS_LIGHT',
  success_extralight: 'SUCCESS_EXTRALIGHT',
  error: 'ERROR',
  error_dark: 'ERROR_DARK',
  error_light: 'ERROR_LIGHT',
  error_extralight: 'ERROR_EXTRALIGHT',
  black: 'BLACK',
  white: 'WHITE',
};

export type SystemColorKey = keyof typeof systemColors;
export type SystemColor = keyof typeof systemColorMap;
export type SystemColorMain =
  | 'primary'
  | 'success'
  | 'error'
  | 'black'
  | 'white';
