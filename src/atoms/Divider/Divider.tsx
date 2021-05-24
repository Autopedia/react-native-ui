import React from 'react';
import styled from 'styled-components/native';

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
    margin: ${
      props.margin !== undefined
        ? `${props.margin}px`
        : props.theme.spacing.SPACE_16
    } 0px;
    border-bottom-width: ${props.theme.border.BORDER_WIDTH};
    border-bottom-color: ${props.theme.colors.EXTRALIGHT};
  `}
`;

export default Divider;
