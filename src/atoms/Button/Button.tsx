import React from 'react';
import styled from 'styled-components/native';
import {
  ButtonProps,
  SButtonTextProps,
  SIconProps,
} from '@atoms/Button/Button.types';

import Icon from '@atoms/Icon';

import lodash from 'lodash';
import {
  SystemColor,
  SystemColorKey,
  systemColorMap,
  systemColors,
} from '@styles/sytem-colors';
import { grayscaleColors } from '@styles/grayscale-colors';

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  const buttonTextProps = lodash.pick(props, ['textColor', 'disabled']);
  const iconProps = lodash.pick(props, [
    'type',
    'disabled',
    'iconPosition',
    'absoluteIcon',
  ]);

  const getUnderlayColor = () => {
    if (props.type === 'text') return grayscaleColors.GRAY_300;

    const color = props.color || 'primary';
    switch (color) {
      case 'white':
        return grayscaleColors.GRAY_300;
      case 'black':
        return grayscaleColors.GRAY_700;
      default:
        const darkColor = (color + '_dark') as SystemColor;
        return systemColors[systemColorMap[darkColor] as SystemColorKey];
    }
  };

  return (
    <SContainer {...props} underlayColor={getUnderlayColor()}>
      <>
        {props.icon && props.iconPosition !== 'right' && (
          <SIcon source={props.icon} color={props.textColor} {...iconProps} />
        )}
        {typeof children === 'string' ? (
          <SButtonText includeFontPadding={false} {...buttonTextProps}>
            {children}
          </SButtonText>
        ) : (
          children
        )}
        {props.icon && props.iconPosition === 'right' && (
          <SIcon source={props.icon} color={props.textColor} {...iconProps} />
        )}
      </>
    </SContainer>
  );
};

const SContainer = styled.TouchableHighlight<ButtonProps>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* type (default: inline) */
  ${props => {
    const type = props.type || 'inline';
    switch (type) {
      case 'inline':
        return `
          padding: ${props.theme.spacing.SPACE_14}
        `;

      case 'block':
        return `
          padding: ${props.theme.spacing.SPACE_14}
          width: 100%;
        `;
      case 'text':
        return `
          border: none;
          padding: ${props.theme.spacing.SPACE_2}
        `;
    }
  }}

  /* tile (default: false) */
  ${props => {
    if (props.tile || props.type === 'text') {
      return;
    }
    return `
      border-radius: ${props.theme.spacing.SPACE_26};
      border-width: ${props.theme.border.BORDER_WIDTH};
    `;
  }}

  /* color (default: default) */
  ${props => {
    const type = props.type || 'inline';
    const color = props.color || 'primary';

    if (type === 'text') {
      return;
    }

    const backgroundColor =
      systemColors[systemColorMap[color as SystemColor] as SystemColorKey];

    return `
      border: none;
      background-color: ${backgroundColor};  
    `;
  }}

  /* disabled (default: false) */
  ${props => {
    if (props.disabled) {
      if (props.type === 'text') return `opacity: 0.5`;

      const color = props.color || 'primary';

      switch (color) {
        case 'white':
          break;
        case 'black':
          return `
            background-color: ${grayscaleColors.GRAY_300}
          `;
        default:
          const disabledColor = (color + '_light') as SystemColor;
          return `
          background-color: ${
            systemColors[systemColorMap[disabledColor] as SystemColorKey]
          }
        `;
      }
    }
  }}
`;

const SButtonText = styled.Text<SButtonTextProps>`
  text-align: center;
  ${props => {
    return `
      font-family: ${props.theme.fonts.family.MEDIUM}  
    `;
  }}
  /* textColor */
  ${props => {
    if (props.textColor) {
      if (Object.keys(systemColorMap).includes(props.textColor)) {
        const colorKey = systemColorMap[props.textColor as SystemColor];
        const color = systemColors[colorKey as SystemColorKey];

        return `color: ${color}`;
      } else {
        return `color: ${props.textColor}`;
      }
    }
    return `
      color: ${props.theme.colors.WHITE}
     `;
  }} /* disabled */
  ${props => {
    if (props.disabled) {
      return `
        opacity: 0.5;
      `;
    }
  }}
`;

const SIcon = styled(Icon)<SIconProps>`
  ${props => {
    const SIconPosition = props.iconPosition || 'left';
    const SMargin = `margin-${
      props.iconPosition === 'right' ? 'left' : 'right'
    }`;

    if (props.type === 'block' && props.absoluteIcon) {
      return `
        position:absolute;
        ${SIconPosition} : ${props.theme.spacing.SPACE_16}
      `;
    }

    return `
    ${SMargin}: ${props.theme.spacing.SPACE_6}
    `;
  }}
`;

export default Button;
