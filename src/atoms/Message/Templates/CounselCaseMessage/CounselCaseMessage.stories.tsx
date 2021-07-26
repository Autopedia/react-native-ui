import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterContainerDecorator from '../../../../decorators/center-container.decorator';
import SThemeDecorator from '../../../../decorators/styled-components.decorator';
import { CounselCaseMessage } from './CounselCaseMessage';
import GreyBackgroundDecorator from '../../../../decorators/grey-background.decorator';

storiesOf('Atoms/Message/CounselCaseMessage', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(GreyBackgroundDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => {
    return (
      <CounselCaseMessage
        type="counsel"
        title={text('title', 'Title')}
        thumbnailUrl={text('thumbnailUrl', 'https://picsum.photos/200/200')}
      />
    );
  });
