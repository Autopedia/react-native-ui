import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { SelectLayout, SelectOption, SelectSize } from './Select.types';
import CenterContainerDecorator from '@decorators/center-container.decorator';
import SThemeDecorator from '@decorators/styled-components.decorator';
import Select from './Select';
import { boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Text } from 'react-native';

const dummyOptions: SelectOption<string>[] = [
  { value: 'Option 1', label: 'Option 1' },
  {
    value: 'Option 2',
    label: 'Option 2 With LOOOONG NAME',
    sublabel: 'With Sublabel',
  },
  { value: 'Option 3', label: 'Option 3' },
];

storiesOf('Molecules/Select', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => {
    const valueOptions = ['Option 1', 'Option 2', 'Option 3'];

    const layoutOptions: SelectLayout[] = ['block', 'inline'];
    const sizeOptions: SelectSize[] = ['lg', 'md', 'sm'];

    const useFixedValue = boolean('useFixedValue', false);

    return (
      <Select
        options={dummyOptions}
        layout={select('layout', layoutOptions, 'inline')}
        size={select('size', sizeOptions, 'md')}
        disabled={boolean('disabled', false)}
        value={useFixedValue ? select('value', valueOptions, 'Option 1') : null}
        defaultValue={select('defaultValue', valueOptions, 'Option 1')}
        onChange={e => action('onChange')(e)}
      />
    );
  })
  .add('Layout', () => {
    return (
      <>
        <Text>Inline Layout</Text>
        <Select options={dummyOptions} layout="inline" />
        <Text>Block Layout</Text>
        <Select options={dummyOptions} layout="block" />
      </>
    );
  })
  .add('Size', () => {
    return (
      <>
        <Text>Size : sm</Text>
        <Select options={dummyOptions} size="sm" layout="block" />
        <Text>Size : md</Text>
        <Select options={dummyOptions} size="md" layout="block" />
        <Text>Size : lg</Text>
        <Select options={dummyOptions} size="lg" layout="block" />
      </>
    );
  });
