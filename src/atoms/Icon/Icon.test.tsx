/**
 * @format
 */

import 'react-native';
import 'jest-styled-components';
import React from 'react';
import Icon from './Icon';
import { shallow } from 'enzyme';

describe('[Icon] Unit Test', () => {
  it('should fire onPress event if touchable', () => {
    const onPressMock = jest.fn();

    const icon = shallow(
      <Icon
        source={require('../../assets/icons/camera/camera.png')}
        touchable
        onPress={onPressMock}
      ></Icon>,
    );

    icon.simulate('press');
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('should not fire onPress event if not touchable', () => {
    const onPressMock = jest.fn();

    const icon = shallow(
      <Icon
        source={require('../../assets/icons/camera/camera.png')}
        onPress={onPressMock}
      ></Icon>,
    );

    icon.simulate('press');
    expect(onPressMock).toHaveBeenCalledTimes(0);
  });

  it('should not fire onPress event if disabled', () => {
    const onPressMock = jest.fn();

    const icon = shallow(
      <Icon
        source={require('../../assets/icons/camera/camera.png')}
        disabled
        onPress={onPressMock}
      ></Icon>,
    );

    icon.simulate('press');
    expect(onPressMock).toHaveBeenCalledTimes(0);
  });

  it('should not fire onPress event if touchable, but disabled', () => {
    const onPressMock = jest.fn();

    const icon = shallow(
      <Icon
        source={require('../../assets/icons/camera/camera.png')}
        touchable
        disabled
        onPress={onPressMock}
      ></Icon>,
    );

    icon.simulate('press');
    expect(onPressMock).toHaveBeenCalledTimes(0);
  });
});
