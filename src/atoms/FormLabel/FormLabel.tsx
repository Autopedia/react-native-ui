import React from 'react';
import styled from 'styled-components/native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

interface FormLabelProps {
  children: string;
  required?: boolean;
}

const FormLabel = (props: FormLabelProps) => {
  return (
    <SContainer>
      <SLabel>{props.children}</SLabel>
      {props.required && <SRequired>*</SRequired>}
    </SContainer>
  );
};

const SContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 3px;
`;

const SLabel = styled.Text`
  font-family: ${fonts.family.REGULAR};
  font-size: ${fonts.size.XS}px;
  color: ${colors.ON_DEFAULT};
`;

const SRequired = styled.Text`
  font-family: ${fonts.family.REGULAR};
  font-size: ${fonts.size.XS}px;
  color: ${colors.ERROR};
`;

export default FormLabel;
