import { action } from '@storybook/addon-actions';
import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterContainerDecorator from '../../decorators/center-container.decorator';
import SThemeDecorator from '../../decorators/styled-components.decorator';
import Switch from './Switch';

storiesOf('Atoms/Switch', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => {
    return (
      <Switch
        value={boolean('value', true)}
        disabled={boolean('disabled', false)}
        onValueChange={e => action('onValueChange')(e)}
      />
    );
  })
  .add('Disabled', () => {
    return <Switch disabled />;
  })
  .add('Value', () => {
    return (
      <>
        <Switch value={true} />
        <Switch value={false} />
      </>
    );
  });
