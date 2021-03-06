import React from 'react';

import { action } from '@storybook/addon-actions';
import { number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import CenterContainerDecorator from '../../../../decorators/center-container.decorator';
import GreyBackgroundDecorator from '../../../../decorators/grey-background.decorator';
import SThemeDecorator from '../../../../decorators/styled-components.decorator';
import { ImageMessage } from './ImageMessage';

storiesOf('Atoms/Message/ImageMessage', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(GreyBackgroundDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => {
    return (
      <ImageMessage
        type="image"
        url={text('url', 'https://picsum.photos/200/200')}
        height={number('height', 200)}
        width={number('width', 200)}
        onPressImage={e => action('onPressImage')(e.nativeEvent)}
      />
    );
  });
