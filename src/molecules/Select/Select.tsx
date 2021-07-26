import lodash from 'lodash';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';

import Option from '../../atoms/SelectOption';
import {
  SelectLayout,
  SelectOption,
  SelectSize,
} from '../../atoms/SelectOption/SelectOption.types';

interface SelectProps<V> {
  defaultValue?: V | V[] | null;
  value?: V | V[] | null;
  onChange?: (value: V) => void;
  options: Array<SelectOption<V>>;
  layout?: SelectLayout;
  size?: SelectSize;
  disabled?: boolean;
}

interface SContainerProps {
  layout?: SelectLayout;
}

const Select = <V extends React.Key>(props: SelectProps<V>) => {
  const [innerValue, setInnerValue] = useState<V | V[] | null | undefined>(
    props.defaultValue,
  );

  const selectValue = props.value || innerValue;

  const onPress = (newValue: V) => {
    if (props.disabled) {
      return;
    }

    props.onChange?.(newValue);

    if (Array.isArray(innerValue)) {
      if (innerValue.includes(newValue)) {
        setInnerValue(innerValue.filter(v => v !== newValue));
      } else {
        setInnerValue([...innerValue, newValue]);
      }
    } else {
      if (innerValue === newValue) {
        setInnerValue(null);
      } else {
        setInnerValue(newValue);
      }
    }
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
        selected: Array.isArray(selectValue)
          ? selectValue.includes(option.value)
          : option.value === selectValue,
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
