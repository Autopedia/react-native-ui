/**
 * @format
 */

import 'react-native';
import 'jest-styled-components';
import React from 'react';
import Icon from './Icon';
import { shallow } from 'enzyme';

describe('[Icon] Unit Test', () => {
  it('should fire onPress event if onPress prop exists', () => {
    const onPressMock = jest.fn();

    const icon = shallow(
      <Icon
        source={require('../../assets/icons/camera/camera.png')}
        onPress={onPressMock}
      ></Icon>,
    );

    icon.simulate('press');
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('should not fire onPress event if onPress prop exists, but disabled', () => {
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
});
