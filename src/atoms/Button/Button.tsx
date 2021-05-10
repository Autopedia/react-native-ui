// import React from 'react';
// import PropTypes from 'prop-types';
// import { TouchableHighlight } from 'react-native';

// export default function Button({ onPress, children }) {
//   return <TouchableHighlight onPress={onPress}>{children}</TouchableHighlight>;
// }

// Button.defaultProps = {
//   children: null,
//   onPress: () => {},
// };

// Button.propTypes = {
//   children: PropTypes.node,
//   onPress: PropTypes.func,
// };

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
