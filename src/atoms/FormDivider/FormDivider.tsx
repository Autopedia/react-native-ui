import React from 'react';
import styled from 'styled-components/native';

import colors from '../../styles/colors';

interface FormDividerProps {
  invisible?: boolean;
}
const FormDivider: React.FC<FormDividerProps> = props => {
  return <SDivider {...props} />;
};

const SDivider = styled.View<FormDividerProps>`
  width: 100%;
  height: 0px;
  margin: 8px 0px;

  /* invisible (default: false) */
  ${props =>
    !props.invisible &&
    `
      border-bottom-width: 1px;
      border-bottom-color: ${colors.LIGHT};
    `}
`;

export type FormDividerElement = React.ReactElement<{}, typeof FormDivider>;
export default FormDivider;
