/**
 * @format
 */

import 'react-native';
import 'jest-styled-components';
import React from 'react';
import { BasicToast, ToastProvider, useToast } from './Toast';
import { shallow } from 'enzyme';
import { EdgeInsets, SafeAreaProvider } from 'react-native-safe-area-context';
import { Button } from 'react-native';

/**
 * Toast에 대한 Testing은 react-native-toast-message라는 외부 라이브러리를 그대로 활용하고,
 * 이 라이브러리는 Testing을 통한 관리가 되고있는 상황이기에
 * react-native-ui에서 BasicToast라는 커스텀으로 정의한 Toast UI컴포넌트에 대해서만 테스트를 진행함
 */

describe('[Toast] Unit Test', () => {
  it('BasicToast: should fire onPress event', () => {
    const insets: EdgeInsets = { top: 20, bottom: 20, left: 10, right: 10 };
    const onPressMock = jest.fn();
    const toast = shallow(
      <BasicToast
        message="test"
        toastPosition="top"
        insets={insets}
        onExitPress={onPressMock}
      />,
    );
    const icon = toast.find('Icon');
    icon.simulate('press');
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });
});
