/**
 * @format
 */

import 'react-native';
import 'jest-styled-components';

import { shallow } from 'enzyme';
import React from 'react';

import { Tooltip } from './Tooltip';

import { Text } from 'react-native';

describe('[Tooltip] Unit Test', () => {
  it('should fire layout event', () => {
    const TEST_SIZE = 120;
    const mockLayoutEvent = {
      nativeEvent: {
        layout: {
          width: TEST_SIZE,
          height: TEST_SIZE,
        },
      },
    };

    const wrapper = shallow(
      <Tooltip message="tooltip">
        <Text>Test</Text>
      </Tooltip>,
    );
    wrapper.simulate('layout', mockLayoutEvent);

    const container = wrapper.find('Styled(View)').at(1);

    //@ts-ignore
    expect(container.props().layoutHeight).toEqual(TEST_SIZE);
    //@ts-ignore
    expect(container.props().layoutWidth).toEqual(TEST_SIZE);
  });
});
