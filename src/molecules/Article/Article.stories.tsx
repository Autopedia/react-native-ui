import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterContainerDecorator from '@decorators/center-container.decorator';
import GreyBackgroundDecorator from '@decorators/grey-background.decorator';
import SThemeDecorator from '@decorators/styled-components.decorator';
import Article from './Article';

storiesOf('Molecules/Article', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(GreyBackgroundDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => {
    return (
      <Article
        title={text('title', 'title')}
        body={text('body', 'body')}
        date={text(
          'date',
          new Date('2021-06-21').toISOString().substring(0, 10),
        )}
      />
    );
  });
