import lodash from 'lodash';
import React from 'react';
import styled from 'styled-components/native';

import spacing from '../../styles/spacing';
import {
  FlexStyleKeys,
  ImageOnlyStyleKeys,
  ImageStyleKeys,
  pickStyle,
} from '../../styles/utils';
import { getValidatedColor } from '../../utils/validator';
import { IconProps, SIconProps, STouchableProps } from './Icon.types';

const Icon: React.FC<IconProps> = props => {
  const touchableProps = {
    ...lodash.pick(props, ['disabled', 'onPress']),
    onPress: props.disabled ? undefined : props.onPress,
    style: pickStyle(props.style, FlexStyleKeys),
  };
  const iconProps = {
    ...lodash.pick(props, ['color', 'disabled', 'source', 'size']),
    style: pickStyle(
      props.style,
      props.onPress ? ImageOnlyStyleKeys : ImageStyleKeys,
    ),
  };

  return props.onPress ? (
    <STouchable {...touchableProps}>
      <SIcon {...iconProps} />
    </STouchable>
  ) : (
    <SIcon {...iconProps} />
  );
};

const STouchable = styled.TouchableOpacity<STouchableProps>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 4px;
  margin: -4px;
`;
const SIcon = styled.Image<SIconProps>`
  /* color (default: undefined) */
  ${props => {
    return props.color ? `tint-color: ${getValidatedColor(props.color)}` : '';
  }}

  /* disabled (default: false) */
  ${props => props.disabled && 'opacity: 0.5'}

  /* size (default: md) */
  ${props => {
    switch (props.size) {
      case 'xs':
        return `width: 16px; height: 16px;`;
      case 'sm':
        return `width: 20px; height: 20px;`;
      case 'md':
        return `width: 24px; height: 24px;`;
      case 'lg':
        return `width: 32px; height: 32px;`;
      default:
        return `width: 24px; height: 24px;`;
    }
  }}
`;

export default Icon;
