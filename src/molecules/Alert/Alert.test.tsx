/**
 * @format
 */

import 'react-native';
import 'jest-styled-components';
import React, { useRef } from 'react';
import Alert from '.';
import { shallow, ShallowWrapper } from 'enzyme';
import { AlertHandle } from './Alert.types';
import { AlertProps } from './Alert';
import { View, Text } from 'react-native';

const AlertWrapper: React.FC<AlertProps> = props => {
  const alertRef = useRef<AlertHandle>(null);

  return (
    <Alert
      ref={alertRef}
      content={props.content}
      title={props.title}
      okText={props.okText}
      onPressOk={props.onPressOk}
      okTextStrong={props.okTextStrong}
      okTextColor={props.okTextColor}
      cancelText={props.cancelText}
      onPressCancel={props.onPressCancel}
      cancelTextStrong={props.cancelTextStrong}
      cancelTextColor={props.cancelTextColor}
    />
  );
};

const findButton = (
  w: ShallowWrapper<any, any, React.Component<{}, {}, any>>,
  eventName: string,
) => {
  const pressEvent = w.prop('onPress');
  if (pressEvent) return pressEvent.name === eventName;
  return false;
};

describe('[Alert] Unit Test', () => {
  it('should action without onPressOK, onPressCancel props', () => {
    const wrapper = shallow(
      <AlertWrapper content="Test Alert" cancelText="닫기" />,
    );
    const Alert = wrapper.find('ForwardRef').dive();
    const useStateSpy = jest.spyOn(React, 'useState');

    const cancelButton = Alert.find('AlertButton').findWhere(w =>
      findButton(w, 'handleCancel'),
    );
    const okButton = Alert.find('AlertButton').findWhere(w =>
      findButton(w, 'handleOk'),
    );
    cancelButton.simulate('press');
    okButton.simulate('press');

    expect(useStateSpy).toBeCalled();
    expect(useStateSpy).toHaveBeenCalledTimes(2);
  });

  it('should action onPressOk', () => {
    const onPressOkMock = jest.fn();
    const wrapper = shallow(
      <AlertWrapper
        content="Test Alert"
        onPressOk={onPressOkMock}
        okText="OK"
      />,
    );
    const Alert = wrapper.find('ForwardRef').dive();
    Alert.find('AlertButton')
      .findWhere(w => findButton(w, 'handleOk'))
      .simulate('press');

    expect(onPressOkMock).toHaveBeenCalledTimes(1);
  });

  it('should action onPressCancel', () => {
    const onPressCancelMock = jest.fn();
    const wrapper = shallow(
      <AlertWrapper
        content="Test Alert"
        onPressCancel={onPressCancelMock}
        okText="OK"
        cancelText="Cancel"
      />,
    );
    const Alert = wrapper.find('ForwardRef').dive();
    Alert.find('AlertButton')
      .findWhere(w => findButton(w, 'handleCancel'))
      .simulate('press');

    expect(onPressCancelMock).toHaveBeenCalledTimes(1);
  });

  it('should render button text', () => {
    const wrapper = shallow(
      <AlertWrapper content="Test Alert" okText="OK" cancelText="Cancel" />,
    );
    const Alert = wrapper.find('ForwardRef').dive();
    const cancelButton = Alert.find('AlertButton').findWhere(w =>
      findButton(w, 'handleCancel'),
    );
    const okButton = Alert.find('AlertButton').findWhere(w =>
      findButton(w, 'handleOk'),
    );

    expect(okButton.text()).toEqual('OK');
    expect(cancelButton.text()).toEqual('Cancel');
  });

  it('should render title, content', () => {
    const textWrapper = shallow(
      <AlertWrapper title="Test Title" content="Test Alert" />,
    );
    const textAlert = textWrapper.find('ForwardRef').dive();
    const titleText = textAlert.find('TitleText').text();
    const contentText = textAlert.find('ContentText').text();

    expect(titleText).toEqual('Test Title');
    expect(contentText).toEqual('Test Alert');

    const reactNodeWrapper = shallow(
      <AlertWrapper
        title={
          <View>
            <Text testID="titleText">ReactNode Title</Text>
          </View>
        }
        content={
          <View>
            <Text testID="contentText">ReactNode Content</Text>
          </View>
        }
      />,
    );
    const reactNodeAlert = reactNodeWrapper.find('ForwardRef').dive();
    const reactNodeTitle = reactNodeAlert.findWhere(
      w => w.prop('testID') === 'titleText',
    );
    const reactNodeContent = reactNodeAlert.findWhere(
      w => w.prop('testID') === 'contentText',
    );

    expect(reactNodeTitle.exists()).toBeTruthy();
    expect(reactNodeTitle.children().text()).toEqual('ReactNode Title');
    expect(reactNodeContent.exists()).toBeTruthy();
    expect(reactNodeContent.children().text()).toEqual('ReactNode Content');
  });
});
