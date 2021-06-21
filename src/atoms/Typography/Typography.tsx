import {
  HeadingSize,
  ParagraphSize,
  TypographyColor,
} from './Typography.types';
import React from 'react';
import {
  GestureResponderEvent,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import styled from 'styled-components/native';

interface HeadingProps {
  size: HeadingSize;
  color?: TypographyColor | string;
  style?: TextStyle;
}

interface ParagraphProps {
  size?: ParagraphSize;
  color?: TypographyColor | string;
  bold?: boolean;
  selectable?: boolean;
  underlined?: boolean;
  onPress?: (event: GestureResponderEvent) => void;
  style?: TextStyle;
}

const Heading: React.FC<HeadingProps> = ({ children, ...props }) => {
  return <SHeading {...props}>{children}</SHeading>;
};

const Paragraph: React.FC<ParagraphProps> = ({ children, ...props }) => {
  return <SParagraph {...props}>{children}</SParagraph>;
};

const SHeading = styled.Text<HeadingProps>`
  /* size */
  ${props => {
    switch (props.size) {
      case 1:
        return `
          font-size: ${props.theme.fonts.size.XXL};
          font-family: ${props.theme.fonts.family.BOLD};
          margin-bottom: ${props.theme.spacing.SPACE_16};
        `;
      case 2:
        return `
          font-size: ${props.theme.fonts.size.XL};
          font-family: ${props.theme.fonts.family.BOLD};
          margin-bottom: ${props.theme.spacing.SPACE_12};
        `;
      case 3:
        return `
          font-size: ${props.theme.fonts.size.L};
          font-family: ${props.theme.fonts.family.MEDIUM};
          margin-bottom: ${props.theme.spacing.SPACE_12};
        `;
      case 4:
        return `
          font-size: ${props.theme.fonts.size.M};
          font-family: ${props.theme.fonts.family.MEDIUM};
        `;
      case 5:
        return `
          font-size: ${props.theme.fonts.size.S};
          font-family: ${props.theme.fonts.family.MEDIUM};
        `;
    }
  }}

  /* color (default: default) */
   ${props => {
    switch (props.color) {
      case 'primary':
        return `
          color: ${props.theme.colors.PRIMARY};
          text-decoration-color: ${props.theme.colors.PRIMARY};
        `;
      case 'primaryLight':
        return `
          color: ${props.theme.colors.PRIMARY_LIGHT};
          text-decoration-color: ${props.theme.colors.PRIMARY_LIGHT};
        `;
      case 'onPrimary':
        return `
          color: ${props.theme.colors.ON_PRIMARY};
          text-decoration-color: ${props.theme.colors.ON_PRIMARY};
        `;
      case 'error':
        return `
          color: ${props.theme.colors.ERROR};
          text-decoration-color: ${props.theme.colors.ERROR};
        `;
      case 'muted':
        return `
          color: ${props.theme.colors.MUTED};
          text-decoration-color: ${props.theme.colors.MUTED};
        `;
      default:
        return `
          color: ${
            !props.color || props.color === 'default'
              ? props.theme.colors.BLACK
              : props.color
          };
          text-decoration-color: ${
            !props.color || props.color === 'default'
              ? props.theme.colors.BLACK
              : props.color
          };
        `;
    }
  }}
`;

const SParagraph = styled.Text<ParagraphProps>`
  ${props => `
    flex-shrink: 1;
    flex-wrap: wrap;
    font-family: ${props.theme.fonts.family.REGULAR};
  `}

  /* size (default: md) */
  ${props => {
    switch (props.size) {
      case 'xs':
        return `
          font-size: ${props.theme.fonts.size.XXXS};
        `;
      case 'sm':
        return `
          font-size: ${props.theme.fonts.size.XXS};
        `;
      case 'lg':
        return `
          font-size: ${props.theme.fonts.size.S};
        `;
      default:
        return `
          font-size: ${props.theme.fonts.size.XS};
        `;
    }
  }}

  /* color (default: default) */
  ${props => {
    switch (props.color) {
      case 'dark':
        return `
          color: ${props.theme.colors.DARK};
          text-decoration-color: ${props.theme.colors.DARK};
        `;
      case 'primary':
        return `
          color: ${props.theme.colors.PRIMARY};
          text-decoration-color: ${props.theme.colors.PRIMARY};
        `;
      case 'primaryLight':
        return `
          color: ${props.theme.colors.PRIMARY_LIGHT};
          text-decoration-color: ${props.theme.colors.PRIMARY_LIGHT};
        `;
      case 'primaryExtraLight':
        return `
          color: ${props.theme.colors.PRIMARY_EXTRALIGHT};
          text-decoration-color: ${props.theme.colors.PRIMARY_EXTRALIGHT};
        `;
      case 'onPrimary':
        return `
          color: ${props.theme.colors.ON_PRIMARY};
          text-decoration-color: ${props.theme.colors.ON_PRIMARY};
        `;
      case 'onPrimaryDark':
        return `
          color: ${props.theme.colors.ON_PRIMARY_DARK};
          text-decoration-color: ${props.theme.colors.ON_PRIMARY_DARK};
        `;
      case 'onCard':
        return `
          color: ${props.theme.colors.ON_CARD};
          text-decoration-color: ${props.theme.colors.ON_CARD};
        `;
      case 'error':
        return `
          color: ${props.theme.colors.ERROR};
          text-decoration-color: ${props.theme.colors.ERROR};
        `;
      case 'muted':
        return `
          color: ${props.theme.colors.MUTED};
          text-decoration-color: ${props.theme.colors.MUTED};
        `;
      case 'onBackgroundDark':
        return `
          color: ${props.theme.colors.ON_BACKGROUND_DARK};
          text-decoration-color: ${props.theme.colors.ON_BACKGROUND_DARK};
        `;
      default:
        return `
          color: ${
            !props.color || props.color === 'default'
              ? props.theme.colors.EXTRADARK
              : props.color
          };
          text-decoration-color: ${
            !props.color || props.color === 'default'
              ? props.theme.colors.EXTRADARK
              : props.color
          };
        `;
    }
  }}

  /* bold (default: false) */
  ${props =>
    props.bold &&
    `
      font-family: ${props.theme.fonts.family.MEDIUM};
  `}

  /* touchable */
  ${props =>
    props.onPress &&
    `
      text-decoration-line: underline;
  `}

  /* underlined */
  ${props => props.underlined === true && 'text-decoration-line: underline;'}
  ${props => props.underlined === false && 'text-decoration-line: none;'}
`;

export default { Heading, Paragraph };
