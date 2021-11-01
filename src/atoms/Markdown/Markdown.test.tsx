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
  const urlMock = 'https://doctor-cha.com';
  const urlMockWithOutHttp = 'www.doctorcha.com';
  const phoneNumberMock = '010-1234-1234';

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
    const textMock = 'Test';
    const wrapper = shallow(<Markdown selectable>{textMock}</Markdown>);
    const childrenText = wrapper.find('ParsedText').children().text();

    expect(childrenText).toEqual(textMock);

    const reactNodeWrapper = shallow(
      <Markdown selectable>
        <View>
          <Text testID="testText">{textMock}</Text>
        </View>
      </Markdown>,
    );
    const reactNodeText = reactNodeWrapper
      .findWhere(w => w.prop('testID') === 'testText')
      .children()
      .text();

    expect(reactNodeText).toBe(textMock);
  });

  it('should open link when url text pressed', async () => {
    mockCanOpenURL.mockReturnValue(true);
    const wrapper = shallow(<Markdown selectable>{urlMock}</Markdown>);
    const buttonText = wrapper.dive().findWhere(w => w.prop('onPress'));
    await buttonText.simulate('press');

    expect(Linking.openURL).toHaveBeenCalledTimes(1);
    expect(Linking.openURL).toHaveBeenCalledWith(urlMock);
  });

  it('should alert when invalid url is given', async () => {
    mockCanOpenURL.mockReturnValue(false);
    const wrapper = shallow(<Markdown selectable>{urlMock}</Markdown>);
    const buttonText = wrapper.dive().findWhere(w => w.prop('onPress'));
    await buttonText.simulate('press');

    expect(Linking.openURL).not.toBeCalled();
    expect(Alert.alert).toBeCalledTimes(1);
  });

  it('should call link with https', async () => {
    mockCanOpenURL.mockReturnValue(true);
    const wrapper = shallow(
      <Markdown selectable>{urlMockWithOutHttp}</Markdown>,
    );
    const buttonText = wrapper.dive().findWhere(w => w.prop('onPress'));

    await buttonText.simulate('press');

    expect(Linking.canOpenURL).toBeCalledWith(`https://${urlMockWithOutHttp}`);
  });

  it('should call link with http', async () => {
    mockCanOpenURL.mockReturnValue(false);
    const wrapper = shallow(
      <Markdown selectable>{urlMockWithOutHttp}</Markdown>,
    );
    const buttonText = wrapper.dive().findWhere(w => w.prop('onPress'));

    await buttonText.simulate('press');

    expect(Linking.canOpenURL).toBeCalledWith(`http://${urlMockWithOutHttp}`);
  });

  it('should call when phone number text pressed', () => {
    const wrapper = shallow(<Markdown selectable>{phoneNumberMock}</Markdown>);
    const buttonText = wrapper.dive().findWhere(w => w.prop('onPress'));
    buttonText.simulate('press');

    expect(Linking.openURL).toBeCalledTimes(1);
    expect(Linking.openURL).toHaveBeenCalledWith(`tel:${phoneNumberMock}`);
  });
});
