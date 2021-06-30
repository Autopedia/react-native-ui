import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterContainerDecorator from '../../../../decorators/center-container.decorator';
import SThemeDecorator from '../../../../decorators/styled-components.decorator';
import ReviewMessage from './ReviewMessage';
import { action } from '@storybook/addon-actions';
import GreyBackgroundDecorator from '../../../../decorators/grey-background.decorator';

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
