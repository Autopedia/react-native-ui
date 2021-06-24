import { IterableProps } from '@global/types';
import { SelectLayout, SelectSize } from './SelectOption.types';
import lodash from 'lodash';
import React from 'react';
import styled from 'styled-components/native';
import {
  SystemColor,
  SystemColorKey,
  SystemColorMain,
  systemColorMap,
  systemColors,
} from '@styles/sytem-colors';

interface SelectOptionProps<V> extends IterableProps {
  value: V;
  selected: boolean;
  label: string;
  sublabel?: string;
  solid?: boolean;
  color?: SystemColorMain;
  textColor?: SystemColor | string;
  disabled?: boolean;
  size?: SelectSize;
  layout?: SelectLayout;
  onPress: (value: V) => void;
}

interface SContainerProps extends IterableProps {
  selected: boolean;
  disabled?: boolean;
  sublabelExists?: boolean;
  solid?: boolean;
  size?: SelectSize;
  color?: SystemColorMain | 'black';
  layout?: SelectLayout;
  onPress: (value: any) => void;
}
interface SLabelProps {
  selected: boolean;
  disabled?: boolean;
  size?: SelectSize;
  solid?: boolean;
  textColor?: SystemColor | string;
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
  /* solid (default: false) */
  ${props => {
    if (props.solid) {
      const color = props.color || 'primary';
      return `
        background-color: ${
          systemColors[systemColorMap[color] as SystemColorKey]
        };
        border-radius: ${props.theme.spacing.SPACE_20};
        padding: ${props.theme.spacing.SPACE_8} ${props.theme.spacing.SPACE_12};
      `;
    }
    return `
      border-width: ${props.theme.border.BORDER_WIDTH};
      border-radius: ${props.theme.spacing.SPACE_20};
      padding: ${props.theme.spacing.SPACE_8} ${props.theme.spacing.SPACE_12};
    `;
  }}

  /* layout (default: inline) */
  ${props => {
    switch (props.layout) {
      case 'block':
        return `
          margin: ${props.theme.spacing.SPACE_2} 0px;
          ${props.first ? 'margin-top: 0px;' : ''}
          ${props.last ? 'margin-bottom: 0px;' : ''}
          ${
            props.sublabelExists
              ? `padding: ${props.theme.spacing.SPACE_12};`
              : ''
          }
        `;
      case 'column':
        return `
          flex: 1;
          justify-content: center;
          margin: ${props.theme.spacing.SPACE_5} ${props.theme.spacing.SPACE_3};
        `;
      default:
        return `
          flex-direction: row;
          justify-content: center;
          margin: ${props.theme.spacing.SPACE_2};
        `;
    }
  }}

  /* size (default: md) */
  ${props => {
    if (props.layout === 'block' && props.size === 'sm') {
      return `padding: ${props.theme.spacing.SPACE_8} ${props.theme.spacing.SPACE_12};`;
    }
  }}

  /* selected */
  ${props => {
    const color = props.color || props.solid ? 'primary' : 'black';

    const defaultColor =
      systemColors[systemColorMap[color as SystemColor] as SystemColorKey];
    const lightColor =
      color === 'black'
        ? props.theme.colors.GRAY_400
        : systemColors[
            systemColorMap[(color + '_light') as SystemColor] as SystemColorKey
          ];
    const darkColor =
      color === 'black'
        ? 'black'
        : systemColors[
            systemColorMap[(color + '_dark') as SystemColor] as SystemColorKey
          ];
    if (props.selected) {
      switch (props.solid) {
        case true:
          return `
            background-color: ${darkColor};
          `;
        default:
          return `
            border-color: ${defaultColor};
          `;
      }
    }

    return `
      border-color: ${lightColor};
    `;
  }}

  /* disabled (default: false) */
  ${props => {
    switch (props.disabled) {
      case true:
        return `
          background-color: ${props.theme.colors.DISABLED};
          border-color: ${props.theme.colors.BORDER_DISABLED};
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
          font-family: ${props.theme.fonts.family.MEDIUM};
        `;
      case 'column':
        return `
          font-family: ${props.theme.fonts.family.REGULAR};
          font-size: ${props.theme.fonts.size.XS};
          text-align: center;
        `;
      default:
        return `
          font-family: ${props.theme.fonts.family.REGULAR};
          font-size: ${props.theme.fonts.size.XS};
        `;
    }
  }}

  /* size (defulat: md) */
  ${props => {
    if (props.layout === 'block') {
      switch (props.size) {
        case 'sm':
          return `font-size: ${props.theme.fonts.size.XS};`;
        default:
          return `font-size: ${props.theme.fonts.size.S};`;
      }
    }
  }}

  ${props => {
    const deafaultTextColor = props.solid ? 'white' : 'black';

    const textColor = props.textColor || deafaultTextColor;
    return `
        color: ${
          systemColors[
            systemColorMap[textColor as SystemColor] as SystemColorKey
          ]
        }
      `;
  }}

  /* selected */
  ${props => {
    switch (props.selected) {
      case true:
        return `
          font-family: ${props.theme.fonts.family.MEDIUM}
        `;
      case false:
        return props.solid ? '' : `opacity: 0.5`;
    }
  }}

  /* disabled (default: false) */
  ${props => {
    switch (props.disabled) {
      case true:
        return `
          color: ${props.theme.colors.ON_DISABLED};
        `;
    }
  }}
`;

const SSubLabel = styled.Text<SLabelProps>`
  ${props => `
    font-size: ${props.theme.fonts.size.XXS};
  `}

  ${props => {
    const deafaultTextColor = props.solid ? 'white' : 'black';

    const textColor = props.textColor || deafaultTextColor;
    return `
        color: ${
          systemColors[
            systemColorMap[textColor as SystemColor] as SystemColorKey
          ]
        }
      `;
  }}

  /* selected */
  ${props => {
    switch (props.selected) {
      case true:
        return `
          font-family: ${props.theme.fonts.family.REGULAR};
        `;
      case false:
        return `
          font-family: ${props.theme.fonts.family.LIGHT};
          ${props.solid ? '' : `opacity: 0.5`};
        `;
    }
  }}

  /* disabled (default: false) */
  ${props => {
    switch (props.disabled) {
      case true:
        return `
          color: ${props.theme.colors.ON_DISABLED};
        `;
    }
  }}
`;

export default SelectOption;
