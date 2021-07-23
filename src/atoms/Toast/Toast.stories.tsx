import React from 'react';

import { storiesOf } from '@storybook/react-native';
import CenterContainerDecorator from '../../decorators/center-container.decorator';
import SThemeDecorator from '../../decorators/styled-components.decorator';
import { BasicToast, Toast, ToastProvider } from './Toast';
import styled from 'styled-components/native';
import { Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { text } from '@storybook/addon-knobs';

storiesOf('Atoms/Toast', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => {
    return (
      <SSafeAreaProvider>
        <SView>
          <BasicToast
            message={text('text', 'Toast Message')}
            onPress={() => console.log('hello')}
          />
        </SView>
      </SSafeAreaProvider>
    );
  })
  .add('Message', () => {
    return (
      <SSafeAreaProvider>
        <SView>
          <BasicToast
            message="Test Toast Message"
            onPress={() => console.log('hello')}
          />
          <SSpace />
          <BasicToast
            message="Test toast message which makes sentence very long to reach two line"
            onPress={() => console.log('hello')}
          />
        </SView>
      </SSafeAreaProvider>
    );
  })
  .add('ToastTest', () => {
    return (
      <SSafeAreaProvider>
        <Button
          title="Test Toast Message"
          onPress={() =>
            Toast.show({ type: 'basic', props: { message: 'hello' } })
          }
        />
        <ToastProvider />
      </SSafeAreaProvider>
    );
  });

const SSafeAreaProvider = styled(SafeAreaProvider)`
  flex: 1;
  width: 100%;
  justify-content: center;
`;

const SView = styled(SafeAreaView)`
  align-items: center;
  justify-content: center;
`;

const SSpace = styled.View`
  height: 10px;
`;
