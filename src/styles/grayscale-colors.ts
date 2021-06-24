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

export type GrayscaleColorKeys = keyof typeof grayscaleColors;

export type GrayscaleColor = typeof grayscaleColors[GrayscaleColorKeys];
