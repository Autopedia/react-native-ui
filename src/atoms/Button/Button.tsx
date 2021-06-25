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
  SystemColorKey,
  systemColorMap,
  systemColors,
} from '@styles/system-colors';
import { SubColorKey, subColorMap, subColors } from '@styles/sub-colors';
import { grayscaleColors } from '@styles/grayscale-colors';
import Color from 'color';
import { getValidatedColor } from '@utils/validator';

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  const getUnderlayColor = () => {
    if (props.type === 'text') return grayscaleColors.GRAY_300;

    const color = getValidatedColor(props.color || systemColors.PRIMARY);

    if (Object.keys(systemColorMap).includes(color)) {
      const touchedColorName = systemColorMap[color] + '_TOUCHED';

      if (Object.keys(systemColors).includes(touchedColorName))
        return systemColors[touchedColorName as SystemColorKey];
    }

    if (Object.keys(subColorMap).includes(color)) {
      const touchedColorName = subColorMap[color] + '_TOUCHED';

      if (Object.keys(subColors).includes(touchedColorName))
        return subColors[touchedColorName as SubColorKey];
    }

    return Color(color).alpha(0.5).string();
  };

  const getDisabledColor = () => {
    const color = getValidatedColor(props.color || systemColors.PRIMARY);

    if (Object.keys(systemColorMap).includes(color)) {
      const touchedColorName = systemColorMap[color] + '_DISABLED';

      if (Object.keys(systemColors).includes(touchedColorName))
        return systemColors[touchedColorName as SystemColorKey];
    }

    if (Object.keys(subColorMap).includes(color)) {
      const touchedColorName = subColorMap[color] + '_DISABLED';

      if (Object.keys(subColors).includes(touchedColorName))
        return subColors[touchedColorName as SubColorKey];
    }

    return Color(color).alpha(0.5).string();
  };

  const containerProps = {
    ...props,
    color: getValidatedColor(props.color || systemColors.PRIMARY),
    textColor: getValidatedColor(props.textColor || systemColors.WHITE),
    disabledColor: props.disabledColor || getDisabledColor(),
  };

  const buttonTextProps = lodash.pick(containerProps, [
    'textColor',
    'disabled',
  ]);
  const iconProps = lodash.pick(containerProps, [
    'type',
    'disabled',
    'iconPosition',
    'absoluteIcon',
  ]);

  return (
    <SContainer
      {...containerProps}
      underlayColor={containerProps.touchedColor || getUnderlayColor()}
    >
      <>
        {props.icon && props.iconPosition !== 'right' && (
          <SIcon
            source={containerProps.icon}
            color={containerProps.textColor}
            {...iconProps}
          />
        )}
        {typeof children === 'string' ? (
          <SButtonText includeFontPadding={false} {...buttonTextProps}>
            {children}
          </SButtonText>
        ) : (
          children
        )}
        {containerProps.icon && containerProps.iconPosition === 'right' && (
          <SIcon
            source={containerProps.icon}
            color={containerProps.textColor}
            {...iconProps}
          />
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
          border-radius: ${props.theme.border.BORDER_RADIUS};
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
    if (type === 'text') {
      return;
    }

    return `
      border: none;
      background-color: ${props.color};  
    `;
  }}

  /* disabled (default: false) */
  ${props => {
    if (props.disabled) {
      if (props.type === 'text') return `opacity: 0.5`;

      return `
        background-color: ${props.disabledColor};
      `;
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
    return `color: ${props.textColor}`;
  }} 
  
  /* disabled */
  ${props => {
    if (props.disabled) {
      return `
        opacity: 0.7;
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
