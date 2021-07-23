import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterContainerDecorator from '../../../../decorators/center-container.decorator';
import SThemeDecorator from '../../../../decorators/styled-components.decorator';
import GreyBackgroundDecorator from '../../../../decorators/grey-background.decorator';
import { VideoMessage } from './VideoMessage';
import { number } from '@storybook/addon-knobs';

storiesOf('Atoms/Message/VideoMessage', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(GreyBackgroundDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => {
    return (
      <VideoMessage
        type="video"
        url="https://image.doctor-cha.com/extra/sample.mp4"
        width={number('width', 200)}
        height={number('height', 200)}
        duration={number('duration', 30)}
      />
    );
  });
