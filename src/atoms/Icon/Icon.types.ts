import {
  FlexStyle,
  GestureResponderEvent,
  ImageStyle,
  StyleProp,
} from 'react-native';

export interface IconProps {
  source: any;
  size?: 'sm' | 'md' | 'lg';
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
