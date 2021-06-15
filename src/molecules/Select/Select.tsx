import ASelectOption from '@atoms/SelectOption';
import {
  BaseInputProps,
  SelectLayout,
  SelectOption,
  SelectSize,
} from './Select.types';
import lodash from 'lodash';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';

interface SelectProps<V> extends BaseInputProps<V> {
  options: Array<SelectOption<V>>;
  layout?: SelectLayout;
  size?: SelectSize;
  disabled?: boolean;
  value?: V | null;
}

interface SContainerProps {
  layout?: SelectLayout;
}

const Select = <V extends React.Key>(props: SelectProps<V>) => {
  const [innerValue, setInnerValue] = useState<V>(
    props.defaultValue || props.options[0]?.value,
  );

  const selectValue = props.value || innerValue;

  const onPress = (newValue: V) => {
    if (props.value || props.disabled) return;
    props.onChange?.(newValue);
    setInnerValue(newValue);
  };

  const containerProps: SContainerProps = lodash.pick(props, 'layout');

  const makeOptions = (options: Array<SelectOption<V>>) => {
    const commonProps = lodash.omit(props, 'options');

    return options.map((option, index) => {
      const optionProps = {
        ...commonProps,
        ...option,
        key: option.value,
        first: index === 0,
        last: index === props.options.length,
        selected: option.value === selectValue,
        onPress,
      };

      return <Option {...optionProps} />;
    });
  };

  useEffect(() => {
    if (props.defaultValue) {
      setInnerValue(props.defaultValue);
    }
  }, [props.defaultValue]);

  return (
    <SContainer {...containerProps}>{makeOptions(props.options)}</SContainer>
  );
};

const SContainer = styled.View<SContainerProps>`
  flex-wrap: wrap;
  /* layout (default: inline) */
  ${props => {
    switch (props.layout) {
      case 'inline':
        return `
          flex-direction: row;
        `;
      case 'block':
        break;
    }
  }}
`;

export type SelectElement<V> = React.ReactElement<
  SelectProps<V>,
  typeof Select
>;
export const Option = ASelectOption;
export default Select;
