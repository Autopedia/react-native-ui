import { storiesOf } from '@storybook/react-native';
import CenterContainerDecorator from '../../decorators/center-container.decorator';
import SThemeDecorator from '../../decorators/styled-components.decorator';

import React from 'react';
import Divider from './Divider';
import { number } from '@storybook/addon-knobs';
import { scale } from '../../styles/scale';

storiesOf('Atoms/Divider', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => {
    return <Divider margin={number('margin', scale(16))} />;
  })
  .add('Margin', () => {
    return (
      <>
        <Divider margin={0} />
        <Divider />
      </>
    );
  });
