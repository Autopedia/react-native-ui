import { storiesOf } from '@storybook/react-native';
import CenterContainerDecorator from '../../decorators/center-container.decorator';
import SThemeDecorator from '../../decorators/styled-components.decorator';
import React from 'react';
import Markdown from './Markdown';
import { boolean, color, text } from '@storybook/addon-knobs';
import { Text } from 'react-native';

storiesOf('Atoms/Markdown', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => {
    return (
      <Markdown
        selectable={boolean('selectable', true)}
        textColor={color('textColor', '#000000')}
      >
        {text(
          'children',
          '**Markdown Bold**\nMarkdown Normal\n010-1234-5678\nhttps://doctor-cha.com/',
        )}
      </Markdown>
    );
  })
  .add('TextColor', () => {
    return (
      <>
        <Markdown selectable>default Markdown</Markdown>
        <Markdown selectable textColor="red">
          red Markdown
        </Markdown>
        <Markdown selectable textColor="blue">
          blue Markdown
        </Markdown>
        <Markdown selectable textColor="#E3E3E3">
          #E3E3E3 Markdown
        </Markdown>
      </>
    );
  })
  .add('Selectable', () => {
    return (
      <>
        <Markdown selectable>Selectable Markdown</Markdown>
        <Markdown selectable={false}>Unselectable Markdown</Markdown>
      </>
    );
  })
  .add('Pattern', () => {
    return (
      <>
        <Markdown selectable>default Markdown</Markdown>
        <Markdown selectable>**Bold Markdown**</Markdown>
        <Markdown selectable>010-1234-5678</Markdown>
        <Markdown selectable>https://doctor-cha.com/</Markdown>
      </>
    );
  });