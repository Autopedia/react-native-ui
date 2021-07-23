/**
 * @format
 */

import 'react-native';
import 'jest-styled-components';
import React from 'react';
import { ShopMessage } from './ShopMessage';
import { shallow } from 'enzyme';

describe('[Message/ShopMessage] Unit Test', () => {
  it('should fire onPressDetail & onPressNavigate event', () => {
    const onPressDetailMock = jest.fn();
    const onPressNavigateMock = jest.fn();

    const shopMessage = shallow(
      <ShopMessage
        type="shop"
        name="test"
        lat={1}
        lng={1}
        address="test"
        onPressDetail={onPressDetailMock}
        onPressNavigate={onPressNavigateMock}
      />,
    );

    const buttons = shopMessage.find('ShopButton');

    buttons.forEach(btn => btn.simulate('press'));

    expect(onPressDetailMock).toHaveBeenCalledTimes(1);
    expect(onPressNavigateMock).toHaveBeenCalledTimes(1);
  });
});
