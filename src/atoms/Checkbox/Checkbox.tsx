import { BaseInputProps } from '../../global/types';
import React from 'react';
import styled from 'styled-components/native';

import Icon from '../../atoms/Icon';

interface CheckboxProps extends BaseInputProps<boolean> {
  color?: string;
}

const Checkbox: React.FC<CheckboxProps> = props => {
  const [checked, setChecked] = React.useState<boolean>(
    props.defaultValue || false,
  );

  const checkboxValue = props.value || checked;

  const onPress = () => {
    const toggled = !checked;
    props.onChange?.(toggled);
    setChecked(toggled);
  };

  return (
    <SContainer onPress={onPress}>
      <SIcon
        color={props.color}
        source={
          checkboxValue
            ? require('../../assets/icons/checkbox/checkbox-checked.png')
            : require('../../assets/icons/checkbox/checkbox-unchecked.png')
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
