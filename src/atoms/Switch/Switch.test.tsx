/**
 * @format
 */

import 'react-native';
import 'jest-styled-components';
import React from 'react';
import Switch from './Switch';
import { shallow } from 'enzyme';

describe('[Switch] Unit Test', () => {
  it('should fire onValueChange event with value', () => {
    const onValueChangeMock = jest.fn();

    const SSwitch = shallow(
      <Switch value={true} onValueChange={onValueChangeMock} />,
    );

    SSwitch.simulate('valueChange', false);
    expect(onValueChangeMock).toHaveBeenCalledTimes(1);
    expect(onValueChangeMock).toHaveBeenCalledWith(false);
  });

  it('should not fire onValueChange event when disabled', () => {
    const onValueChangeMock = jest.fn();

    const SSwitch = shallow(
      <Switch value={true} disabled onValueChange={onValueChangeMock} />,
    );

    SSwitch.simulate('valueChange', false);
    expect(onValueChangeMock).toHaveBeenCalledTimes(0);
  });
});
