export const systemColors = {
  PRIMARY: '#007AFF',
  PRIMARY_DARK: '#0056B4',
  PRIMARY_LIGHT: '#BDDBFF',
  PRIMARY_EXTRALIGHT: '#BDDBFF',
  SUCCESS: '#48CF7C',
  SUCCESS_DARK: '#0FA364',
  ERROR: '#FA4339',
  ERROR_DARK: '#C5372F',
  BLACK: '#000000',
  WHITE: '#FFFFFF',
};

export const systemColorMap = {
  primary: systemColors.PRIMARY,
  primary_dark: systemColors.PRIMARY_DARK,
  primary_light: systemColors.PRIMARY_LIGHT,
  primary_extralight: systemColors.PRIMARY_EXTRALIGHT,
  success: systemColors.SUCCESS,
  success_dark: systemColors.SUCCESS_DARK,
  error: systemColors.ERROR,
  error_dark: systemColors.ERROR_DARK,
  black: systemColors.BLACK,
  white: systemColors.WHITE,
};

export type SystemColorKey = keyof typeof systemColors;
export type SystemColor = keyof typeof systemColorMap;
