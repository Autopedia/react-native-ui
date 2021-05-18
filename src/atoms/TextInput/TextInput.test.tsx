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
  const MOCK_VALUE_DEFAULT = '1234';

  let mockValue: string;
  let onChangeTextMock: jest.Mock;

  beforeEach(() => {
    mockValue = MOCK_VALUE_DEFAULT;
    onChangeTextMock = jest.fn();
    onChangeTextMock.mockImplementation(
      (newValue: string) => (mockValue = newValue),
    );
  });

  it('should fire onChangeText event', () => {
    const wrapper = shallow(<TextInput onChangeText={onChangeTextMock} />);
    const textInput = wrapper.find('Styled(TextInput)');
    textInput.simulate('changeText', TEST_TEXT);

    expect(onChangeTextMock).toHaveBeenCalledTimes(1);
    expect(onChangeTextMock).toHaveBeenCalledWith(TEST_TEXT);
  });

  it('should not change binded value when disabled', () => {
    const wrapper = shallow(
      <TextInput disabled value={mockValue} onChangeText={onChangeTextMock} />,
    );
    const textInput = wrapper.find('Styled(TextInput)');
    textInput.simulate('changeText', TEST_TEXT);

    expect(mockValue).toEqual(MOCK_VALUE_DEFAULT);
    expect(onChangeTextMock).toHaveBeenCalledTimes(0);
  });

  it('should reject non-numeric input when keyboard type is numeric', () => {
    const wrapper = shallow(
      <TextInput
        value={mockValue}
        keyboardType="numeric"
        onChangeText={onChangeTextMock}
      />,
    );

    const textInput = wrapper.find('Styled(TextInput)');

    textInput.simulate('changeText', TEST_TEXT);
    expect(mockValue).toEqual(MOCK_VALUE_DEFAULT);

    textInput.simulate('changeText', TEST_TEXT_NUMERIC);
    expect(mockValue).toEqual(TEST_TEXT_NUMERIC);

    textInput.simulate('changeText', TEST_TEXT_MIXED);
    expect(mockValue).toEqual(TEST_TEXT_NUMERIC);
  });
});
