import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterContainerDecorator from '../../decorators/center-container.decorator';
import SThemeDecorator from '../../decorators/styled-components.decorator';
import LoadingOverlay from './LoadingOverlay';

storiesOf('Atoms/LoadingOverlay', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Default', () => {
    return <LoadingOverlay />;
  });
