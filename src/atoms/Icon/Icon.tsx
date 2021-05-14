import {
  FlexStyleKeys,
  ImageOnlyStyleKeys,
  ImageStyleKeys,
  pickStyle,
} from '@styles/utils';
import lodash from 'lodash';
import React from 'react';
import {
  FlexStyle,
  GestureResponderEvent,
  ImageStyle,
  StyleProp,
} from 'react-native';
import styled from 'styled-components/native';

interface IconProps {
  source: any;
  color?: string;
  touchable?: boolean;
  disabled?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  style?: StyleProp<Omit<ImageStyle, 'color'> | FlexStyle>;
}

type STouchableProps = Pick<IconProps, 'disabled' | 'onPress' | 'style'>;
type SIconProps = Pick<IconProps, 'color' | 'disabled' | 'source' | 'style'>;

const Icon: React.FC<IconProps> = props => {
  const touchableProps = {
    ...lodash.pick(props, ['disabled', 'onPress']),
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
    switch (props.color) {
      case 'primary':
        return `
              tint-color: ${props.theme.colors.ON_PRIMARY};
            `;
      case 'error':
        return `
              tint-color: ${props.theme.colors.ERROR};
            `;
      case 'muted':
        return `
              tint-color: ${props.theme.colors.MUTED};
            `;
      case 'dark':
        return `
              tint-color: ${props.theme.colors.WHITE};
            `;
      case 'apple':
        return `
              tint-color: ${props.theme.colors.ON_APPLE};
            `;
      case 'google':
        return `
              tint-color: ${props.theme.colors.ON_GOOGLE};
            `;
      case 'kakao':
        return `
              tint-color: ${props.theme.colors.ON_KAKAO};
            `;
      default:
        return `
              tint-color: ${props.theme.colors.ON_DEFAULT};
            `;
    }
  }}

  /* disabled (default: false) */
  ${props => props.disabled && `tint-color: ${props.theme.colors.GREY};`}
`;

export default Icon;
