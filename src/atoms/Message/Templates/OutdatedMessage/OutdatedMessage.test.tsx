/**
 * @format
 */

import 'react-native';
import 'jest-styled-components';

import { shallow } from 'enzyme';
import React from 'react';

import { OutdatedMessage } from './OutdatedMessage';
import { Alert } from 'react-native';

jest.mock('react-native/Libraries/Alert/Alert', () => ({
  alert: jest.fn(),
}));

describe('[Message/OutdatedMessage] Unit Test', () => {
  it('should fire onPressFinish event', () => {
    const onPressFinishMock = jest.fn();

    const outdatedMessage = shallow(
      <OutdatedMessage type="outdated" onPressFinish={onPressFinishMock} />,
    );

    outdatedMessage.dive().find('Button').simulate('press');

    //@ts-ignore
    Alert.alert.mock.calls[0][2][1].onPress();

    expect(onPressFinishMock).toHaveBeenCalledTimes(1);
  });

  it('should not fire onPressFinish event when disabled', () => {
    const onPressFinishMock = jest.fn();

    const outdatedMessage = shallow(
      <OutdatedMessage
        type="outdated"
        disabled
        onPressFinish={onPressFinishMock}
      />,
    );

    outdatedMessage.dive().find('Button').simulate('press');

    //@ts-ignore
    Alert.alert.mock.calls[0][2][1].onPress();

    expect(onPressFinishMock).not.toHaveBeenCalled();
  });
});
