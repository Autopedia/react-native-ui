import { ViewStyle, GestureResponderEvent, TextStyle } from 'react-native';
export type ButtonType = 'inline' | 'block' | 'text';
export type ButtonIconPosition = 'left' | 'right';

export interface ButtonProps {
  /**
   * layout (default : inline)
   * @inline    button width determined by the inner text
   * @block     button expands to maximum length possible
   * @sticky    button expands to maximum length and fixed at the bottom
   */

  type?: ButtonType;
  tile?: boolean;
  color?: string;
  touchedColor?: string;
  disabledColor?: string;
  textColor?: string;
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
  Pick<ButtonProps, 'textColor' | 'disabled'>;

export type SIconProps = Pick<
  ButtonProps,
  'type' | 'disabled' | 'iconPosition' | 'absoluteIcon'
>;
