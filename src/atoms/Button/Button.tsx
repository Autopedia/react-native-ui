import React from 'react';
import styled from 'styled-components/native';
import {
  ButtonSize,
  ButtonProps,
  SButtonTextProps,
  SIconProps,
} from '@atoms/Button/Button.types';

import Icon from '@atoms/Icon';

import lodash from 'lodash';

const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  const buttonTextProps = lodash.pick(props, [
    'type',
    'size',
    'color',
    'disabled',
  ]);

  const iconProps = lodash.pick(props, [
    'size',
    'color',
    'iconPosition',
    'absoluteIcon',
    'disabled',
  ]);

  return (
    <SContainer {...props}>
      {props.icon && props.iconPosition !== 'right' && (
        <SIcon source={props.icon} {...iconProps} />
      )}
      {typeof children === 'string' ? (
        <SButtonText includeFontPadding={false} {...buttonTextProps}>
          {children}
        </SButtonText>
      ) : (
        children
      )}
      {props.icon && props.iconPosition === 'right' && (
        <SIcon source={props.icon} {...iconProps} />
      )}
    </SContainer>
  );
};

const SContainer = styled.TouchableOpacity<ButtonProps>`
  flex-direction: row;
  justify-content: center;
  align-items: center;

  /* layout (default: inline) */
  ${props => {
    const layout = props.layout || 'inline';
    switch (layout) {
      case 'inline':
        break;
      case 'block':
        return 'width: 100%;';
      case 'sticky':
        return `
          position: absolute;
          bottom: 0;
          width: 100%;
        `;
    }
  }}

  /* type (default: default) */
  ${props => {
    const type = props.type || 'default';
    const layout = props.layout || 'inline';
    if (type === 'link' || layout === 'sticky') {
      return;
    }

    return `
      border-radius: ${props.theme.border.BORDER_RADIUS};
      border-width: ${props.theme.border.BORDER_WIDTH};
    `;
  }}

  /* size (default: md) */
  ${props => {
    const size = props.size || 'md';
    switch (size) {
      case 'sm':
        return `
          padding: ${props.theme.spacing.SPACE_6} ${props.theme.spacing.SPACE_12};
        `;
      case 'md':
        return `
          padding: ${props.theme.spacing.SPACE_10} ${props.theme.spacing.SPACE_16};
        `;
      case 'lg':
        return `
          padding: ${props.theme.spacing.SPACE_14} ${props.theme.spacing.SPACE_20};
        `;
    }
  }}

  /* color (default: default) */
  ${props => {
    const type = props.type || 'default';
    if (type === 'link') {
      return;
    }

    switch (props.color) {
      case 'primary':
        return `
          border: none;
          background-color: ${props.theme.colors.PRIMARY};
        `;
      case 'primaryExtraLight':
        return `
          border: none;
          background-color: ${props.theme.colors.PRIMARY_EXTRALIGHT};
        `;
      case 'error':
        return `
          border-color: ${props.theme.colors.ERROR};
        `;
      case 'dark':
        return `
          border: none;
          background-color: ${props.theme.colors.DARK};
        `;
      case 'apple':
        return `
          border: none;
          background-color: ${props.theme.colors.APPLE};
        `;
      case 'google':
        return `
          border-color: ${props.theme.colors.BORDER_GOOGLE};
          background-color: ${props.theme.colors.GOOGLE};
        `;
      case 'kakao':
        return `
          border: none;
          background-color: ${props.theme.colors.KAKAO};
        `;
      default:
        return `
          border-color: ${props.theme.colors.BORDER_DEFAULT};
          background-color: ${props.theme.colors.DEFAULT};
        `;
    }
  }}

  /* disabled (default: false) */
  ${props => {
    const type = props.type || 'default';
    if (type === 'link') {
      return;
    }

    if (props.disabled) {
      return `
        border-color: ${props.theme.colors.BORDER_DEFAULT};
        background-color: ${props.theme.colors.DISABLED};
      `;
    }
  }}
`;

const SButtonText = styled.Text<SButtonTextProps>`
  text-align: center;

  /* size (default : md) */
  ${props => {
    const size = props.size || 'md';
    switch (size) {
      case 'sm':
        return `
          font-size: ${props.theme.fonts.size.XXS};
          font-family: ${props.theme.fonts.family.REGULAR};
        `;
      case 'md':
        return `
          font-size: ${props.theme.fonts.size.XS};
          font-family: ${props.theme.fonts.family.REGULAR};
        `;
      case 'lg':
        return `
          font-size: ${props.theme.fonts.size.M};
          font-family: ${props.theme.fonts.family.BOLD};
        `;
    }
  }}

  /* color */
  ${props => {
    const type = props.type || 'default';
    switch (type) {
      case 'link':
        switch (props.color) {
          case 'muted':
            return `
              color: ${props.theme.colors.MUTED};
            `;
          case 'error':
            return `
              color: ${props.theme.colors.ERROR};
            `;
          default:
            return `
              color: ${props.theme.colors.PRIMARY};
            `;
        }
      case 'default':
        switch (props.color) {
          case 'primary':
            return `
              color: ${props.theme.colors.ON_PRIMARY};
            `;
          case 'error':
            return `
              color: ${props.theme.colors.ERROR};
            `;
          case 'muted':
            return `
              color: ${props.theme.colors.MUTED};
            `;
          case 'dark':
            return `
              color: ${props.theme.colors.WHITE};
            `;
          case 'apple':
            return `
              color: ${props.theme.colors.ON_APPLE};
            `;
          case 'google':
            return `
              color: ${props.theme.colors.ON_GOOGLE};
            `;
          case 'kakao':
            return `
              color: ${props.theme.colors.ON_KAKAO};
            `;
          default:
            return `
              color: ${props.theme.colors.ON_DEFAULT};
            `;
        }
    }
  }} 
  
  /* disabled */
  ${props => {
    return props.disabled && `color: ${props.theme.colors.ON_DISABLED};`;
  }}
`;

const SIcon = styled(Icon)<SIconProps>`
  ${props => {
    const size = props.size || 'md';
    switch (size) {
      case 'sm':
        return `
          width: ${props.theme.fonts.size.S};
          height: ${props.theme.fonts.size.S};;
        `;
      case 'md':
        return `
          width: ${props.theme.fonts.size.M};
          height: ${props.theme.fonts.size.M};;
        `;
      case 'lg':
        return `
          width: ${props.theme.fonts.size.L};
          height: ${props.theme.fonts.size.L};;
        `;
    }
  }}

  ${props => {
    const SIconPosition = props.iconPosition || 'left';
    const SMargin = `margin-${
      props.iconPosition === 'right' ? 'left' : 'right'
    }`;

    const getSpacing = (size: ButtonSize = 'md', isAbsolute: boolean) => {
      switch (size) {
        case 'sm':
          return isAbsolute
            ? props.theme.spacing.SPACE_12
            : props.theme.spacing.SPACE_4;
        case 'md':
          return isAbsolute
            ? props.theme.spacing.SPACE_16
            : props.theme.spacing.SPACE_6;
        case 'lg':
          return isAbsolute
            ? props.theme.spacing.SPACE_20
            : props.theme.spacing.SPACE_8;
      }
    };

    if (props.absoluteIcon) {
      return `
        position:absolute;
        ${SIconPosition} : ${getSpacing(props.size, true)}
      `;
    }

    return `
    ${SMargin}: ${getSpacing(props.size, false)}
    `;
  }}
`;

export default Button;
