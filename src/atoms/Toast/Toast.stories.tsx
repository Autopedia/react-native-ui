import React from 'react';

import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { Button } from 'react-native';
import {
  SafeAreaProvider,
  SafeAreaView,
  EdgeInsets,
} from 'react-native-safe-area-context';
import { storiesOf } from '@storybook/react-native';

import CenterContainerDecorator from '../../decorators/center-container.decorator';
import SThemeDecorator from '../../decorators/styled-components.decorator';
import { BasicToast } from './Toast';
import styled from 'styled-components/native';

storiesOf('Atoms/Toast', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => {
    const insets: EdgeInsets = { top: 20, bottom: 20, left: 10, right: 10 };
    return (
      <SSafeAreaProvider>
        <SView>
          <BasicToast
            message={text('message', 'Test Toast Message')}
            toastPosition="bottom"
            onExitPress={e => action('onPress')(e.nativeEvent)}
            insets={insets}
          />
        </SView>
      </SSafeAreaProvider>
    );
  })
  .add('ToastPosition', () => {
    const insets: EdgeInsets = { top: 20, bottom: 20, left: 10, right: 10 };
    return (
      <SSafeAreaProvider>
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
      </SSafeAreaProvider>
    );
  });

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
