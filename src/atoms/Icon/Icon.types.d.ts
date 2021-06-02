import {
  GestureResponderEvent,
  StyleProp,
  ImageStyle,
  FlexStyle,
} from 'react-native';
import { ButtonColor } from '@atoms/Button/Button.types';
export interface IconProps {
  source: any;
  color?: string | ButtonColor;
  touchable?: boolean;
  disabled?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<Omit<ImageStyle, 'color'> | FlexStyle>;
}

export type STouchableProps = Pick<IconProps, 'disabled' | 'onPress' | 'style'>;
export type SIconProps = Pick<
  IconProps,
  'color' | 'disabled' | 'source' | 'style'
>;
