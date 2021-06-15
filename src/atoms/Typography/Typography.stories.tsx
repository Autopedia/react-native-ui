import React from 'react';
import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import SThemeDecorator from '@decorators/styled-components.decorator';
import {
  HeadingSize,
  ParagraphSize,
  TypographyColor,
} from './Typography.types';

import Typography from './Typography';
import CenterContainerDecorator from '@decorators/center-container.decorator';

const { Heading, Paragraph } = Typography;

storiesOf('Atoms/Typography', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => {
    const typographyTypeOptions: string[] = ['heading', 'paragraph'];
    const typographyType = select('type', typographyTypeOptions, 'heading');

    const headingSizeOptions: HeadingSize[] = [1, 2, 3, 4, 5];
    const typographyColorOptions: TypographyColor[] = [
      'default',
      'dark',
      'primary',
      'primaryLight',
      'onPrimary',
      'onPrimaryDark',
      'onCard',
      'error',
      'muted',
    ];
    const paragraphSizeOptions: ParagraphSize[] = ['xs', 'sm', 'md', 'lg'];

    return typographyType === 'heading' ? (
      <Heading
        size={select('size', headingSizeOptions, 1)}
        color={select('color', typographyColorOptions, 'default')}
      >
        {text('text', 'Heading')}
      </Heading>
    ) : (
      <Paragraph
        size={select('size ', paragraphSizeOptions, 'md')}
        color={select('color ', typographyColorOptions, 'default')}
        bold={boolean('bold', false)}
        selectable={boolean('selectable', false)}
        underlined={boolean('underlined', false)}
      >
        {text('text ', 'Paragraph')}
      </Paragraph>
    );
  })
  .add('Type', () => {
    return (
      <>
        <Heading size={1}>Heading1</Heading>
        <Heading size={2}>Heading2</Heading>
        <Heading size={3}>Heading3</Heading>
        <Heading size={4}>Heading4</Heading>
        <Heading size={5}>Heading5</Heading>
        <Paragraph size="lg">Paragraph-lg</Paragraph>
        <Paragraph size="md">Paragraph-md</Paragraph>
        <Paragraph size="sm">Paragraph-s</Paragraph>
        <Paragraph size="xs">Paragraph-xs</Paragraph>
      </>
    );
  })
  .add('Link', () => {
    return (
      <>
        <Paragraph color="default" underlined>
          Default Link
        </Paragraph>
        <Paragraph color="primary" underlined>
          Primary Link
        </Paragraph>
        <Paragraph color="muted" underlined>
          Muted Link
        </Paragraph>
      </>
    );
  })
  .add('Color', () => {
    return (
      <>
        <Heading size={3} color="default">
          Default Heading
        </Heading>
        <Heading size={3} color="primary">
          Primary Heading
        </Heading>
        <Heading size={3} color="error">
          Error Heading
        </Heading>
        <Heading size={3} color="muted">
          Muted Heading
        </Heading>
        <Paragraph color="default">Default Paragraph</Paragraph>
        <Paragraph color="primary">Primary Paragraph</Paragraph>
        <Paragraph color="error">Error Paragraph</Paragraph>
        <Paragraph color="muted">Muted Paragraph</Paragraph>
      </>
    );
  })
  .add('Selectable', () => {
    return (
      <>
        <Paragraph selectable>Selectable Paragraph</Paragraph>
        <Paragraph>Not Selectable Paragraph</Paragraph>
      </>
    );
  })
  .add('Bold', () => {
    return (
      <>
        <Paragraph bold>Bold Paragraph</Paragraph>
        <Paragraph>Normal Paragraph</Paragraph>
      </>
    );
  });
