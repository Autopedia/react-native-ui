export const subColors = {
  BLUE: '#007AFF',
  BLUE_DARK: '#0056B4',
  BLUE_LIGHT: '#BDDBFF',
  PURPLE: '#5551FF',
  PURPLE_DARK: '#3532B9',
  PURPLE_LIGHT: '#C8C7FF',
  LAVENDER: '#CA5CFE',
  LAVENDER_DARK: '#953BC0',
  LAVENDER_LIGHT: '#EECAFF',
  CARROT: '#EB694C',
  CARROT_DARK: '#CA4E33',
  CARROT_LIGHT: '#FFBDAE',
  MUSTARD: '#F4C82A',
  MUSTARD_DARK: '#C5A121',
  MUSTARD_LIGHT: '#FFEC9D',
  BROWN: '#CA8B2D',
  BROWN_DARK: '#99681F',
  BROWN_LIGHT: '#FFDFB0',
};

export const subColorMap = {
  blue: 'BLUE',
  blue_dark: 'BLUE_DARK',
  blue_light: 'BLUE_LIGHT',
  purple: 'PURPLE',
  purple_dark: 'PURPLE_DARK',
  purple_light: 'PURPLE_LIGHT',
  lavender: 'LAVENDER',
  lavender_dark: 'LAVENDER_DARK',
  lavender_light: 'LAVENDER_LIGHT',
  carrot: 'CARROT',
  carrot_dark: 'CARROT_DARK',
  carrot_light: 'CARROT_LIGHT',
  mustard: 'MUSTARD',
  mustard_dark: 'MUSTARD_DARK',
  mustard_light: 'MUSTARD_LIGHT',
  brown: 'BROWN',
  brown_dark: 'BROWN_DARK',
  brown_light: 'BROWN_LIGHT',
};

export type SubColorKeys = keyof typeof subColors;

export type SubColor = keyof typeof subColorMap;
