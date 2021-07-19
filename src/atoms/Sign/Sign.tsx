import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components/native';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import spacing from '../../styles/spacing';

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
    background-color: ${colors.PRIMARY_EXTRALIGHT};
    padding: 4px 12px;
    border-radius: 20px;
  `}
`;

const SSign = styled.Text`
  ${props => `
    font-family: ${fonts.family.REGULAR};
    font-size: ${fonts.size.XXS}px;
    color: ${colors.PRIMARY_DARK};
  `}
`;

export default Sign;
