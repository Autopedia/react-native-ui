export const systemColors = {
  PRIMARY: '#007AFF',
  PRIMARY_DARK: '#0056B4',
  PRIMARY_LIGHT: '#BDDBFF',
  PRIMARY_EXTRALIGHT: '#E0ECFA',
  SUCCESS: '#48CF7C',
  SUCCESS_DARK: '#0FA364',
  ERROR: '#FA4339',
  ERROR_DARK: '#C5372F',
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
  error: 'ERROR',
  error_dark: 'ERROR_DARK',
  black: 'BLACK',
  white: 'WHITE',
};

export type SystemColorKey = keyof typeof systemColors;
export type SystemColor = keyof typeof systemColorMap;
