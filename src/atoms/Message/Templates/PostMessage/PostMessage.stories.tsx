import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterContainerDecorator from '../../../../decorators/center-container.decorator';
import SThemeDecorator from '../../../../decorators/styled-components.decorator';
import PostMessage from './PostMessage';
import GreyBackgroundDecorator from '../../../../decorators/grey-background.decorator';

storiesOf('Atoms/Message/PostMessage', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(GreyBackgroundDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => {
    return (
      <PostMessage
        type="post"
        title={text('title', 'Title\nNew Line Title')}
        thumbnailUrl={text('thumbnailUrl', 'https://picsum.photos/200/200')}
      />
    );
  });
