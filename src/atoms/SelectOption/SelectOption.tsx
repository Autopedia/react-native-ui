import Color from 'color';
import lodash from 'lodash';
import React from 'react';
import styled from 'styled-components/native';

import { IterableProps } from '../../global/types';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { getValidatedColor } from '../../utils/validator';
import { SelectLayout, SelectSize } from './SelectOption.types';

interface SelectOptionProps<V> extends IterableProps {
  value: V;
  selected: boolean;
  label: string;
  sublabel?: string;
  color?: string;
  textColor?: string;
  disabled?: boolean;
  size?: SelectSize;
  layout?: SelectLayout;
  onPress: (value: V) => void;
}

interface SContainerProps extends IterableProps {
  selected: boolean;
  disabled?: boolean;
  sublabelExists?: boolean;
  size?: SelectSize;
  color?: string;
  layout?: SelectLayout;
  onPress: (value: any) => void;
}
interface SLabelProps {
  selected: boolean;
  disabled?: boolean;
  size?: SelectSize;
  textColor?: string;
  layout?: SelectLayout;
}

const SelectOption = <V extends unknown>(
  props: React.PropsWithChildren<SelectOptionProps<V>>,
) => {
  const containerProps: SContainerProps = {
    ...props,
    sublabelExists: !!props.sublabel,
    onPress: () => {
      props.onPress(props.value);
    },
  };
  const labelProps: SLabelProps = lodash.omit(props, [
    'label',
    'sublabel',
    'onPress',
  ]);

  const sublabelShouldDisplay =
    props.layout === 'block' &&
    props.sublabel &&
    props.sublabel.trim().length > 0;

  return (
    <SContainer {...containerProps} activeOpacity={0.7}>
      <SLabel {...labelProps}>{props.label}</SLabel>
      {sublabelShouldDisplay ? (
        <SSubLabel {...labelProps}>{props.sublabel}</SSubLabel>
      ) : null}
    </SContainer>
  );
};

const SContainer = styled.TouchableOpacity<SContainerProps>`
  border-width: 1px;
  border-radius: 20px;
  padding: 10px 18px;

  /* layout (default: inline) */
  ${props => {
    switch (props.layout) {
      case 'block':
        return `
          margin: 2px 0px;
          ${props.first ? 'margin-top: 0px;' : ''}
          ${props.last ? 'margin-bottom: 0px;' : ''}
          ${props.sublabelExists ? `padding: 12px;` : ''}
        `;
      case 'column':
        return `
          flex: 1;
          justify-content: center;
          margin: 5px 3px;
        `;
      default:
        return `
          flex-direction: row;
          justify-content: center;
          margin-right: 4px;
        `;
    }
  }}

  /* size (default: md) */
  ${props => {
    if (props.layout === 'block' && props.size === 'sm') {
      return `padding: 8px 12px;`;
    }
  }}

  /* selected */
  ${props => {
    const color = getValidatedColor(props.color || 'black');
    const unselectedColor = Color(color).alpha(0.5).string();

    return `
      border-color: ${props.selected ? color : unselectedColor};
    `;
  }}

  /* disabled (default: false) */
  ${props => {
    switch (props.disabled) {
      case true:
        return `
          background-color: ${colors.DISABLED};
          border-color: ${colors.BORDER_DISABLED};
        `;
    }
  }}
`;

const SLabel = styled.Text<SLabelProps>`
  /* layout (default: inline) */
  ${props => {
    switch (props.layout) {
      case 'block':
        return `
          font-family: ${fonts.family.MEDIUM};
        `;
      case 'column':
        return `
          font-family: ${fonts.family.REGULAR};
          font-size: ${fonts.size.XS}px;
          line-height: ${fonts.lineHeight.XS}px;
          text-align: center;
        `;
      default:
        return `
          font-family: ${fonts.family.REGULAR};
          font-size: ${fonts.size.XS}px;
          line-height: ${fonts.lineHeight.XS}px;
        `;
    }
  }}

  /* size (defulat: md) */
  ${props => {
    if (props.layout === 'block') {
      switch (props.size) {
        case 'sm':
          return `
            font-size: ${fonts.size.XS}px;
            line-height: ${fonts.lineHeight.XS}px;
          `;
        default:
          return `
            font-size: ${fonts.size.S}px;
            line-height: ${fonts.lineHeight.S}px;
          `;
      }
    }
  }}

  ${props => {
    const textColor = getValidatedColor(props.textColor || 'black');
    return `
        color: ${textColor}
      `;
  }}

  /* selected */
  ${props => {
    switch (props.selected) {
      case true:
        return `
          font-family: ${fonts.family.MEDIUM};
        `;
      case false:
        return 'opacity:0.7;';
    }
  }}

  /* disabled (default: false) */
  ${props => {
    switch (props.disabled) {
      case true:
        return `
          color: ${colors.ON_DISABLED};
        `;
    }
  }}
`;

const SSubLabel = styled.Text<SLabelProps>`
  font-size: ${fonts.size.XXS}px;
  line-height: ${fonts.lineHeight.XXS}px;

  ${props => {
    const textColor = getValidatedColor(props.textColor || 'black');
    return `
        color: ${textColor}
      `;
  }}

  /* selected */
  ${props => {
    switch (props.selected) {
      case true:
        return `
          font-family: ${fonts.family.REGULAR};
        `;
      case false:
        return `
          font-family: ${fonts.family.LIGHT};
          opacity: 0.5;
        `;
    }
  }}

  /* disabled (default: false) */
  ${props => {
    switch (props.disabled) {
      case true:
        return `
          color: ${colors.ON_DISABLED};
        `;
    }
  }}
`;

export default SelectOption;
