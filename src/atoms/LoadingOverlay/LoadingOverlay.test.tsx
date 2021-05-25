/**
 * @format
 */

import 'react-native';
import 'jest-styled-components';
import React from 'react';
import LoadingOverlay from './LoadingOverlay';
import { shallow } from 'enzyme';
import { View, Text } from 'react-native';

describe('[LoadingOverlay] Unit Test', () => {
  it('should not be able to press components behind the overlay', () => {
    const onPressMock = jest.fn();
    const ComponentBehindOverlay = () => <Text onPress={onPressMock}></Text>;
    const Container = () => (
      <View>
        <LoadingOverlay />
        <ComponentBehindOverlay />
      </View>
    );

    const wrapper = shallow(<Container />);

    wrapper.find('ComponentBehindOverlay').simulate('press');
    expect(onPressMock).toHaveBeenCalledTimes(0);
  });
});
