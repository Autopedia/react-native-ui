/**
 * @format
 */

import 'react-native';
import 'jest-styled-components';
import React from 'react';
import { shallow } from 'enzyme';
import Typography from '@atoms/Typography';

describe('[Typography] Unit Test', () => {
  it('should fire onPress event of paragraph', () => {
    const onPressMock = jest.fn();
    const wrapper = shallow(<Typography.Paragraph onPress={onPressMock} />);

    wrapper.simulate('press');
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
