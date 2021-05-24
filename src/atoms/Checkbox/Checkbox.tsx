import { BaseInputProps } from './Checkbox.types';
import React from 'react';
import styled from 'styled-components/native';

import Icon from '@atoms/Icon';

interface CheckboxProps extends BaseInputProps<boolean> {
  reverse?: boolean;
}
const Checkbox: React.FC<CheckboxProps> = props => {
  const [checked, setChecked] = React.useState<boolean>(
    props.reverse ? !props.defaultValue : Boolean(props.defaultValue),
  );

  const onPress = () => {
    setChecked(checked => {
      const value = props.reverse ? Boolean(checked) : !checked;

      if (props.onChange) {
        props.onChange(value);
      }
      return !checked;
    });
  };

  return (
    <SContainer onPress={onPress}>
      <SIcon
        source={
          checked
            ? require('@assets/icons/checkbox/checkbox-checked.png')
            : require('@assets/icons/checkbox/checkbox-unchecked.png')
        }
      />
      {props.children}
    </SContainer>
  );
};

const SContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
`;
const SIcon = styled(Icon)`
  ${props => `
    margin-right: ${props.theme.spacing.SPACE_4};
  `}
`;

export type CheckboxElement = React.ReactElement<
  CheckboxProps,
  typeof Checkbox
>;
export default Checkbox;
