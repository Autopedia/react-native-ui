import React from 'react';
import { GestureResponderEvent } from 'react-native';
import styled from 'styled-components/native';

interface ButtonProps {
  type: 'default' | 'link';
  onPress: (event: GestureResponderEvent) => void;
}
const Button: React.FC<ButtonProps> = ({ children, onPress }) => {
  return <SButton onPress={onPress}>{children}</SButton>;
};

export default Button;

const SButton = styled.TouchableOpacity`
  background-color: blue;
`;
