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

export type SubColorKeys = keyof typeof subColors;

export type SubColor = typeof subColors[SubColorKeys];
