import React, { useState } from 'react';

import { storiesOf } from '@storybook/react-native';
import CenterContainerDecorator from '@decorators/center-container.decorator';
import SThemeDecorator from '@decorators/styled-components.decorator';
import Checkbox from './Checkbox';
import { Text } from 'react-native';
import { action } from '@storybook/addon-actions';

storiesOf('Atoms/Checkbox', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => {
    return <Checkbox onChange={action('onChange')} />;
  })
  .add('Default', () => {
    return (
      <>
        <Checkbox defaultValue={true}>
          <Text>defaultValue : true</Text>
        </Checkbox>
        <Checkbox defaultValue={false}>
          <Text>defaultValue : false</Text>
        </Checkbox>
      </>
    );
  });
