import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterContainerDecorator from '../../../../decorators/center-container.decorator';
import SThemeDecorator from '../../../../decorators/styled-components.decorator';
import GreyBackgroundDecorator from '../../../../decorators/grey-background.decorator';
import TextMessage from './TextMessage';
import { boolean, text } from '@storybook/addon-knobs';

storiesOf('Atoms/Message/TextMessage', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(GreyBackgroundDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => {
    return (
      <TextMessage
        type="text"
        mine={boolean('mine', true)}
        text={text('text', 'Text')}
      />
    );
  });
