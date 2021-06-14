/**
 * @format
 */

import 'react-native';
import 'jest-styled-components';
import React from 'react';
import ListItem from '.';
import { shallow } from 'enzyme';

describe('[ListItem] Unit Test', () => {
  it('should fire onPress event', () => {
    const onPressMock = jest.fn();

    const listitem = shallow(<ListItem label="test" onPress={onPressMock} />);

    listitem.simulate('press');
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
