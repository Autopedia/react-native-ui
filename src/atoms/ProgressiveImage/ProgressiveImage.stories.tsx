import React from 'react';
import { storiesOf } from '@storybook/react-native';
import CenterContainerDecorator from '../../decorators/center-container.decorator';
import SThemeDecorator from '../../decorators/styled-components.decorator';
import ProgressiveImage from './ProgressiveImage';
import { action } from '@storybook/addon-actions';

const sampleImage = require('../../assets/images/shop-thumbnail.png');

storiesOf('Atoms/ProgressiveImage', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Image', () => {
    return (
      <ProgressiveImage
        source={sampleImage}
        onLoad={e => action('onLoad')(e.nativeEvent)}
        style={{ width: 200, height: 200 }}
      />
    );
  })
  .add('Loading', () => {
    // Give no source to make image loading continuously
    // @ts-ignore
    return <ProgressiveImage style={{ width: 200, height: 200 }} />;
  })
  .add('Fail', () => {
    return (
      <ProgressiveImage
        source={{ uri: 'wrong' }}
        style={{ width: 200, height: 200 }}
        onError={action('onError')}
      />
    );
  });
