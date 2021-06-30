import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import CenterContainerDecorator from '../../decorators/center-container.decorator';
import SThemeDecorator from '../../decorators/styled-components.decorator';
import FormDivider from './FormDivider';
import React from 'react';

storiesOf('Atoms/FormDivider', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => {
    return <FormDivider invisible={boolean('invisible', false)} />;
  })
  .add('Invisible', () => {
    return (
      <>
        <FormDivider />
        <FormDivider invisible />
      </>
    );
  });
