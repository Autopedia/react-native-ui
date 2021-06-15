import Option from '@atoms/SelectOption';
import { BaseInputProps } from '@global/types';
import {
  SelectLayout,
  SelectOption,
  SelectSize,
} from '@atoms/SelectOption/SelectOption.types';
import lodash from 'lodash';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';

interface SelectProps<V> {
  defaultValue?: V | null;
  value?: V | null;
  onChange?: (value: V | null) => void;
  options: Array<SelectOption<V>>;
  layout?: SelectLayout;
  size?: SelectSize;
  disabled?: boolean;
}

interface SContainerProps {
  layout?: SelectLayout;
}

const Select = <V extends React.Key>(props: SelectProps<V>) => {
  const [innerValue, setInnerValue] = useState<V | null | undefined>(
    props.defaultValue,
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

export default Select;
