import React from 'react';
import { boolean, color, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import SThemeDecorator from '../../decorators/styled-components.decorator';
import { HeadingSize, ParagraphSize } from './Typography.types';

import Typography from './Typography';
import CenterContainerDecorator from '../../decorators/center-container.decorator';
import { systemColors } from '../../styles/system-colors';

const { Heading, Paragraph, Caption } = Typography;

storiesOf('Atoms/Typography', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => {
    const typographyTypeOptions: string[] = ['heading', 'paragraph', 'caption'];
    const typographyType = select('type', typographyTypeOptions, 'heading');

    const headingSizeOptions: HeadingSize[] = [1, 2, 3, 4, 5];
    const paragraphSizeOptions: ParagraphSize[] = [1, 2];

    switch (typographyType) {
      case 'heading':
        return (
          <Heading
            size={select('size', headingSizeOptions, 1)}
            color={color('color', systemColors.BLACK)}
          >
            {text('text', 'Heading')}
          </Heading>
        );
      case 'paragraph':
        return (
          <Paragraph
            size={select('size ', paragraphSizeOptions, 1)}
            color={color('color ', systemColors.BLACK)}
            selectable={boolean('selectable', false)}
            underlined={boolean('underlined', false)}
          >
            {text('text ', 'Paragraph')}
          </Paragraph>
        );
      case 'caption':
        return (
          <Caption color={color('color  ', systemColors.BLACK)}>
            {text('text ', 'Caption')}
          </Caption>
        );
    }
  })
  .add('Type', () => {
    return (
      <>
        <Heading size={1}>Heading1</Heading>
        <Heading size={2}>Heading2</Heading>
        <Heading size={3}>Heading3</Heading>
        <Heading size={4}>Heading4</Heading>
        <Heading size={5}>Heading5</Heading>
        <Paragraph size={1}>Paragraph1</Paragraph>
        <Paragraph size={2}>Paragraph2</Paragraph>
        <Caption>Caption</Caption>
      </>
    );
  })
  .add('Link', () => {
    return (
      <>
        <Paragraph size={1} underlined>
          Default Link
        </Paragraph>
        <Paragraph size={1} color={systemColors.PRIMARY} underlined>
          Primary Link
        </Paragraph>
        <Paragraph size={1} color={systemColors.SUCCESS} underlined>
          Success Link
        </Paragraph>
        <Paragraph size={1} color={systemColors.ERROR} underlined>
          Error Link
        </Paragraph>
      </>
    );
  })
  .add('Color', () => {
    return (
      <>
        <Heading size={3}>Default Heading</Heading>
        <Heading size={3} color={systemColors.PRIMARY}>
          Primary Heading
        </Heading>
        <Heading size={3} color={systemColors.SUCCESS}>
          Success Heading
        </Heading>
        <Heading size={3} color={systemColors.ERROR}>
          Error Heading
        </Heading>
        <Paragraph size={1} color="black">
          Default Paragraph
        </Paragraph>
        <Paragraph size={1} color={systemColors.PRIMARY}>
          Primary Paragraph
        </Paragraph>
        <Paragraph size={1} color={systemColors.SUCCESS}>
          Success Paragraph
        </Paragraph>
        <Paragraph size={1} color={systemColors.ERROR}>
          Error Paragraph
        </Paragraph>
        <Caption color="black">Default Caption</Caption>
        <Caption color={systemColors.PRIMARY}>Primary Caption</Caption>
        <Caption color={systemColors.SUCCESS}>Success Caption</Caption>
        <Caption color={systemColors.ERROR}>Error Caption</Caption>
      </>
    );
  })
  .add('Selectable', () => {
    return (
      <>
        <Paragraph size={1} selectable>
          Selectable Paragraph
        </Paragraph>
        <Paragraph size={1}>Not Selectable Paragraph</Paragraph>
      </>
    );
  })
  .add('fontWeight', () => {
    return (
      <>
        <Paragraph size={1} fontWeight="bold">
          Bold Paragraph
        </Paragraph>
        <Paragraph size={1}>Normal Paragraph</Paragraph>
        <Paragraph size={1} fontWeight="light">
          Light Paragraph
        </Paragraph>
      </>
    );
  });
