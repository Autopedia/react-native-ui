/**
 * @format
 */

import 'react-native';
import 'jest-styled-components';

import { shallow } from 'enzyme';
import React from 'react';

import TextInput from './';

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
    const wrapper = shallow(
      <TextInput label="label" onChangeText={onChangeTextMock} />,
    );
    const textInput = wrapper.find('Styled(TextInput)');
    textInput.simulate('changeText', TEST_TEXT);

    expect(onChangeTextMock).toHaveBeenCalledTimes(1);
    expect(onChangeTextMock).toHaveBeenCalledWith(TEST_TEXT);
  });

  it('should not call onChangeText when disabled', () => {
    const wrapper = shallow(
      <TextInput
        label="label"
        disabled
        value={mockValue}
        onChangeText={onChangeTextMock}
      />,
    );
    const textInput = wrapper.find('Styled(TextInput)');
    textInput.simulate('changeText', TEST_TEXT);

    expect(mockValue).toEqual(MOCK_VALUE_DEFAULT);
    expect(onChangeTextMock).toHaveBeenCalledTimes(0);
  });

  it('should reject non-numeric input when keyboard type is numeric', () => {
    const wrapper = shallow(
      <TextInput
        label="label"
        value={mockValue}
        keyboardType="numeric"
        onChangeText={onChangeTextMock}
      />,
    );

    const textInput = wrapper.find('Styled(TextInput)');

    textInput.simulate('changeText', MOCK_VALUE_DEFAULT + TEST_TEXT);
    expect(mockValue).toEqual(MOCK_VALUE_DEFAULT);

    textInput.simulate('changeText', MOCK_VALUE_DEFAULT + TEST_TEXT_NUMERIC);
    expect(mockValue).toEqual(MOCK_VALUE_DEFAULT + TEST_TEXT_NUMERIC);

    textInput.simulate('changeText', MOCK_VALUE_DEFAULT + TEST_TEXT_MIXED);
    expect(mockValue).toEqual(MOCK_VALUE_DEFAULT + TEST_TEXT_NUMERIC);
  });

  it('should toggle secureTextEntry when icon is pressed', () => {
    let wrapper = shallow(<TextInput label="label" secureTextEntry />);

    const icon = wrapper.find('Styled(Icon)');
    icon.simulate('press');

    wrapper = wrapper.update();

    const textInput = wrapper.find('Styled(TextInput)');
    const textInputProps = textInput.props() as { secureTextEntry?: boolean };

    expect(textInputProps.secureTextEntry).toBe(false);
  });
});
