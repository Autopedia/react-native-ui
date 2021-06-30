import { Colors } from '../../styles';
import React, { useEffect, useState } from 'react';
import { Platform, Switch as RNSwtich, ViewStyle } from 'react-native';

interface ISwitchProps {
  value?: boolean | undefined;
  defaultValue?: boolean;
  disabled?: boolean;
  onValueChange?: (value: boolean) => void;
}

const Switch: React.FC<ISwitchProps> = props => {
  const [innerValue, setInnerValue] = useState<boolean>(
    props.defaultValue || false,
  );

  const switchValue = props.value || innerValue;

  const onValueChange = (newValue: boolean) => {
    if (props.disabled) return;
    if (props.onValueChange) {
      props.onValueChange(newValue);
    }
    setInnerValue(newValue);
  };

  useEffect(() => {
    if (props.defaultValue !== undefined) {
      setInnerValue(props.defaultValue);
    }
  }, [props.defaultValue]);

  const style: ViewStyle | undefined =
    Platform.OS === 'ios'
      ? {
          transform: [{ scaleX: 0.75 }, { scaleY: 0.75 }],
        }
      : undefined;

  return (
    <RNSwtich
      value={switchValue}
      onValueChange={onValueChange}
      disabled={props.disabled || false}
      thumbColor={Colors.WHITE}
      trackColor={{ true: Colors.PRIMARY, false: Colors.DISABLED }}
      style={style}
    />
  );
};

export default Switch;
