/**
 * @format
 */

import 'react-native';
import 'jest-styled-components';
import React from 'react';
import { ImageMessage } from './ImageMessage';
import { shallow } from 'enzyme';

describe('[Message/ImageMessage] Unit Test', () => {
  it('should fire onPressImage event', () => {
    const onPressImageMock = jest.fn();

    const imageMessage = shallow(
      <ImageMessage
        type="image"
        url="https://picsum.photos/200/200"
        width={200}
        height={200}
        onPressImage={onPressImageMock}
      />,
    );

    imageMessage.simulate('press');
    expect(onPressImageMock).toHaveBeenCalledTimes(1);
  });
});
