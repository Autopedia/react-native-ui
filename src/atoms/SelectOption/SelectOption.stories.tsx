import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterContainerDecorator from '../../decorators/center-container.decorator';
import SThemeDecorator from '../../decorators/styled-components.decorator';
import SelectOption from './SelectOption';
import { SelectLayout, SelectSize } from './SelectOption.types';

const onPressDummy = () => {
  return;
};

storiesOf('Atoms/SelectOption', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => {
    const SSizeOptions: SelectSize[] = ['sm', 'md', 'lg'];
    const SLayoutOptions: SelectLayout[] = ['inline', 'block', 'column'];

    return (
      <SelectOption
        value={null}
        label={text('option/label', 'Label')}
        sublabel={text('option/sublabel', 'Sublabel')}
        selected={boolean('selected', false)}
        size={select('size', SSizeOptions, 'md')}
        layout={select('layout', SLayoutOptions, 'inline')}
        disabled={boolean('disabled', false)}
        onPress={onPressDummy}
      />
    );
  })
  .add('Inline', () => {
    return (
      <>
        <SelectOption
          value={null}
          selected
          label="Inline label selected"
          layout="inline"
          onPress={onPressDummy}
        />
        <SelectOption
          value={null}
          selected={false}
          label="Inline label unselected"
          layout="inline"
          onPress={onPressDummy}
        />
        <SelectOption
          value={null}
          selected
          disabled
          label="Inline label selected"
          layout="inline"
          onPress={onPressDummy}
        />
      </>
    );
  })
  .add('Block(Solo)', () => {
    return (
      <>
        <SelectOption
          value={null}
          selected
          label="Block label selected"
          layout="block"
          onPress={onPressDummy}
        />
        <SelectOption
          value={null}
          selected={false}
          label="Block label unselected"
          layout="block"
          onPress={onPressDummy}
        />
        <SelectOption
          value={null}
          selected
          disabled
          label="Block label disabled"
          layout="block"
          onPress={onPressDummy}
        />
        <SelectOption
          value={null}
          selected
          size="sm"
          label="Block small label selected"
          layout="block"
          onPress={onPressDummy}
        />
        <SelectOption
          value={null}
          selected={false}
          size="sm"
          label="Block small label unselected"
          layout="block"
          onPress={onPressDummy}
        />
        <SelectOption
          value={null}
          selected
          size="sm"
          disabled
          label="Block small label disabled"
          layout="block"
          onPress={onPressDummy}
        />
      </>
    );
  })
  .add('Block(Sublabel)', () => {
    return (
      <>
        <SelectOption
          value={null}
          selected
          label="Block label selected"
          sublabel="Block sublabel selected"
          layout="block"
          onPress={onPressDummy}
        />
        <SelectOption
          value={null}
          selected={false}
          label="Block label unselected"
          sublabel="Block sublabel unselected"
          layout="block"
          onPress={onPressDummy}
        />
        <SelectOption
          value={null}
          selected
          disabled
          label="Block label disabled"
          sublabel="Block sublabel disabled"
          layout="block"
          onPress={onPressDummy}
        />
        <SelectOption
          value={null}
          selected
          size="sm"
          label="Block small label selected"
          sublabel="Block small sublabel selected"
          layout="block"
          onPress={onPressDummy}
        />
        <SelectOption
          value={null}
          selected={false}
          size="sm"
          label="Block small label unselected"
          sublabel="Block small sublabel unselected"
          layout="block"
          onPress={onPressDummy}
        />
        <SelectOption
          value={null}
          selected
          size="sm"
          disabled
          label="Block small label disabled"
          sublabel="Block small sublabel disabled"
          layout="block"
          onPress={onPressDummy}
        />
      </>
    );
  });
