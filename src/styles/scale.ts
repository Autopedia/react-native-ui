import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const GUILDELINE_BASE_WIDTH = 414;
const GUILDELINE_BASE_HEIGHT = 896;

const horizontalScale = (size: number) =>
  (width / GUILDELINE_BASE_WIDTH) * size;
const verticalScale = (size: number) =>
  (height / GUILDELINE_BASE_HEIGHT) * size;
// const scale = (size: number, factor = 0) =>
//   size + (horizontalScale(size) - size) * factor;
const scale = (size: number) => size;

export { horizontalScale, verticalScale, scale };
