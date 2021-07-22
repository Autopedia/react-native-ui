/**
 * @format
 */

import 'react-native';
import 'jest-styled-components';
import React from 'react';
import { Markdown } from '.';
import { shallow } from 'enzyme';
import { Alert, Linking, Text, View } from 'react-native';

describe('[Markdown] Unit Test', () => {
  const mockCanOpenURL = jest.fn();
  const mockUrl = 'https://doctor-cha.com';
  const mockPhoneNumber = '010-1234-1234';

  beforeEach(() => {
    jest.clearAllMocks();
    jest.mock('react-native/Libraries/Alert/Alert', () => ({
      alert: jest.fn(),
    }));
    jest.mock('react-native/Libraries/Linking/Linking', () => ({
      openURL: jest.fn(),
      canOpenURL: mockCanOpenURL,
    }));
  });

  it('should render children', () => {
    const mockText = 'Test';
    const wrapper = shallow(<Markdown selectable>{mockText}</Markdown>);
    const renderText = wrapper.find('ParsedText').children().text();

    expect(renderText).toEqual(mockText);

    const reactNodeWrapper = shallow(
      <Markdown selectable>
        <View>
          <Text testID="testText">{mockText}</Text>
        </View>
      </Markdown>,
    );
    const reactNodeText = reactNodeWrapper
      .findWhere(w => w.prop('testID') === 'testText')
      .children()
      .text();

    expect(reactNodeText).toBe(mockText);
  });

  it('should open link when url text pressed', async () => {
    mockCanOpenURL.mockResolvedValue(true);
    const wrapper = shallow(<Markdown selectable>{mockUrl}</Markdown>);
    const buttonText = wrapper.dive().findWhere(w => w.prop('onPress'));
    buttonText.simulate('press');

    await mockCanOpenURL();

    expect(Linking.openURL).toHaveBeenCalledTimes(1);
  });

  it('should alert when invalid url is given', async () => {
    mockCanOpenURL.mockResolvedValue(false);
    const wrapper = shallow(<Markdown selectable>{mockUrl}</Markdown>);
    const buttonText = wrapper.dive().findWhere(w => w.prop('onPress'));
    buttonText.simulate('press');

    await mockCanOpenURL();

    expect(Linking.openURL).not.toBeCalled();
    expect(Alert.alert).toBeCalledTimes(1);
  });

  it('should call when phone number text pressed', () => {
    const wrapper = shallow(<Markdown selectable>{mockPhoneNumber}</Markdown>);
    const buttonText = wrapper.dive().findWhere(w => w.prop('onPress'));
    buttonText.simulate('press');

    expect(Linking.openURL).toBeCalledTimes(1);
  });
});
