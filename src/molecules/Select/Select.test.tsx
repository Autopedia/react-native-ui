/**
 * @format
 */

import 'react-native';
import 'jest-styled-components';
import React from 'react';
import Select from './Select';
import { shallow } from 'enzyme';
import { SelectOption } from '../../atoms/SelectOption/SelectOption.types';

describe('[Select] Unit Test', () => {
  const dummyOptions: SelectOption<string>[] = [
    { value: 'Option 1', label: 'Option 1' },
    {
      value: 'Option 2',
      label: 'Option 2 With LOOOONG NAME',
      sublabel: 'With Sublabel',
    },
    { value: 'Option 3', label: 'Option 3' },
  ];

  it('should fire onChange event', () => {
    const onChangeMock = jest.fn();
    const select = shallow(
      <Select options={dummyOptions} onChange={onChangeMock} />,
    );

    const selectOption = select.find('SelectOption').at(1).dive();

    selectOption.simulate('press');

    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(dummyOptions[1].value);
  });

  it('should not fire onChange event when disabled', () => {
    const onChangeMock = jest.fn();
    const select = shallow(
      <Select options={dummyOptions} onChange={onChangeMock} disabled />,
    );

    const selectOption = select.find('SelectOption').at(1);

    selectOption.simulate('press');

    expect(onChangeMock).not.toHaveBeenCalled();
  });
});
