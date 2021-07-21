/**
 * @format
 */

import 'react-native';
import 'jest-styled-components';
import React, { useRef } from 'react';
import Alert from '.';
import { shallow } from 'enzyme';
import { AlertHandle } from './Alert.types';
import { AlertProps } from './Alert';

const AlertWrapper: React.FC<AlertProps> = props => {
  const alertRef = useRef<AlertHandle>(null);

  return (
    <Alert
      ref={alertRef}
      title={props.title}
      contents={props.contents}
      onPressOk={props.onPressOk}
      okText={props.okText}
      cancelText={props.cancelText}
      onPressCancel={props.onPressCancel}
    />
  );
};

describe('[Alert] Unit Test', () => {
  it('should action without onPressOK, onPressCancel props', () => {
    const wrapper = shallow(
      <AlertWrapper contents="Test Alert" cancelText="" />,
    );
    const Alert = wrapper.find('ForwardRef').dive();
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');

    useStateSpy.mockImplementation(() => ['', setState]);
    Alert.find('Styled(Component)').first().simulate('press');
    Alert.find('Styled(Component)').at(1).simulate('press');

    expect(setState).toBeCalled();
  });

  it('should action onPressOk', () => {
    const onPressOkMock = jest.fn();
    const wrapper = shallow(
      <AlertWrapper
        contents="Test Alert"
        onPressOk={onPressOkMock}
        okText="OK"
      />,
    );
    const Alert = wrapper.find('ForwardRef').dive();
    Alert.find('Styled(Component)').simulate('press');

    expect(onPressOkMock).toHaveBeenCalledTimes(1);
  });

  it('should action onPressCancel', () => {
    const onPressCancelMock = jest.fn();
    const wrapper = shallow(
      <AlertWrapper
        contents="Test Alert"
        onPressCancel={onPressCancelMock}
        cancelText="Cancel"
      />,
    );
    const Alert = wrapper.find('ForwardRef').dive();
    Alert.find('Styled(Component)').first().simulate('press');

    expect(onPressCancelMock).toHaveBeenCalledTimes(1);
  });
});
