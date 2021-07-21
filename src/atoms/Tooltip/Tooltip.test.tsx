/**
 * @format
 */

import 'react-native';
import 'jest-styled-components';

import { shallow } from 'enzyme';
import React from 'react';

import { STooltipProps, Tooltip } from './Tooltip';

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
    const props = container.props() as STooltipProps;

    expect(props.layoutHeight).toEqual(TEST_SIZE);
    expect(props.layoutWidth).toEqual(TEST_SIZE);
  });
});
