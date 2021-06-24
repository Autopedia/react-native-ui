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

export type SystemColorKeys = keyof typeof systemColors;

export type SystemColor = typeof systemColors[SystemColorKeys];
