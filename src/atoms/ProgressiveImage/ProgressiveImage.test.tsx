/**
 * @format
 */

import 'react-native';
import 'jest-styled-components';
import React from 'react';
import ProgressiveImage from './ProgressiveImage';
import { shallow } from 'enzyme';

describe('[ProgressiveImage] Unit Test', () => {
  it('should fire onLoad event', () => {
    const onLoadMock = jest.fn();
    shallow(
      <ProgressiveImage
        source={{ uri: 'https://picsum.photos/200/300' }}
        onLoad={onLoadMock}
        style={{ width: 200, height: 200 }}
      />,
    )
      .find('FastImage')
      .simulate('load');

    expect(onLoadMock).toHaveBeenCalledTimes(1);
  });

  it('should fire onError event', () => {
    const onErrorMock = jest.fn();

    shallow(
      <ProgressiveImage source={{ uri: 'wrong' }} onError={onErrorMock} />,
    )
      .find('FastImage')
      .simulate('error');

    expect(onErrorMock).toHaveBeenCalledTimes(1);
  });

  it('should change source to alternative on error', () => {
    const wrapper = shallow(<ProgressiveImage source={{ uri: 'wrong' }} />);
    wrapper.find('FastImage').simulate('error');

    expect(wrapper.find('FastImage').prop('source')).toEqual(
      require('@assets/images/on-image-load-fail.png'),
    );
  });
});
