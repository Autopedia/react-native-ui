import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components/native';

interface SignProps {
  children: string;
  style?: StyleProp<ViewStyle>;
}
const Sign: React.FC<SignProps> = props => {
  return (
    <SContainer style={props.style}>
      <SSign>{props.children}</SSign>
    </SContainer>
  );
};

const SContainer = styled.View`
  align-self: center;

  ${props => `
    background-color: ${props.theme.colors.PRIMARY_EXTRALIGHT};
    padding: ${props.theme.spacing.SPACE_4} ${props.theme.spacing.SPACE_12};
    border-radius: ${props.theme.spacing.SPACE_20};
  `}
`;

const SSign = styled.Text`
  ${props => `
    font-family: ${props.theme.fonts.family.REGULAR};
    font-size: ${props.theme.fonts.size.XXXS};
    color: ${props.theme.colors.PRIMARY_DARK};
  `}
`;

export default Sign;
