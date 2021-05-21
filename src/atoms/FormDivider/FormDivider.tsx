import React from 'react';
import styled from 'styled-components/native';

interface FormDividerProps {
  invisible?: boolean;
}
const FormDivider: React.FC<FormDividerProps> = props => {
  return <SDivider {...props} />;
};

const SDivider = styled.View<FormDividerProps>`
  ${props => `
    width: 100%;
    height: 0px;
    margin: ${props.theme.spacing.SPACE_8} 0px;
  `}

  /* invisible (default: false) */
  ${props =>
    !props.invisible &&
    `
      border-bottom-width: ${props.theme.border.BORDER_WIDTH};
      border-bottom-color: ${props.theme.colors.LIGHT};
    `}
`;

export type FormDividerElement = React.ReactElement<{}, typeof FormDivider>;
export default FormDivider;
