import {
  IterableProps,
  SelectLayout,
  SelectSize,
  SelectOption as TSelectOption,
} from './SelectOption.types';
import lodash from 'lodash';
import React from 'react';
import styled from 'styled-components/native';

interface SelectOptionProps<V> extends IterableProps {
  value: V;
  selected: boolean;
  label: string;
  sublabel?: string;
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
  layout?: SelectLayout;
  onPress: (value: any) => void;
}
interface SLabelProps {
  selected: boolean;
  disabled?: boolean;
  size?: SelectSize;
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
  ${props => `
    border-width: ${props.theme.border.BORDER_WIDTH};
    border-radius: ${props.theme.border.BORDER_RADIUS};
    padding: ${props.theme.spacing.SPACE_8} ${props.theme.spacing.SPACE_12};
  `}

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
    switch (props.selected) {
      case true:
        return `
          background-color: ${props.theme.colors.SELECT};
          border-color: ${props.theme.colors.BORDER_SELECT};
        `;
      case false:
        return `
          background-color: ${props.theme.colors.UNSELECT};
          border-color: ${props.theme.colors.BORDER_UNSELECT};
        `;
    }
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

  /* selected */
  ${props => {
    switch (props.selected) {
      case true:
        return `
          color: ${props.theme.colors.ON_SELECT};
        `;
      case false:
        return `
          color: ${props.theme.colors.ON_UNSELECT};
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

const SSubLabel = styled.Text<SLabelProps>`
  ${props => `
    font-family: ${props.theme.fonts.family.REGULAR};
    font-size: ${props.theme.fonts.size.XXS};
  `}

  /* selected */
  ${props => {
    switch (props.selected) {
      case true:
        return `
          color: ${props.theme.colors.ON_SELECT};
        `;
      case false:
        return `
          color: ${props.theme.colors.ON_UNSELECT};
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
