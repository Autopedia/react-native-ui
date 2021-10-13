/**
 * @format
 */

import 'react-native';
import 'jest-styled-components';

import { shallow } from 'enzyme';
import React from 'react';

import { LocalSource } from '../../../../global/types';
import { VideoMessage } from './VideoMessage';

describe('[Message/VideoMessage] Unit Test', () => {
  beforeEach(() => {
    jest.restoreAllMocks();
  });

  it('should render VideoMessage', () => {
    const urlMock = 'https://image.doctor-cha.com/extra/sample.mp4';
    const videoMessage = shallow(
      <VideoMessage
        type="video"
        url={urlMock}
        width={200}
        height={200}
        duration={5000}
      />,
    );

    const video = videoMessage.find('Video');

    expect(video.prop('source')['uri']).toBe(urlMock);
  });

  it('should fire onLoad Event and controll Video', () => {
    jest.spyOn(React, 'useRef').mockReturnValue({
      current: {
        seek: jest.fn(),
        presentFullscreenPlayer: jest.fn(),
      },
    });
    const videoMessage = shallow(
      <VideoMessage
        type="video"
        url="https://image.doctor-cha.com/extra/sample.mp4"
        width={200}
        height={200}
        duration={5000}
      />,
    );
    const video = videoMessage.find('Video');
    video.simulate('load');

    const durationText = videoMessage.find('Paragraph').children().text();

    expect(durationText).toBe('0:05');

    videoMessage.find('VideoOverlay').simulate('press');
    expect(videoMessage.find('Video').prop('paused')).toBeFalsy();

    video.simulate('FullscreenPlayerWillDismiss');
    expect(videoMessage.find('Video').prop('paused')).toBeTruthy();

    videoMessage.find('VideoOverlay').simulate('press');
    expect(videoMessage.find('Video').prop('paused')).toBeFalsy();

    video.simulate('end');
    expect(videoMessage.find('Video').prop('paused')).toBeTruthy();
  });

  it('should not play Video when ref current is null', () => {
    jest.spyOn(React, 'useRef').mockReturnValue({
      current: null,
    });
    const videoMessage = shallow(
      <VideoMessage
        type="video"
        url="https://image.doctor-cha.com/extra/sample.mp4"
        width={200}
        height={200}
        duration={5000}
      />,
    );
    const video = videoMessage.find('Video');
    video.simulate('load');

    videoMessage.find('VideoOverlay').simulate('press');
    expect(videoMessage.find('Video').prop('paused')).toBeTruthy();

    video.simulate('FullscreenPlayerWillDismiss');
    expect(videoMessage.find('Video').prop('paused')).toBeTruthy();

    video.simulate('end');
    expect(videoMessage.find('Video').prop('paused')).toBeTruthy();
  });

  it('should fire onError Event', () => {
    const videoMessage = shallow(
      <VideoMessage
        type="video"
        url="https://image.doctor-cha.com/extra/sample.mp4"
        width={200}
        height={200}
        duration={5000}
      />,
    );
    videoMessage.find('Video').simulate('error', { error: 'Test Error' });
    const videoSource: LocalSource = videoMessage
      .find('MessageImage')
      .prop('source');

    expect(videoSource.testUri).toMatch('video-fallback.png');
  });
});
