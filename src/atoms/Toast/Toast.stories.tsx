import React from 'react';

import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import {
  SafeAreaProvider,
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { storiesOf } from '@storybook/react-native';

import CenterContainerDecorator from '../../decorators/center-container.decorator';
import SThemeDecorator from '../../decorators/styled-components.decorator';
import { BasicToast } from './Toast';
import styled from 'styled-components/native';

storiesOf('Atoms/Toast', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => (
    <SSafeAreaProvider>
      <SafeAreaPlayground />
    </SSafeAreaProvider>
  ))
  .add('ToastPosition', () => (
    <SSafeAreaProvider>
      <SafeAreaToastPosition />
    </SSafeAreaProvider>
  ));

const SafeAreaPlayground = () => {
  const insets = useSafeAreaInsets();
  return (
    <SView>
      <BasicToast
        message={text('message', 'Test Toast Message')}
        toastPosition="bottom"
        onExitPress={e => action('onPress')(e.nativeEvent)}
        insets={insets}
      />
    </SView>
  );
};

const SafeAreaToastPosition = () => {
  const insets = useSafeAreaInsets();
  return (
    <SView>
      <Background>
        <BasicToast
          message="Test Toast Message has margin-top if toastPosition is top"
          toastPosition="top"
          onExitPress={e => action('onPress')(e.nativeEvent)}
          insets={insets}
        />
      </Background>
      <Background>
        <BasicToast
          message="Test Toast Message has margin-bottom if toastPosition is bottom"
          toastPosition="bottom"
          onExitPress={e => action('onPress')(e.nativeEvent)}
          insets={insets}
        />
      </Background>
    </SView>
  );
};

const SSafeAreaProvider = styled(SafeAreaProvider)`
  flex: 1;
  width: 100%;
  justify-content: center;
`;

const SView = styled(SafeAreaView)`
  width: 100%;
  align-items: center;
  justify-content: center;
`;

const Background = styled.View`
  width: 100%;
  background-color: grey;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;
