import React from 'react';

import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react-native';

import CenterContainerDecorator from '../../../../decorators/center-container.decorator';
import GreyBackgroundDecorator from '../../../../decorators/grey-background.decorator';
import SThemeDecorator from '../../../../decorators/styled-components.decorator';
import { ReviewMessage } from './ReviewMessage';

storiesOf('Atoms/Message/ReviewMessage', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(GreyBackgroundDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => {
    return (
      <ReviewMessage
        type="review"
        onPressReview={e => action('onPressReview')(e.nativeEvent)}
      />
    );
  });
