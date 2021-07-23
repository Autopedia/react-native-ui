import React from 'react';

import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Button } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { storiesOf } from '@storybook/react-native';

import CenterContainerDecorator from '../../decorators/center-container.decorator';
import SThemeDecorator from '../../decorators/styled-components.decorator';
import { BasicToast, ToastProvider, useToast } from './Toast';
import styled from 'styled-components/native';

storiesOf('Atoms/Toast', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => {
    return (
      <SSafeAreaProvider>
        <SView>
          <BasicToast
            message={text('text', 'Toast Message')}
            onPress={e => action('onPress')(e.nativeEvent)}
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
            onPress={e => action('onPress')(e.nativeEvent)}
          />
          <SSpace />
          <BasicToast
            message="Test toast message which makes sentence very long to reach two line"
            onPress={e => action('onPress')(e.nativeEvent)}
          />
        </SView>
      </SSafeAreaProvider>
    );
  })
  .add('ToastTest', () => {
    const toast = useToast();
    return (
      <SSafeAreaProvider>
        <ToastProvider>
          <Button
            title="Test Toast"
            onPress={() => toast.show('toast message test')}
          />
        </ToastProvider>
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
