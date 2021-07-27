import React from 'react';

import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import CenterContainerDecorator from '../../../../decorators/center-container.decorator';
import GreyBackgroundDecorator from '../../../../decorators/grey-background.decorator';
import SThemeDecorator from '../../../../decorators/styled-components.decorator';
import { UnhandledMessage } from './UnhandledMessage';

storiesOf('Atoms/Message/UnhandledMessage', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(GreyBackgroundDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => <UnhandledMessage mine={boolean('mine', true)} />)
  .add('Other Unhandle Message', () => <UnhandledMessage />);
