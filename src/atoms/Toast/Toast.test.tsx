/**
 * @format
 */

import 'react-native';
import 'jest-styled-components';
import React from 'react';
import { BasicToast, ToastProvider } from './Toast';
import { shallow } from 'enzyme';
import { EdgeInsets } from 'react-native-safe-area-context';

jest.mock(
  'react-native-safe-area-context/lib/commonjs/SafeAreaContext',
  () => ({
    useSafeAreaInsets: jest.fn().mockImplementation(() => {}),
  }),
);

jest.useFakeTimers();
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

const insets: EdgeInsets = { top: 20, bottom: 20, left: 10, right: 10 };

describe('[Toast] Unit Test', () => {
  it('BasicToast: should render same text', () => {
    const testText = 'TEST';
    const toast = shallow(
      <BasicToast
        message={testText}
        toastPosition="top"
        insets={insets}
        onExitPress={() => {}}
      />,
    );
    const paragraph = toast.find('Paragraph').dive().text();
    expect(testText).toEqual(paragraph);
  });
  it('BasicToast: should fire onPress event', () => {
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
  it('Toast: should show on toast.show()', () => {
    const TEST_TEXT = 'TEST';

    let wrapper = shallow(<ToastProvider />);

    const animatedViewProps = wrapper.find('Styled(Component)').props().style;
    console.log(animatedViewProps);

    wrapper.props().value.show({ message: TEST_TEXT, autohide: false });

    wrapper = wrapper.update();

    const animatedViewProps2 = wrapper.find('Styled(Component)').props().style;
    console.log(animatedViewProps2);

    const basicToast = wrapper.find('BasicToast');
    const basicToastProps = basicToast.props() as { message?: string };

    expect(basicToastProps.message).toBe(TEST_TEXT);
  });
  it('Toast: should hide on toast.hide()', () => {
    const TEST_TEXT = 'TEST';

    let wrapper = shallow(<ToastProvider />);

    wrapper.props().value.show({ message: TEST_TEXT, autohide: false });

    wrapper = wrapper.update();
    const animatedViewProps = wrapper.find('Styled(Component)').props().style;
    console.log(animatedViewProps);
    const basicToast = wrapper.find('BasicToast');
    console.log(basicToast.debug());
    const basicToastProps = basicToast.props() as { style };
    console.log(basicToastProps);
  });
});
