/**
 * @format
 */

import 'react-native';
import 'jest-styled-components';
import React from 'react';
import Button from './Button';
import { shallow } from 'enzyme';

describe('[Button] Unit Test', () => {
  it('should fire onPress event', () => {
    const onPressMock = jest.fn();
    const textMock = 'test';

    const button = shallow(<Button onPress={onPressMock}>{textMock}</Button>);

    button.simulate('press');
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
