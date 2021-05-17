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

  it('should fire onChangeText event', () => {
    const onChangeTextMock = jest.fn();
    const wrapper = shallow(<TextInput onChangeText={onChangeTextMock} />);
    const textInput = wrapper.find('Styled(TextInput)');

    textInput.simulate('changeText', TEST_TEXT);
    expect(onChangeTextMock).toHaveBeenCalledWith(TEST_TEXT);
  });

  it('should change binded value on input', () => {
    let textInputValue = 'oldValue';
    const onChangeText = (newValue: string) => {
      textInputValue = newValue;
    };

    const wrapper = shallow(
      <TextInput value={textInputValue} onChangeText={onChangeText} />,
    );
    const textInput = wrapper.find('Styled(TextInput)');

    expect(textInput).toHaveLength(1);

    textInput.simulate('changeText', TEST_TEXT);
  });
});
