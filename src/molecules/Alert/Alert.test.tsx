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
      <AlertWrapper title="title" content="Test Alert" cancelText="닫기" />,
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
        title="title"
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
        title="title"
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
});
