/**
 * @format
 */

import 'react-native';
import 'jest-styled-components';
import React from 'react';
import Button from './Button';
import { Button as RNButton } from 'react-native';
import { shallow } from 'enzyme';

describe('[Button] Unit Test', () => {
  it('should fire onPress event', () => {
    const onPressMock = jest.fn();
    const textMock = 'test';

    const button = shallow(<Button onPress={onPressMock}>{textMock}</Button>);

    button.simulate('press');
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
  it('should not fire onPress event when disabled', () => {
    const onPressMock = jest.fn();
    const textMock = 'test';
    const button = shallow(
      <Button disabled onPress={onPressMock}>
        {textMock}
      </Button>,
    );
    button.simulate('press');
    expect(onPressMock).toHaveBeenCalledTimes(0);
  });
  it('should not fire onPress event when loading', () => {
    const onPressMock = jest.fn();
    const textMock = 'test';
    const button = shallow(
      <Button loading onPress={onPressMock}>
        {textMock}
      </Button>,
    );
    button.simulate('press');
    expect(onPressMock).toHaveBeenCalledTimes(0);
  });
  it('should not fire onPress event when loading and disabled', () => {
    const onPressMock = jest.fn();
    const textMock = 'test';
    const button = shallow(
      <Button loading disabled onPress={onPressMock}>
        {textMock}
      </Button>,
    );
    button.simulate('press');
    expect(onPressMock).toHaveBeenCalledTimes(0);
  });
});
