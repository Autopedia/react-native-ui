import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import styled from 'styled-components/native';

import Button from './Button';

storiesOf('Atoms/Button', module)
  .addDecorator(getStory => <SCenterContainer>{getStory()}</SCenterContainer>)
  .add('Default', () => (
    <Button type="default" onPress={action('clicked')}>
      <Text>{text('Button text', 'Hello Button')}</Text>
    </Button>
  ));

const SCenterContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
