/**
 * @format
 */

import 'react-native';
import 'jest-styled-components';
import React from 'react';
import TextInput from '.';
import { shallow } from 'enzyme';

describe('[TextInput] Unit Test', () => {
  const TEST_TEXT = 'test';
  const TEST_TEXT_NUMERIC = '1111';
  const TEST_TEXT_MIXED = '1a1b1c1d';

  it('should fire onChangeText event', () => {
    const onChangeTextMock = jest.fn();

    const wrapper = shallow(<TextInput onChangeText={onChangeTextMock} />);
    const textInput = wrapper.find('Styled(TextInput)');
    textInput.simulate('changeText', TEST_TEXT);
    expect(onChangeTextMock).toHaveBeenCalledTimes(1);
    expect(onChangeTextMock).toHaveBeenCalledWith(TEST_TEXT);
  });

  it('should not change binded value when disabled', () => {
    let value = 'original';
    const onChangeText = (newValue: string) => (value = newValue);

    const wrapper = shallow(
      <TextInput disabled value={value} onChangeText={onChangeText} />,
    );
    const textInput = wrapper.find('Styled(TextInput)');
    textInput.simulate('changeText', TEST_TEXT);

    expect(value).toEqual('original');
  });

  it('should reject non-numeric input when keyboard type is numeric', () => {
    let value = '1234';
    const onChangeText = (newValue: string) => (value = newValue);

    const wrapper = shallow(
      <TextInput
        value={value}
        keyboardType="numeric"
        onChangeText={onChangeText}
      />,
    );

    const textInput = wrapper.find('Styled(TextInput)');

    textInput.simulate('changeText', TEST_TEXT);
    expect(value).toEqual('1234');

    textInput.simulate('changeText', TEST_TEXT_NUMERIC);
    expect(value).toEqual(TEST_TEXT_NUMERIC);

    textInput.simulate('changeText', TEST_TEXT_MIXED);
    expect(value).toEqual(TEST_TEXT_NUMERIC);
  });
});
