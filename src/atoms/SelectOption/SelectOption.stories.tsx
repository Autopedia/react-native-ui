import { action } from '@storybook/addon-actions';
import { boolean, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterContainerDecorator from '@decorators/center-container.decorator';
import SThemeDecorator from '@decorators/styled-components.decorator';
import SelectOption from './SelectOption';
import { SelectLayout, SelectSize } from './SelectOption.types';

storiesOf('Atoms/SelectOption', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => {
    const SSizeOptions: SelectSize[] = ['sm', 'md', 'lg'];
    const SLayoutOptions: SelectLayout[] = ['inline', 'block', 'column'];

    return (
      <SelectOption
        value={'value'}
        label={text('option/label', 'Label')}
        sublabel={text('option/sublabel', 'Sublabel')}
        selected={boolean('selected', false)}
        size={select('size', SSizeOptions, 'md')}
        layout={select('layout', SLayoutOptions, 'inline')}
        disabled={boolean('disabled', false)}
        onPress={e => action('onPress')(e)}
      />
    );
  })
  .add('Inline', () => {
    return (
      <>
        <SelectOption
          value={'value'}
          selected
          label="Inline label selected"
          layout="inline"
          onPress={e => action('onPress')(e)}
        />
        <SelectOption
          value={'value'}
          selected={false}
          label="Inline label unselected"
          layout="inline"
          onPress={e => action('onPress')(e)}
        />
        <SelectOption
          value={'value'}
          selected
          disabled
          label="Inline label selected"
          layout="inline"
          onPress={e => action('onPress')(e)}
        />
      </>
    );
  })
  .add('Block(Solo)', () => {
    return (
      <>
        <SelectOption
          value={'value'}
          selected
          label="Block label selected"
          layout="block"
          onPress={e => action('onPress')(e)}
        />
        <SelectOption
          value={'value'}
          selected={false}
          label="Block label unselected"
          layout="block"
          onPress={e => action('onPress')(e)}
        />
        <SelectOption
          value={'value'}
          selected
          disabled
          label="Block label disabled"
          layout="block"
          onPress={e => action('onPress')(e)}
        />
        <SelectOption
          value={'value'}
          selected
          size="sm"
          label="Block small label selected"
          layout="block"
          onPress={e => action('onPress')(e)}
        />
        <SelectOption
          value={'value'}
          selected={false}
          size="sm"
          label="Block small label unselected"
          layout="block"
          onPress={e => action('onPress')(e)}
        />
        <SelectOption
          value={'value'}
          selected
          size="sm"
          disabled
          label="Block small label disabled"
          layout="block"
          onPress={e => action('onPress')(e)}
        />
      </>
    );
  })
  .add('Block(Sublabel)', () => {
    return (
      <>
        <SelectOption
          value={'value'}
          selected
          label="Block label selected"
          sublabel="Block sublabel selected"
          layout="block"
          onPress={e => action('onPress')(e)}
        />
        <SelectOption
          value={'value'}
          selected={false}
          label="Block label unselected"
          sublabel="Block sublabel unselected"
          layout="block"
          onPress={e => action('onPress')(e)}
        />
        <SelectOption
          value={'value'}
          selected
          disabled
          label="Block label disabled"
          sublabel="Block sublabel disabled"
          layout="block"
          onPress={e => action('onPress')(e)}
        />
        <SelectOption
          value={'value'}
          selected
          size="sm"
          label="Block small label selected"
          sublabel="Block small sublabel selected"
          layout="block"
          onPress={e => action('onPress')(e)}
        />
        <SelectOption
          value={'value'}
          selected={false}
          size="sm"
          label="Block small label unselected"
          sublabel="Block small sublabel unselected"
          layout="block"
          onPress={e => action('onPress')(e)}
        />
        <SelectOption
          value={'value'}
          selected
          size="sm"
          disabled
          label="Block small label disabled"
          sublabel="Block small sublabel disabled"
          layout="block"
          onPress={e => action('onPress')(e)}
        />
      </>
    );
  });
