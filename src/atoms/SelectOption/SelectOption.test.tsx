/**
 * @format
 */

import 'react-native';
import 'jest-styled-components';
import React from 'react';
import SelectOption from './SelectOption';
import { shallow } from 'enzyme';

describe('[Button] Unit Test', () => {
  it('should fire onPress event with the value', () => {
    const mockedValue = 'value';
    const onPressMock = jest.fn();

    const selectOption = shallow(
      <SelectOption
        value={mockedValue}
        label="label"
        selected={false}
        onPress={onPressMock}
      />,
    );

    selectOption.simulate('press');
    expect(onPressMock).toHaveBeenCalledTimes(1);
    expect(onPressMock).toHaveBeenCalledWith(mockedValue);
  });
});
