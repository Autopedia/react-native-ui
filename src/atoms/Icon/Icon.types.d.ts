import {
  GestureResponderEvent,
  StyleProp,
  ImageStyle,
  FlexStyle,
} from 'react-native';
import { SystemColor } from '@styles/system-colors';
export interface IconProps {
  source: any;
  color?: SystemColor | string;
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
