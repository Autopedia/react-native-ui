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

  it('should fire onValueChange event without onValueChange prop', () => {
    const SSwitch = shallow(<Switch defaultValue={true} />);
    expect(SSwitch.prop('value')).toBeTruthy();

    SSwitch.simulate('valueChange', false);
    expect(SSwitch.prop('value')).toBeFalsy();
  });

  describe('platform test', () => {
    beforeEach(() => {
      jest.resetModules();
    });

    it('should render android style prop', () => {
      jest.doMock('react-native/Libraries/Utilities/Platform', () => ({
        OS: 'android',
      }));
      const SSwitch = shallow(<Switch />);

      expect(SSwitch.prop('style')).toBeUndefined();
    });

    it('should render ios style prop', () => {
      jest.doMock('react-native/Libraries/Utilities/Platform', () => ({
        OS: 'ios',
      }));
      const SSwitch = shallow(<Switch />);

      expect(SSwitch.prop('style')).toHaveProperty('transform');
    });
  });
});
