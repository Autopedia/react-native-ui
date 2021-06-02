import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterContainerDecorator from '@decorators/center-container.decorator';
import SThemeDecorator from '@decorators/styled-components.decorator';
import EndConfirmedMessage from './EndConfirmedMessage';
import GreyBackgroundDecorator from '@decorators/grey-background.decorator';

storiesOf('Atoms/Message/EndConfirmedMessage', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(GreyBackgroundDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Default', () => {
    return <EndConfirmedMessage type="endconfirmed" />;
  });
