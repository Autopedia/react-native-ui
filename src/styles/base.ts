import { Platform } from 'react-native';

import colors from './colors';
import spacing from './spacing';

const base = {
  section: `
    background-color: ${colors.BACKGROUND};
    border-bottom-width: 1px;
    border-bottom-color: ${colors.BORDER_BACKGROUND_DARK};
    padding: ${spacing.SPACE_20}px;
  `,
  message: `
    overflow: hidden;
    border-radius: ${spacing.SPACE_14}px;
    ${
      Platform.OS === 'android'
        ? 'elevation: 1;'
        : `
      box-shadow: 0px 2px 2px rgba(0,0,0,0.1);
    `
    }
  `,
};

export default base;
