import React from 'react';

import { storiesOf } from '@storybook/react-native';

import CenterContainerDecorator from '../../../../decorators/center-container.decorator';
import GreyBackgroundDecorator from '../../../../decorators/grey-background.decorator';
import SThemeDecorator from '../../../../decorators/styled-components.decorator';
import { EndConfirmedMessage } from './EndConfirmedMessage';

storiesOf('Atoms/Message/EndConfirmedMessage', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(GreyBackgroundDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Default', () => {
    return <EndConfirmedMessage type="endconfirmed" />;
  });
