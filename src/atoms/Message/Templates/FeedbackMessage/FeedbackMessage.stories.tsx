import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterContainerDecorator from '@decorators/center-container.decorator';
import SThemeDecorator from '@decorators/styled-components.decorator';
import FeedbackMessage from './FeedbackMessage';
import { text } from '@storybook/addon-knobs';
import GreyBackgroundDecorator from '@decorators/grey-background.decorator';

storiesOf('Atoms/Message/FeedbackMessage', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(GreyBackgroundDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => {
    return (
      <FeedbackMessage
        type="feedback"
        link={text('link', 'https://doctor-cha.com')}
      />
    );
  });
