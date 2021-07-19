import {
  GestureResponderEvent,
  StyleProp,
  ImageStyle,
  FlexStyle,
} from 'react-native';
export interface IconProps {
  source: any;
  color?: string;
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
