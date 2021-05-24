/**
 * @format
 */

import 'react-native';
import 'jest-styled-components';
import React from 'react';
import Checkbox from './Checkbox';
import { shallow } from 'enzyme';

describe('[Checkbox] Unit Test', () => {
  it('should fire onChange event with the value', () => {
    const onChangeMock = jest.fn();

    const checkbox = shallow(
      <Checkbox defaultValue={false} onChange={onChangeMock} />,
    );

    checkbox.simulate('press');
    expect(onChangeMock).toHaveBeenCalledTimes(1);
    expect(onChangeMock).toHaveBeenCalledWith(true);
  });
});
