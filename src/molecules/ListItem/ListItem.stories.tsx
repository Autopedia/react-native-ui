import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterContainerDecorator from '../../decorators/center-container.decorator';
import SThemeDecorator from '../../decorators/styled-components.decorator';
import ListItem from './ListItem';
import { ListItemSubLabelPosition } from './ListItem.types';
import { Text } from 'react-native';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components/native';

storiesOf('Molecules/ListItem', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => {
    const sublabelPositionOptions: ListItemSubLabelPosition[] = [
      'bottom',
      'top',
    ];

    const suffix = boolean('suffix', false);

    return (
      <ListContainer>
        <ListItem
          label={text('label', 'label')}
          sublabel={text('sublabel', 'sublabel')}
          sublabelPosition={select(
            'sublabelPosition',
            sublabelPositionOptions,
            'top',
          )}
          underlined={boolean('underlined', false)}
          {...(suffix ? { suffix: <Text>Suffix</Text> } : {})}
          onPress={e => action('onPress')(e.nativeEvent)}
        />
      </ListContainer>
    );
  })
  .add('SublabelPosition', () => {
    return (
      <ListContainer>
        <ListItem
          label="label"
          sublabel="sublabel top"
          sublabelPosition="top"
        />
        <ListItem
          label="label"
          sublabel="sublabel bottom"
          sublabelPosition="bottom"
        />
      </ListContainer>
    );
  })
  .add('Underline', () => {
    return (
      <ListContainer>
        <ListItem label="label" sublabel="underlined item" underlined />
        <ListItem label="label" sublabel="not underlined item" />
      </ListContainer>
    );
  })
  .add('Suffix', () => {
    return (
      <ListContainer>
        <ListItem label="label" sublabel="default suffix" />
        <ListItem
          label="label"
          sublabel="custom suffix"
          suffix={<Text>Suffix</Text>}
        />
      </ListContainer>
    );
  });

const ListContainer = styled.View`
  width: 50%;
`;
