import { Colors } from '@styles';
import React, { useState } from 'react';
import {
  Platform,
  Switch as RNSwtich,
  SwitchProps,
  ViewStyle,
} from 'react-native';

// eslint-disable-next-line prettier/prettier
const Switch: React.FC<Omit<SwitchProps, 'thumbColor' | 'trackColor'>> =
  props => {
    const [value, setValue] = useState<boolean>(props.value || false);

    const onValueChange = (newValue: boolean) => {
      if (props.disabled) return;
      if (props.onValueChange) {
        props.onValueChange(newValue);
      }
      setValue(newValue);
    };

    const style: ViewStyle | undefined =
      Platform.OS === 'ios'
        ? {
            transform: [{ scaleX: 0.75 }, { scaleY: 0.75 }],
          }
        : undefined;

    return (
      <RNSwtich
        value={value}
        onValueChange={onValueChange}
        disabled={props.disabled}
        thumbColor={Colors.WHITE}
        trackColor={{ true: Colors.PRIMARY, false: Colors.DISABLED }}
        style={style}
      />
    );
  };

export default Switch;
