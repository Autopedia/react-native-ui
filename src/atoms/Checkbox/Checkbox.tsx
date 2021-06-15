import { BaseInputProps } from '@global/types';
import React from 'react';
import styled from 'styled-components/native';

import Icon from '@atoms/Icon';

interface CheckboxProps extends BaseInputProps<boolean> {}

const Checkbox: React.FC<CheckboxProps> = props => {
  const [checked, setChecked] = React.useState<boolean>(
    props.value || props.defaultValue || false,
  );

  const onPress = () => {
    setChecked(checked => {
      if (props.onChange) {
        props.onChange(!checked);
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
