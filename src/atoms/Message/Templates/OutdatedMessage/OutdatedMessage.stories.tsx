import React from 'react';

import { action } from '@storybook/addon-actions';
import { boolean, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import CenterContainerDecorator from '../../../../decorators/center-container.decorator';
import GreyBackgroundDecorator from '../../../../decorators/grey-background.decorator';
import SThemeDecorator from '../../../../decorators/styled-components.decorator';
import { OutdatedMessage } from './OutdatedMessage';

storiesOf('Atoms/Message/OutdatedMessage', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(GreyBackgroundDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => {
    return (
      <OutdatedMessage
        type="outdated"
        days={number('days', 1)}
        disabled={boolean('disabled', false)}
        onPressFinish={action('onPressFinish')}
      />
    );
  });
