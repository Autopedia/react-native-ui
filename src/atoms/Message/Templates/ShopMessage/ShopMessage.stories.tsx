import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterContainerDecorator from '../../../../decorators/center-container.decorator';
import SThemeDecorator from '../../../../decorators/styled-components.decorator';
import ShopMessage from './ShopMessage';
import { action } from '@storybook/addon-actions';
import { number, text } from '@storybook/addon-knobs';
import GreyBackgroundDecorator from '../../../../decorators/grey-background.decorator';

storiesOf('Atoms/Message/ShopMessage', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(GreyBackgroundDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => {
    return (
      <ShopMessage
        type="shop"
        name={text('name', 'Name')}
        address={text('address', 'Seoul, South Korea')}
        lat={number('lat', 123)}
        lng={number('lng', 123)}
        onPressDetail={e => action('onPressDetail')(e.nativeEvent)}
        onPressNavigate={e => action('onPressNavigate')(e.nativeEvent)}
      />
    );
  });
