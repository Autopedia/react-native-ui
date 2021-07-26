/**
 * @format
 */

import 'react-native';
import 'jest-styled-components';
import React from 'react';
import { Message } from './Message';
import { shallow } from 'enzyme';

describe('[Message] Unit Test', () => {
  it('should render TextMessage template', () => {
    const testMock = 'Test';
    const wrapper = shallow(<Message type="text" text={testMock} />);
    const message = wrapper.find('TextMessage').dive().text();

    expect(message).toBe(testMock);
  });

  it('should render ImageMessage template', () => {
    const urlMock = 'https://picsum.photos/200/200';
    const widthMock = 200;
    const heightMock = 250;

    const wrapper = shallow(
      <Message
        type="image"
        url={urlMock}
        width={widthMock}
        height={heightMock}
        onPressImage={() => {}}
      />,
    );
    const imageMessage = wrapper.find('ImageMessage');

    expect(imageMessage.prop('url')).toBe(urlMock);
    expect(imageMessage.prop('width')).toBe(widthMock);
    expect(imageMessage.prop('height')).toBe(heightMock);
  });

  it('should render VideoMessage template', () => {
    const urlMock = 'https://image.doctor-cha.com/extra/sample.mp4';
    const widthMock = 200;
    const heightMock = 250;
    const durationMock = 5000;

    const wrapper = shallow(
      <Message
        type="video"
        url={urlMock}
        width={widthMock}
        height={heightMock}
        duration={durationMock}
      />,
    );
    const videoMessage = wrapper.find('VideoMessage');

    expect(videoMessage.prop('url')).toBe(urlMock);
    expect(videoMessage.prop('width')).toBe(widthMock);
    expect(videoMessage.prop('height')).toBe(heightMock);
    expect(videoMessage.prop('duration')).toBe(durationMock);
  });

  it('should render ShopMessage template', () => {
    const nameMock = 'Test';
    const addressMock = 'Seoul, South Korea';
    const latMock = 1;
    const lngMock = 1;

    const wrapper = shallow(
      <Message
        type="shop"
        name={nameMock}
        address={addressMock}
        lat={latMock}
        lng={lngMock}
        onPressDetail={() => {}}
        onPressNavigate={() => {}}
      />,
    );
    const shopMessage = wrapper.find('ShopMessage');

    expect(shopMessage.prop('name')).toBe(nameMock);
    expect(shopMessage.prop('address')).toBe(addressMock);
    expect(shopMessage.prop('lat')).toBe(latMock);
    expect(shopMessage.prop('lng')).toBe(lngMock);
  });

  it('should render EndComfirmedMessage template', () => {
    const wrapper = shallow(<Message type="endconfirmed" />);
    const message = wrapper
      .find('EndConfirmedMessage')
      .dive()
      .find('Paragraph')
      .children()
      .text();

    expect(message).toBe('상담이 종료되었습니다.');
  });

  it('should render EndMessage template', () => {
    const wrapper = shallow(<Message type="end" onPressFinish={() => {}} />);
    const message = wrapper.find('EndMessage').dive();

    expect(message.prop('title')).toBe('상담이 종료되었습니다');
  });

  it('should render OutdatedMessage template', () => {
    const wrapper = shallow(
      <Message type="outdated" onPressFinish={() => {}} />,
    );
    const message = wrapper.find('OutdatedMessage').dive();

    expect(message.prop('title')).toBe('상담이 자동종료될\n예정입니다');
  });

  it('should render FeedbackMessage template', () => {
    const wrapper = shallow(
      <Message type="feedback" link="https://doctor-cha.com" />,
    );
    const message = wrapper.find('FeedbackMessage').dive();

    expect(message.prop('title')).toBe('피드백을 남겨주세요!');
  });

  it('should render ReviewMessage template', () => {
    const wrapper = shallow(<Message type="review" onPressReview={() => {}} />);
    const message = wrapper.find('ReviewMessage').dive();

    expect(message.prop('title')).toBe('리뷰를 남겨주세요!');
  });

  it('should render EventMessage template', () => {
    const titleMock = 'Title';
    const wrapper = shallow(
      <Message
        type="event"
        title={titleMock}
        thumbnailUrl="https://picsum.photos/200/200"
      />,
    );
    const message = wrapper.find('EventMessage').dive();
    const eventMessage = message.find('Paragraph').children().text();
    const titleMessage = message.find('Heading').children().text();

    expect(eventMessage).toBe('닥터차 이벤트');
    expect(titleMessage).toBe(titleMock);
  });

  it('should render PostMessage template', () => {
    const titleMock = 'Title';
    const wrapper = shallow(
      <Message
        type="post"
        title={titleMock}
        thumbnailUrl="https://picsum.photos/200/200"
      />,
    );
    const message = wrapper.find('PostMessage').dive();
    const eventMessage = message.find('Paragraph').children().text();
    const titleMessage = message.find('Heading').children().text();

    expect(eventMessage).toBe('닥터차 포스트');
    expect(titleMessage).toBe(titleMock);
  });

  it('should render CounselCaseMessage template', () => {
    const titleMock = 'Title';
    const wrapper = shallow(
      <Message
        type="counsel"
        title={titleMock}
        thumbnailUrl="https://picsum.photos/200/200"
      />,
    );
    const message = wrapper.find('CounselCaseMessage').dive();
    const eventMessage = message.find('Paragraph').children().text();
    const titleMessage = message.find('Heading').children().text();

    expect(eventMessage).toBe('닥터차 상담사례');
    expect(titleMessage).toBe(titleMock);
  });

  it('should render UnhandledMessage template', () => {
    //@ts-ignore
    const myUnhandleWrapper = shallow(<Message mine />);
    const myUnhandledMessage = myUnhandleWrapper
      .find('UnhandledMessage')
      .dive()
      .find('MyUnhandledMessage');

    expect(myUnhandledMessage.exists).toBeTruthy();

    //@ts-ignore
    const otherUnhandleWrapper = shallow(<Message />);
    const otherUnhandleMessage = otherUnhandleWrapper
      .find('UnhandledMessage')
      .dive()
      .find('otherUnhandleMessage');

    expect(otherUnhandleMessage.exists).toBeTruthy();
  });
});
