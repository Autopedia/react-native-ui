import Color from 'color';
import lodash from 'lodash';
import React from 'react';
import styled from 'styled-components/native';

import fonts from '../../styles/fonts';
import { grayscaleColors } from '../../styles/grayscale-colors';
import { SubColorKey, subColorMap, subColors } from '../../styles/sub-colors';
import {
  SystemColorKey,
  systemColorMap,
  systemColors,
} from '../../styles/system-colors';
import { getValidatedColor } from '../../utils/validator';
import Icon from '../Icon';
import { ButtonProps, SButtonTextProps, SIconProps } from './Button.types';

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  const getUnderlayColor = () => {
    if (props.type === 'text') {
      return grayscaleColors.GRAY_300;
    }

    const color = getValidatedColor(props.color || systemColors.PRIMARY);

    if (Object.keys(systemColorMap).includes(color)) {
      const touchedColorName = systemColorMap[color] + '_TOUCHED';

      if (Object.keys(systemColors).includes(touchedColorName)) {
        return systemColors[touchedColorName as SystemColorKey];
      }
    }

    if (Object.keys(subColorMap).includes(color)) {
      const touchedColorName = subColorMap[color] + '_TOUCHED';

      if (Object.keys(subColors).includes(touchedColorName)) {
        return subColors[touchedColorName as SubColorKey];
      }
    }

    return Color(color).alpha(0.5).string();
  };

  const getDisabledColor = () => {
    const color = getValidatedColor(props.color || systemColors.PRIMARY);

    if (Object.keys(systemColorMap).includes(color)) {
      const touchedColorName = systemColorMap[color] + '_DISABLED';

      if (Object.keys(systemColors).includes(touchedColorName)) {
        return systemColors[touchedColorName as SystemColorKey];
      }
    }

    if (Object.keys(subColorMap).includes(color)) {
      const touchedColorName = subColorMap[color] + '_DISABLED';

      if (Object.keys(subColors).includes(touchedColorName)) {
        return subColors[touchedColorName as SubColorKey];
      }
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
    'textColor',
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
            {...iconProps}
            {...(iconProps.type === 'text'
              ? { color: iconProps.textColor }
              : {})}
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
            {...iconProps}
            {...(iconProps.type === 'text'
              ? { color: iconProps.textColor }
              : {})}
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
          padding: 14px
        `;

      case 'block':
        return `
          padding: 14px;
          width: 100%;
        `;
      case 'text':
        return `
          border: none;
          border-radius: 4px;
          padding: 2px
        `;
    }
  }}

  /* tile (default: false) */
  ${props => {
    if (props.tile || props.type === 'text') {
      return;
    }
    return `
      border-radius: 26px;
      border-width: 1px;
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
      if (props.type === 'text') {
        return;
      }

      return `
        background-color: ${props.disabledColor};
      `;
    }
  }}
`;

const SButtonText = styled.Text<SButtonTextProps>`
  text-align: center;
  font-family: ${fonts.family.MEDIUM};
  font-size: ${fonts.size.S}px;
  line-height: ${fonts.lineHeight.S}px;
  /* textColor */
  ${props => {
    return `color: ${props.textColor}`;
  }} /* disabled */
  ${props => {
    if (props.disabled) {
      return `
        color: ${Color(props.textColor).alpha(0.5).string()};
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
        ${SIconPosition} : 16px
      `;
    }

    return `
    ${SMargin}: 8px
    `;
  }}
`;

export default Button;
