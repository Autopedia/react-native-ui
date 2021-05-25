import React from 'react';
import styled from 'styled-components/native';

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
  ${props => `
    flex-direction: row;
    align-items: center;
    margin-bottom: ${props.theme.spacing.SPACE_3};
  `}
`;

const SLabel = styled.Text`
  ${props => `
    font-family: ${props.theme.fonts.family.REGULAR};
    font-size: ${props.theme.fonts.size.XS};
    color: ${props.theme.colors.ON_DEFAULT};
  `}
`;

const SRequired = styled.Text`
  ${props => `
    font-family: ${props.theme.fonts.family.REGULAR};
    font-size: ${props.theme.fonts.size.XS};
    color: ${props.theme.colors.ERROR};
  `}
`;

export default FormLabel;
