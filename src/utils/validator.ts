import validateColor from 'validate-color';

export const getValidatedColor = (color: string) => {
  return validateColor(color) ? color : 'transparent';
};
