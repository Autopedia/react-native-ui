import { action } from '@storybook/addon-actions';
import { boolean, color, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterContainerDecorator from '../../decorators/center-container.decorator';
import SThemeDecorator from '../../decorators/styled-components.decorator';
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
        color={color('color', 'black')}
        textColor={color('textColor', 'black')}
        size={select('size', SSizeOptions, 'md')}
        layout={select('layout', SLayoutOptions, 'inline')}
        disabled={boolean('disabled', false)}
        onPress={e => action('onPress')(e)}
      />
    );
  })
  .add('InLine', () => {
    return (
      <>
        <SelectOption
          value={'value'}
          selected
          label="Inline label selected"
          color="black"
          layout="inline"
          onPress={e => action('onPress')(e)}
        />
        <SelectOption
          value={'value'}
          selected={false}
          label="Inline label unselected"
          color="black"
          layout="inline"
          onPress={e => action('onPress')(e)}
        />
        <SelectOption
          value={'value'}
          selected={false}
          disabled
          label="Inline label disabled"
          color="black"
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
          color="black"
          layout="block"
          onPress={e => action('onPress')(e)}
        />
        <SelectOption
          value={'value'}
          selected={false}
          label="Block label unselected"
          color="black"
          layout="block"
          onPress={e => action('onPress')(e)}
        />
        <SelectOption
          value={'value'}
          selected
          disabled
          label="Block label disabled"
          color="black"
          layout="block"
          onPress={e => action('onPress')(e)}
        />
        <SelectOption
          value={'value'}
          selected
          size="sm"
          label="Block small label selected"
          color="black"
          layout="block"
          onPress={e => action('onPress')(e)}
        />
        <SelectOption
          value={'value'}
          selected={false}
          size="sm"
          label="Block small label unselected"
          color="black"
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
          last
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
          color="black"
          layout="block"
          onPress={e => action('onPress')(e)}
        />
        <SelectOption
          value={'value'}
          selected={false}
          label="Block label unselected"
          sublabel="Block sublabel unselected"
          color="black"
          layout="block"
          onPress={e => action('onPress')(e)}
        />
        <SelectOption
          value={'value'}
          selected
          disabled
          label="Block label disabled"
          sublabel="Block sublabel disabled"
          color="black"
          layout="block"
          onPress={e => action('onPress')(e)}
        />
      </>
    );
  })
  .add('Column', () => {
    return (
      <>
        <SelectOption
          value={'value'}
          selected
          label="Column label selected"
          color="black"
          layout="column"
          onPress={e => action('onPress')(e)}
        />
        <SelectOption
          value={'value'}
          selected={false}
          label="Column label unselected"
          color="black"
          layout="column"
          onPress={e => action('onPress')(e)}
        />
        <SelectOption
          value={'value'}
          selected
          disabled
          label="Column label disabled"
          color="black"
          layout="column"
          onPress={e => action('onPress')(e)}
        />
      </>
    );
  });
