import Color from 'color';
import React from 'react';
import styled from 'styled-components/native';
import _ from 'lodash';

import fonts from '../../styles/fonts';
import { grayscaleColors } from '../../styles/grayscale-colors';
import { systemColors } from '../../styles/system-colors';
import { getValidatedColor } from '../../utils/validator';
import Icon from '../Icon';
import {
  ButtonDisabledColorkey,
  buttonDisabledColors,
  ButtonTouchedColorKey,
  buttonTouchedColors,
} from './buttonColors';
import {
  ButtonProps,
  SContainerProps,
  SButtonTextProps,
  SIconProps,
  CustomColors,
} from './Button.types';
import { LoadingDots } from '../LoadingDots';

const Button: React.FC<ButtonProps> = ({
  children,
  color,
  touchedColor,
  disabledColor,
  ...props
}) => {
  let textColor: CustomColors['textColor'];
  let textTouchedColor: CustomColors['textTouchedColor'];
  let textDisabledColor: CustomColors['textDisabledColor'];
  let containerColor: CustomColors['containerColor'];
  let containerTouchedColor: CustomColors['containerTouchedColor'];
  let containerDisabledColor: CustomColors['containerDisabledColor'];

  if (props.type === 'text') {
    if (color) {
      textColor = getValidatedColor(color || systemColors.PRIMARY);
      textDisabledColor =
        touchedColor ||
        (Object.keys(buttonDisabledColors).includes(textColor)
          ? buttonTouchedColors[textColor as ButtonDisabledColorkey]
          : Color(textColor).alpha(0.3).string());
    } else {
      textColor = grayscaleColors.GRAY_600;
      textDisabledColor = grayscaleColors.GRAY_400;
    }
    containerTouchedColor = grayscaleColors.GRAY_100;
  } else {
    if (color) {
      containerColor = getValidatedColor(color || systemColors.PRIMARY);
      containerTouchedColor =
        touchedColor ||
        (Object.keys(buttonTouchedColors).includes(containerColor)
          ? buttonTouchedColors[containerColor as ButtonTouchedColorKey]
          : Color(containerColor).alpha(0.5).string());
      containerDisabledColor =
        disabledColor ||
        (Object.keys(buttonDisabledColors).includes(containerColor)
          ? buttonDisabledColors[containerColor as ButtonDisabledColorkey]
          : Color(containerColor).alpha(0.5).string());
      textColor =
        containerColor === systemColors.WHITE
          ? systemColors.BLACK
          : systemColors.WHITE;
    } else {
      containerColor = grayscaleColors.GRAY_200;
      containerTouchedColor = grayscaleColors.GRAY_300;
      containerDisabledColor = grayscaleColors.GRAY_100;
      textColor = grayscaleColors.GRAY_600;
      textDisabledColor = grayscaleColors.GRAY_400;
    }
  }

  const containerProps = {
    ...props,
    containerColor,
    containerTouchedColor,
    containerDisabledColor,
  };

  const buttonTextProps = {
    ..._.pick(containerProps, ['size', 'disabled']),
    textColor,
    textTouchedColor,
    textDisabledColor,
  };
  const iconProps = {
    ..._.pick(containerProps, ['iconPosition']),
    source: props.icon,
  };

  return (
    <SPressable
      onPress={!(props.disabled || props.loading) && props.onPress}
      disabled={props.disabled || props.loading}
    >
      {({ pressed }) => (
        <SContainer {...containerProps} pressed={pressed}>
          <>
            {props.icon && props.iconPosition !== 'right' && (
              <SIcon
                size="sm"
                color={
                  pressed && textTouchedColor
                    ? textTouchedColor
                    : props.disabled && textDisabledColor
                    ? textDisabledColor
                    : textColor
                }
                {...iconProps}
              />
            )}
            {props?.loading ? (
              <LoadingDots
                color={
                  pressed && textTouchedColor
                    ? textTouchedColor
                    : props.disabled && textDisabledColor
                    ? textDisabledColor
                    : textColor
                }
              />
            ) : typeof children === 'string' ? (
              <SButtonText
                pressed={pressed}
                includeFontPadding={false}
                {...buttonTextProps}
              >
                {children}
              </SButtonText>
            ) : (
              children
            )}
            {props.icon && props.iconPosition === 'right' && (
              <SIcon
                size="sm"
                color={
                  pressed && textTouchedColor
                    ? textTouchedColor
                    : props.disabled && textDisabledColor
                    ? textDisabledColor
                    : textColor
                }
                {...iconProps}
              />
            )}
          </>
        </SContainer>
      )}
    </SPressable>
  );
};
const SPressable = styled.Pressable`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const SContainer = styled.View<SContainerProps>`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  /* size (default: md) */
  ${props => {
    switch (props.size) {
      case 'sm':
        return `
          padding: 6px 12px;
        `;
      case 'md':
        return `
          padding: 10px 16px;
        `;
      default:
        return `
          padding: 14px 24px;
        `;
    }
  }}

  /* inline (default: false) */
  ${props => {
    if (props.inline) {
      return;
    }
    return `width: 100%`;
  }}

  /* tile (default: false) */
  ${props => {
    if (props.tile) {
      return;
    }
    return `
      border-radius: 100px;
    `;
  }}

  /* color (default: default) */
  ${props => {
    if (props.pressed && props.containerTouchedColor) {
      return `
        background-color: ${props.containerTouchedColor};
      `;
    }
    if (props.disabled && props.containerDisabledColor) {
      return `
        background-color: ${props.containerDisabledColor};
      `;
    }
    return `
      background-color: ${props.containerColor};
    `;
  }}
`;

const SButtonText = styled.Text<SButtonTextProps>`
  text-align: center;
  /* size (default: lg) */
  ${props => {
    switch (props?.size) {
      case 'sm':
        return `
          font-family: ${fonts.family.REGULAR};
          font-size: ${fonts.size.XS}px;
          line-height: ${fonts.lineHeight.XS}px;
        `;
      case 'md':
        return `
          font-family: ${fonts.family.REGULAR};
          font-size: ${fonts.size.S}px;
          line-height: ${fonts.lineHeight.S}px;
        `;
      default:
        return `
          font-family: ${fonts.family.MEDIUM};
          font-size: ${fonts.size.S}px;
          line-height: ${fonts.lineHeight.S}px;
        `;
    }
  }}
  /* textColor */
  ${props => {
    if (props.pressed && props.textTouchedColor) {
      return `
        color: ${props.textTouchedColor};
      `;
    }
    if (props.disabled && props.textDisabledColor) {
      return `
        color: ${props.textDisabledColor};
      `;
    }
    return `
      color: ${props.textColor};
    `;
  }}
`;

const SIcon = styled(Icon)<SIconProps>`
  /* iconMargin */
  ${props => {
    const SMargin = `margin-${
      props.iconPosition === 'right' ? 'left' : 'right'
    }`;

    return `
    ${SMargin}: 6px
    `;
  }}
`;

export default Button;
