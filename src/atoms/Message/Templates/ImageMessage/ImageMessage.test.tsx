/**
 * @format
 */

import 'react-native';
import 'jest-styled-components';

import { shallow } from 'enzyme';
import React from 'react';

import { LocalSource } from '../../../../global/types';
import { ImageMessage } from './ImageMessage';

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

  it('should fire onError event', async () => {
    let imageMessage = shallow(
      <ImageMessage
        type="image"
        url="wrong"
        width={200}
        height={200}
        onPressImage={() => {}}
      />,
    );
    const messageImage = imageMessage.find('MessageImage');
    messageImage.simulate('error');

    imageMessage = imageMessage.update();
    const imageSource: LocalSource = imageMessage
      .find('MessageImage')
      .prop('source');

    expect(imageSource.testUri).toMatch('image-fallback.png');
  });
});
