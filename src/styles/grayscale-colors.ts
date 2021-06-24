export const grayscaleColors = {
  GRAY_100: '#F8FAFB',
  GRAY_200: '#EEF2F6',
  GRAY_300: '#DFE3E9',
  GRAY_400: '#C6CACF',
  GRAY_500: '#A4AAAE',
  GRAY_600: '#5F656A',
  GRAY_700: '#5A5A5A',
  GRAY_800: '#2E3032',
  GRAY_900: '#212121',
};

export const grayscaleColorMap = {
  gray_100: 'GRAY_100',
  gray_200: 'GRAY_200',
  gray_300: 'GRAY_300',
  gray_400: 'GRAY_400',
  gray_500: 'GRAY_500',
  gray_600: 'GRAY_600',
  gray_700: 'GRAY_700',
  gray_800: 'GRAY_800',
  gray_900: 'GRAY_900',
};

export type GrayscaleColorKeys = keyof typeof grayscaleColors;
export type GrayscaleColor = keyof typeof grayscaleColorMap;
