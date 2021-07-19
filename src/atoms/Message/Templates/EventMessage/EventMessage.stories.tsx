import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterContainerDecorator from '../../../../decorators/center-container.decorator';
import SThemeDecorator from '../../../../decorators/styled-components.decorator';
import EventMessage from './EventMessage';

storiesOf('Atoms/Message/EventMessage', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => {
    return (
      <EventMessage
        type="event"
        title={text('title', 'Title')}
        thumbnailUrl={text('thumbnailUrl', 'https://picsum.photos/200/200')}
      />
    );
  });
