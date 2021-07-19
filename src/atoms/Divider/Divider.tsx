import React from 'react';
import styled from 'styled-components/native';

import border from '../../styles/border';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';

interface DividerProps {
  margin?: number;
}
const Divider: React.FC<DividerProps> = props => {
  return <SDivider {...props} />;
};

const SDivider = styled.View<DividerProps>`
  ${props => `
    width: 100%;
    height: 0px;
    margin: ${props.margin !== undefined ? `${props.margin}px` : '16px'} 0px;
    border-bottom-width: 1px;
    border-bottom-color: ${colors.EXTRALIGHT};
  `}
`;

export default Divider;
