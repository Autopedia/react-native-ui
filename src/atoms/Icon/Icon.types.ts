import {
  FlexStyle,
  GestureResponderEvent,
  ImageStyle,
  StyleProp,
} from 'react-native';

export type IconSize = 'sm' | 'md' | 'lg';

export interface IconProps {
  source: any;
  size?: IconSize;
  color?: string;
  disabled?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<Omit<ImageStyle, 'color'> | FlexStyle>;
}

export type STouchableProps = Pick<IconProps, 'disabled' | 'onPress' | 'style'>;
export type SIconProps = Pick<
  IconProps,
  'color' | 'disabled' | 'source' | 'style' | 'size'
>;
