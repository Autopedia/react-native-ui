/**
 * @format
 */

import 'react-native';
import 'jest-styled-components';
import React from 'react';
import OutdatedMessage from './OutdatedMessage';
import { shallow } from 'enzyme';

describe('[Message/OutdatedMessage] Unit Test', () => {
  it('should fire onPressFinish event', () => {
    const onPressFinishMock = jest.fn();

    const outdatedMessage = shallow(
      <OutdatedMessage type="outdated" onPressFinish={onPressFinishMock} />,
    );

    outdatedMessage.dive().find('Button').simulate('press');
    expect(onPressFinishMock).toHaveBeenCalledTimes(1);
  });
});
