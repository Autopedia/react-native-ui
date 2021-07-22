import _ from 'lodash';
import colors from '../../styles/colors';

// type ColorList = SystemColorKey|SubColorKey|keyof typeof grayscaleColors;
// type ButtonColorProps = {
//     color: string;
//     touchedColor: string;
//     textColor: string;
//     textDisabledColor: string;
//     disabledColor: string;
// }

// export const buttonColorTemplate: Partial<Record<ColorList, ButtonColorProps>> = {
//     PRIMARY : {
//         color: colors.PRIMARY,
//         touchedColor: colors.PRIMARY_DARK,
//         textColor: colors.WHITE,
//         textDisabledColor: colors.WHITE,
//         disabledColor: colors.PRIMARY_LIGHT,
//     },
//     SUCCESS: {
//         color: colors.SUCCESS,
//         touchedColor: colors.SUCCESS_DARK,
//         textColor: colors.WHITE,
//         textDisabledColor: colors.WHITE,
//         disabledColor: colors.SUCCESS_LIGHT,
//     },
//     ERROR: {
//         color: colors.ERROR,
//         touchedColor: colors.ERROR_DARK,
//         textColor: colors.WHITE,
//         textDisabledColor: colors.WHITE,
//         disabledColor: colors.ERROR_LIGHT,
//     },
//     GRAY_200: {
//         color: colors.GRAY_200,
//         touchedColor: colors.GRAY_300,
//         textColor: colors.GRAY_900,
//         textDisabledColor: colors.GRAY_400,
//         disabledColor: colors.GRAY_100,
//     },
// }

// default color : opacity value change
export const buttonTouchedColors = {
  [colors.PRIMARY]: colors.PRIMARY_DARK,
  [colors.SUCCESS]: colors.SUCCESS_DARK,
  [colors.ERROR]: colors.ERROR_DARK,
  [colors.BLUE]: colors.BLUE_DARK,
  [colors.PURPLE]: colors.PURPLE_DARK,
  [colors.LAVENDER]: colors.LAVENDER_DARK,
  [colors.CARROT]: colors.CARROT_DARK,
  [colors.MUSTARD]: colors.MUSTARD_DARK,
  [colors.BROWN]: colors.BROWN_DARK,
  [colors.GRAY_200]: colors.GRAY_300,
};
export type ButtonTouchedColorKey = keyof typeof buttonTouchedColors;

// default color : opacity value change
export const buttonDisabledColors = {
  [colors.PRIMARY]: colors.PRIMARY_LIGHT,
  [colors.SUCCESS]: colors.SUCCESS_LIGHT,
  [colors.ERROR]: colors.ERROR_LIGHT,
  [colors.BLUE]: colors.BLUE_LIGHT,
  [colors.PURPLE]: colors.PURPLE_LIGHT,
  [colors.LAVENDER]: colors.LAVENDER_LIGHT,
  [colors.CARROT]: colors.CARROT_LIGHT,
  [colors.MUSTARD]: colors.MUSTARD_LIGHT,
  [colors.BROWN]: colors.BROWN_LIGHT,
  [colors.GRAY_200]: colors.GRAY_100,
};
export type ButtonDisabledColorkey = keyof typeof buttonDisabledColors;
