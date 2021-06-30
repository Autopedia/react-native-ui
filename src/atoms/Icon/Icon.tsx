import {
  FlexStyleKeys,
  ImageOnlyStyleKeys,
  ImageStyleKeys,
  pickStyle,
} from '../../styles/utils';
import lodash from 'lodash';
import React from 'react';
import styled from 'styled-components/native';
import { systemColors } from '../../styles/system-colors';
import { getValidatedColor } from '../../utils/validator';
import { IconProps, STouchableProps, SIconProps } from './Icon.types';

const Icon: React.FC<IconProps> = props => {
  const touchableProps = {
    ...lodash.pick(props, ['disabled', 'onPress']),
    onPress: props.disabled ? undefined : props.onPress,
    style: pickStyle(props.style, FlexStyleKeys),
  };
  const iconProps = {
    ...lodash.pick(props, ['color', 'disabled', 'source']),
    style: pickStyle(
      props.style,
      props.touchable ? ImageOnlyStyleKeys : ImageStyleKeys,
    ),
  };

  return props.touchable ? (
    <STouchable {...touchableProps}>
      <SIcon {...iconProps} />
    </STouchable>
  ) : (
    <SIcon {...iconProps} />
  );
};

const STouchable = styled.TouchableOpacity<STouchableProps>`
  ${props => `
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: ${props.theme.spacing.SPACE_4};
  `}
`;
const SIcon = styled.Image<SIconProps>`
  /* color (default: undefined) */

  ${props => {
    return `tint-color: ${getValidatedColor(
      props.color || systemColors.PRIMARY,
    )}`;
  }}

  /* disabled (default: false) */
  ${props => props.disabled && `opacity: 0.5`}
`;

export default Icon;
