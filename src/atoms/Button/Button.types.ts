import { GestureResponderEvent, TextStyle, ViewStyle } from 'react-native';

export type ButtonType = 'solid' | 'text';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonIconPosition = 'left' | 'right';

export interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  inline?: boolean;
  tile?: boolean;
  color?: string;
  touchedColor?: string;
  disabledColor?: string;
  loading?: boolean;
  disabled?: boolean;

  icon?: any;
  iconPosition?: ButtonIconPosition;

  style?: ViewStyle;
  onPress?: (event: GestureResponderEvent) => void;
}

export type SContainerProps = ButtonProps & {
  pressed: boolean;
  containerColor?: string;
  containerTouchedColor?: string;
  containerDisabledColor?: string;
};

export type SButtonTextProps = TextStyle &
  Pick<ButtonProps, 'size' | 'disabled'> & {
    pressed: boolean;
    textColor: string;
    textTouchedColor: string;
    textDisabledColor: string;
  };

export type SIconProps = Pick<
  ButtonProps,
  'type' | 'disabled' | 'iconPosition'
> & {
  pressed: boolean;
  textColor: string;
  textTouchedColor: string;
  textDisabledColor: string;
};
