/**
 * @format
 */

import 'react-native';
import 'jest-styled-components';
import React from 'react';
import EndMessage from './EndMessage';
import { shallow } from 'enzyme';

describe('[Message/EndMessage] Unit Test', () => {
  it('should fire onPressFinish event', () => {
    const onPressFinishMock = jest.fn();

    const endMessage = shallow(
      <EndMessage type="end" onPressFinish={onPressFinishMock} />,
    );

    endMessage.simulate('press');
    expect(onPressFinishMock).toHaveBeenCalledTimes(1);
  });
});
