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
  blue: subColors.BLUE,
  blue_dark: subColors.BLUE_DARK,
  blue_light: subColors.BLUE_LIGHT,
  purple: subColors.PURPLE,
  purple_dark: subColors.PURPLE_DARK,
  purple_light: subColors.PURPLE_LIGHT,
  lavender: subColors.LAVENDER,
  lavender_dark: subColors.LAVENDER_DARK,
  lavender_light: subColors.LAVENDER_LIGHT,
  carrot: subColors.CARROT,
  carrot_dark: subColors.CARROT_DARK,
  carrot_light: subColors.CARROT_LIGHT,
  mustard: subColors.MUSTARD,
  mustard_dark: subColors.MUSTARD_DARK,
  mustard_light: subColors.MUSTARD_LIGHT,
  brown: subColors.BROWN,
  brown_dark: subColors.BROWN_DARK,
  brown_light: subColors.BROWN_LIGHT,
};

export type SubColorKeys = keyof typeof subColors;

export type SubColor = keyof typeof subColorMap;
