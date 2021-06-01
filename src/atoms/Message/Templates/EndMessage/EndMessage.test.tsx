/**
 * @format
 */

import 'react-native';
import 'jest-styled-components';
import React from 'react';
import EndMessage from './EndMessage';
import { shallow } from 'enzyme';
import { Alert } from 'react-native';

jest.mock('react-native/Libraries/Alert/Alert', () => ({
  alert: jest.fn(),
}));

describe('[Message/EndMessage] Unit Test', () => {
  it('should fire onPressFinish event', () => {
    const onPressFinishMock = jest.fn();

    const endMessage = shallow(
      <EndMessage type="end" onPressFinish={onPressFinishMock} />,
    );

    endMessage.dive().find('Button').simulate('press');

    //@ts-ignore
    Alert.alert.mock.calls[0][2][1].onPress();

    expect(onPressFinishMock).toHaveBeenCalledTimes(1);
  });

  it('should not fire onPressFinish event when disabled', () => {
    const onPressFinishMock = jest.fn();

    const endMessage = shallow(
      <EndMessage type="end" disabled onPressFinish={onPressFinishMock} />,
    );

    endMessage.dive().find('Button').simulate('press');

    //@ts-ignore
    Alert.alert.mock.calls[0][2][1].onPress();

    expect(onPressFinishMock).not.toHaveBeenCalled();
  });
});
