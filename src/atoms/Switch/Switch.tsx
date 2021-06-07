import { Colors } from '@styles';
import React, { useState } from 'react';
import {
  Platform,
  Switch as RNSwtich,
  SwitchProps,
  ViewStyle,
} from 'react-native';

interface ISwitchProps {
  value?: boolean;
  defaultValue?: boolean;
  disabled?: boolean;
  onValueChange?: (value: boolean) => void;
}

const Switch: React.FC<ISwitchProps> = props => {
  const [sValue, setSValue] = useState<boolean>(props.defaultValue || false);

  const onValueChange = (newValue: boolean) => {
    if (props.disabled) return;
    if (props.onValueChange) {
      props.onValueChange(newValue);
    }
    setSValue(newValue);
  };

  const style: ViewStyle | undefined =
    Platform.OS === 'ios'
      ? {
          transform: [{ scaleX: 0.75 }, { scaleY: 0.75 }],
        }
      : undefined;

  return (
    <RNSwtich
      value={props.value ? props.value : sValue}
      onValueChange={onValueChange}
      disabled={props.disabled}
      thumbColor={Colors.WHITE}
      trackColor={{ true: Colors.PRIMARY, false: Colors.DISABLED }}
      style={style}
    />
  );
};

export default Switch;
