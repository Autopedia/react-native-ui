import {
  HeadingSize,
  ParagraphSize,
  TypographyFontWeight,
} from './Typography.types';
import React from 'react';
import { GestureResponderEvent, TextStyle } from 'react-native';
import styled from 'styled-components/native';
import { getValidatedColor } from '../../utils/validator';

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
          font-family: ${props.theme.fonts.family.BOLD};
          margin-bottom: ${props.theme.spacing.SPACE_12};
        `;
      case 4:
        return `
          font-size: ${props.theme.fonts.size.M};
          font-family: ${props.theme.fonts.family.BOLD};
        `;
      case 5:
        return `
          font-size: ${props.theme.fonts.size.S};
          font-family: ${props.theme.fonts.family.BOLD};
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
      const family = props.theme.fonts.family;
      type FontFamilyKey = keyof typeof family;
      return `
        font-family: ${
          props.theme.fonts.family[
            props.fontWeight.toUpperCase() as FontFamilyKey
          ]
        }
      `;
    }
    return `
      font-family: ${props.theme.fonts.family.BOLD}
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
          font-size: ${props.theme.fonts.size.S};
        `;
      case 2:
        return `
          font-size: ${props.theme.fonts.size.XS};
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
      const family = props.theme.fonts.family;
      type FontFamilyKey = keyof typeof family;
      return `
        font-family: ${
          props.theme.fonts.family[
            props.fontWeight.toUpperCase() as FontFamilyKey
          ]
        }
      `;
    }
    return `
      font-family: ${props.theme.fonts.family.REGULAR}
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
  ${props => `font-size: ${props.theme.fonts.size.XXS}`}
  /* color (default: black) */
  ${props => {
    return `
      color: ${getValidatedColor(props.color || 'black')}
    `;
  }}

  /* fontWeight (default: bold)*/
  ${props => {
    if (props.fontWeight) {
      const family = props.theme.fonts.family;
      type FontFamilyKey = keyof typeof family;
      return `
        font-family: ${
          props.theme.fonts.family[
            props.fontWeight.toUpperCase() as FontFamilyKey
          ]
        }
      `;
    }
    return `
      font-family: ${props.theme.fonts.family.MEDIUM}
    `;
  }}
`;

export default { Heading, Paragraph, Caption };
