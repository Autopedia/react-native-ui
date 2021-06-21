import { ViewStyle, GestureResponderEvent, TextStyle } from 'react-native';
export type ButtonLayout = 'inline' | 'block' | 'sticky';
export type ButtonType = 'default' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonColor =
  | 'default'
  | 'primary'
  | 'primaryExtraLight'
  | 'muted'
  | 'error'
  | 'dark'
  | 'apple'
  | 'google'
  | 'kakao';
export type ButtonIconPosition = 'left' | 'right';

export interface ButtonProps {
  /**
   * layout (default : inline)
   * @inline    button width determined by the inner text
   * @block     button expands to maximum length possible
   * @sticky    button expands to maximum length and fixed at the bottom
   */
  layout?: ButtonLayout;

  type?: ButtonType;
  size?: ButtonSize;
  color?: ButtonColor;
  loading?: boolean;
  disabled?: boolean;

  icon?: any;
  iconPosition?: ButtonIconPosition;

  /**
   * absoluteIcon (default: false)
   * !!NOT compatible with DEFAULT layout button!!
   * @true    position of the icon fixed to one side of the button (corresponding to iconPosition)
   */
  absoluteIcon?: boolean;
  style?: ViewStyle;
  onPress: (event: GestureResponderEvent) => void;
}

export type SButtonTextProps = TextStyle &
  Pick<ButtonProps, 'type' | 'size' | 'color' | 'disabled'>;

export type SIconProps = Pick<
  ButtonProps,
  'size' | 'iconPosition' | 'absoluteIcon'
>;
