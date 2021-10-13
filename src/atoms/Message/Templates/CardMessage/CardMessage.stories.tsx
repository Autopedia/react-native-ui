import React from 'react';
import { Text } from 'react-native';

import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import CenterContainerDecorator from '../../../../decorators/center-container.decorator';
import GreyBackgroundDecorator from '../../../../decorators/grey-background.decorator';
import SThemeDecorator from '../../../../decorators/styled-components.decorator';
import { CardMessage } from './CardMessage';

storiesOf('Atoms/Message/CardMessage', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(GreyBackgroundDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => {
    return (
      <CardMessage
        title={text('title', 'Title')}
        description={text('description', 'Description')}
        footer={<Text>{text('footer', 'Footer')}</Text>}
      />
    );
  });
