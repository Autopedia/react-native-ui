import React from 'react';
import { Text } from 'react-native';

import { action } from '@storybook/addon-actions';
import { boolean, number, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';

import CenterContainerDecorator from '../../decorators/center-container.decorator';
import SThemeDecorator from '../../decorators/styled-components.decorator';
import Checkbox from '../Checkbox';
import TextInput from './TextInput';

storiesOf('Atoms/TextInput', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => {
    return (
      <TextInput
        label={text('label', 'Label')}
        success={text('success', undefined)}
        defaultValue="Text Input"
        placeholder={text('placeholder', 'placeholder')}
        secureTextEntry={boolean('secureTextEntry', false)}
        disabled={boolean('disabled', false)}
        multiline={boolean('multiline', false)}
        numberOfLines={number('numberOfLines', 3, {
          min: 1,
        })}
        suffix={boolean('suffix', false) && <Text>Suffix</Text>}
        onChangeText={v => action('onChangeText')(v)}
      />
    );
  })
  .add('Placeholder', () => {
    return <TextInput label="Placeholder" placeholder="Placeholder" />;
  })
  .add('SecureTextEntry', () => {
    return (
      <>
        <TextInput
          label="Default"
          defaultValue="Example Text"
          style={{ marginBottom: 5 }}
          onChangeText={v => action('onChangeText')(v)}
        />
        <TextInput
          label="SecureTextEntry"
          secureTextEntry
          defaultValue="Example Text"
          style={{ marginBottom: 5 }}
          onChangeText={v => action('onChangeText')(v)}
        />
        <TextInput
          label="SecureTextEntry Disabled"
          secureTextEntry
          disabled
          defaultValue="Example Text"
          onChangeText={v => action('onChangeText')(v)}
        />
      </>
    );
  })

  .add('Multiline', () => {
    const longText = 'Multi Line Long Text '.repeat(5);
    return (
      <>
        <TextInput
          label="Single line"
          defaultValue="Single Line"
          style={{ marginBottom: 5 }}
          onChangeText={v => action('onChangeText')(v)}
        />
        <TextInput
          label="Multi line"
          multiline
          numberOfLines={3}
          defaultValue={longText}
          onChangeText={v => action('onChangeText')(v)}
        />
      </>
    );
  })
  .add('Label', () => {
    return (
      <>
        <TextInput
          label="Label"
          defaultValue="With label"
          style={{ marginBottom: 5 }}
          onChangeText={v => action('onChangeText')(v)}
        />
        <TextInput
          defaultValue="No label"
          error={{ type: 'max', message: 'Error' }}
          onChangeText={v => action('onChangeText')(v)}
        />
      </>
    );
  })
  .add('Error', () => {
    return (
      <>
        <TextInput
          defaultValue="No Error"
          style={{ marginBottom: 5 }}
          onChangeText={v => action('onChangeText')(v)}
        />
        <TextInput
          error={{ type: 'max', message: 'Only error' }}
          style={{ marginBottom: 5 }}
          onChangeText={v => action('onChangeText')(v)}
        />
        <TextInput
          label="label"
          error={{ type: 'max', message: 'Error with label' }}
          onChangeText={v => action('onChangeText')(v)}
        />
      </>
    );
  })
  .add('Success', () => {
    return (
      <>
        <TextInput
          defaultValue="No success"
          style={{ marginBottom: 5 }}
          onChangeText={v => action('onChangeText')(v)}
        />
        <TextInput
          success="Only success"
          style={{ marginBottom: 5 }}
          onChangeText={v => action('onChangeText')(v)}
        />
        <TextInput
          label="label"
          success="Success with label"
          style={{ marginBottom: 5 }}
          onChangeText={v => action('onChangeText')(v)}
        />
        <TextInput
          error={{ type: 'max', message: 'error' }}
          success="Success with error"
          style={{ marginBottom: 5 }}
          onChangeText={v => action('onChangeText')(v)}
        />
        <TextInput
          label="label"
          error={{ type: 'max', message: 'error' }}
          success="Success with label, error"
          style={{ marginBottom: 5 }}
          onChangeText={v => action('onChangeText')(v)}
        />
      </>
    );
  })
  .add('Suffix', () => {
    return (
      <>
        <TextInput
          label="String Suffix"
          defaultValue="Text Input with Suffix"
          suffix="Suffix"
          style={{ marginBottom: 5 }}
          onChangeText={v => action('onChangeText')(v)}
        />
        <TextInput
          label="ReactNode Suffix"
          defaultValue="Text Input with Suffix"
          suffix={<Checkbox />}
          style={{ marginBottom: 5 }}
          onChangeText={v => action('onChangeText')(v)}
        />
        <TextInput
          label="String Suffix Disabled"
          disabled
          defaultValue="Text Input with Suffix"
          suffix="Suffix"
          onChangeText={v => action('onChangeText')(v)}
        />
        <TextInput
          label="ReactNode Suffix Disabled"
          disabled
          defaultValue="Text Input with Suffix"
          suffix={<Checkbox />}
          style={{ marginBottom: 5 }}
          onChangeText={v => action('onChangeText')(v)}
        />
      </>
    );
  });
