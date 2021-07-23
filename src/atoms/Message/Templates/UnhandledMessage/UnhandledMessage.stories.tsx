import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterContainerDecorator from '../../../../decorators/center-container.decorator';
import SThemeDecorator from '../../../../decorators/styled-components.decorator';
import GreyBackgroundDecorator from '../../../../decorators/grey-background.decorator';
import { UnhandledMessage } from './UnhandledMessage';
import { boolean } from '@storybook/addon-knobs';

storiesOf('Atoms/Message/UnhandledMessage', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(GreyBackgroundDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => (
    <UnhandledMessage type="unhandle" mine={boolean('mine', true)} />
  ))
  .add('Other Unhandle Message', () => <UnhandledMessage type="unhandle" />);
