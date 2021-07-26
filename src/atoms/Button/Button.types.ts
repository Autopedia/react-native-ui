import { PressableProps } from 'react-native';
import { GestureResponderEvent, TextStyle, ViewStyle } from 'react-native';

export type ButtonType = 'solid' | 'text';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonIconPosition = 'left' | 'right';

export interface ButtonProps extends PressableProps {
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
  colorIcon?: boolean;
  iconPosition?: ButtonIconPosition;

  style?: ViewStyle;
  onPress?: (event: GestureResponderEvent) => void;
}

export type CustomColors = {
  textColor: string;
  textTouchedColor: string;
  textDisabledColor: string;
  containerColor: string;
  containerTouchedColor: string;
  containerDisabledColor: string;
};

export type SContainerProps = PressableProps &
  Pick<ButtonProps, 'size' | 'inline' | 'tile'>;

export type SButtonTextProps = TextStyle &
  Pick<ButtonProps, 'size' | 'disabled'> &
  Pick<CustomColors, 'textColor' | 'textTouchedColor' | 'textDisabledColor'> & {
    pressed: boolean;
  };

export type SIconProps = Pick<ButtonProps, 'iconPosition' | 'colorIcon'>;
