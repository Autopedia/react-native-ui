import { boolean, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterContainerDecorator from '@decorators/center-container.decorator';
import SThemeDecorator from '@decorators/styled-components.decorator';
import FormLabel from './FormLabel';

storiesOf('Atoms/FormLabel', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => {
    return (
      <FormLabel required={boolean('required', false)}>
        {text('text', 'FormLabel')}
      </FormLabel>
    );
  })
  .add('Required', () => {
    return (
      <>
        <FormLabel>Default FormLabel</FormLabel>
        <FormLabel required>Required FormLabel</FormLabel>
      </>
    );
  });
