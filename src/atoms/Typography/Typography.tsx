import React from 'react';
import { GestureResponderEvent, TextStyle } from 'react-native';
import styled from 'styled-components/native';

import fonts from '../../styles/fonts';
import { getValidatedColor } from '../../utils/validator';
import {
  HeadingSize,
  ParagraphSize,
  TypographyFontWeight,
} from './Typography.types';

interface HeadingProps {
  size: HeadingSize;
  color?: string;
  fontWeight?: TypographyFontWeight;
  style?: TextStyle;
}

interface ParagraphProps {
  size: ParagraphSize;
  color?: string;
  fontWeight?: TypographyFontWeight;
  selectable?: boolean;
  underlined?: boolean;
  numberOfLines?: number;
  onPress?: (event: GestureResponderEvent) => void;
  style?: TextStyle;
}

interface CaptionProps {
  color?: string;
  fontWeight?: TypographyFontWeight;
  style?: TextStyle;
}

const Heading: React.FC<HeadingProps> = ({ children, ...props }) => {
  return <SHeading {...props}>{children}</SHeading>;
};

const Paragraph: React.FC<ParagraphProps> = ({ children, ...props }) => {
  return <SParagraph {...props}>{children}</SParagraph>;
};

const Caption: React.FC<CaptionProps> = ({ children, ...props }) => {
  return <SCaption {...props}>{children}</SCaption>;
};

const SHeading = styled.Text<HeadingProps>`
  /* size */
  ${props => {
    switch (props.size) {
      case 1:
        return `
          font-size: ${fonts.size.XXL}px;
          line-height: ${fonts.lineHeight.XXL}px;
          font-family: ${fonts.family.BOLD};
        `;
      case 2:
        return `
          font-size: ${fonts.size.XL}px;
          line-height: ${fonts.lineHeight.XL}px;
          font-family: ${fonts.family.BOLD};
        `;
      case 3:
        return `
          font-size: ${fonts.size.L}px;
          line-height: ${fonts.lineHeight.L}px;
          font-family: ${fonts.family.BOLD};
        `;
      case 4:
        return `
          font-size: ${fonts.size.M}px;
          line-height: ${fonts.lineHeight.M}px;
          font-family: ${fonts.family.BOLD};
        `;
      case 5:
        return `
          font-size: ${fonts.size.S}px;
          line-height: ${fonts.lineHeight.S}px;
          font-family: ${fonts.family.BOLD};
        `;
    }
  }}

  /* color (default: black) */
   ${props => {
    return `
      color: ${getValidatedColor(props.color || 'black')}
    `;
  }}

  /* fontWeight (default: bold)*/
  ${props => {
    if (props.fontWeight) {
      const family = fonts.family;
      type FontFamilyKey = keyof typeof family;
      return `
        font-family: ${
          fonts.family[props.fontWeight.toUpperCase() as FontFamilyKey]
        }
      `;
    }
    return `
      font-family: ${fonts.family.BOLD}
    `;
  }}
`;

const SParagraph = styled.Text<ParagraphProps>`
  flex-shrink: 1;
  flex-wrap: wrap;

  /* size */
  ${props => {
    switch (props.size) {
      case 1:
        return `
          font-size: ${fonts.size.S}px;
          line-height: ${fonts.lineHeight.S}px;
        `;
      case 2:
        return `
          font-size: ${fonts.size.XS}px;
          line-height: ${fonts.lineHeight.XS}px;
        `;
    }
  }}

  /* color (default: black) */
  ${props => {
    return `
      color: ${getValidatedColor(props.color || 'black')}
    `;
  }}

  /* fontWeight (default: regular)*/
  ${props => {
    if (props.fontWeight) {
      const family = fonts.family;
      type FontFamilyKey = keyof typeof family;
      return `
        font-family: ${
          fonts.family[props.fontWeight.toUpperCase() as FontFamilyKey]
        }
      `;
    }
    return `
      font-family: ${fonts.family.REGULAR}
    `;
  }}

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

const SCaption = styled.Text<CaptionProps>`
  font-size: ${fonts.size.XXS}px;
  line-height: ${fonts.lineHeight.XXS}px;

  /* color (default: black) */
  ${props => {
    return `
      color: ${getValidatedColor(props.color || 'black')}
    `;
  }}
  /* fontWeight (default: bold)*/
    ${props => {
    if (props.fontWeight) {
      const family = fonts.family;
      type FontFamilyKey = keyof typeof family;
      return `
        font-family: ${
          fonts.family[props.fontWeight.toUpperCase() as FontFamilyKey]
        }
      `;
    }
    return `
      font-family: ${fonts.family.MEDIUM}
    `;
  }};
`;

export default { Heading, Paragraph, Caption };
