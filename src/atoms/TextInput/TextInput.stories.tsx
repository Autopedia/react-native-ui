import React from 'react';
import { storiesOf } from '@storybook/react-native';
import SThemeDecorator from '@decorators/styled-components.decorator';
import CenterContainerDecorator from '@decorators/center-container.decorator';
import TextInput from './TextInput';
import { boolean, number, text } from '@storybook/addon-knobs';
import { Text } from 'react-native';
import { action } from '@storybook/addon-actions';

storiesOf('Atoms/TextInput', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => {
    return (
      <TextInput
        defaultValue="Text Input"
        placeholder={text('placeholder', 'placeholder')}
        secureTextEntry={boolean('secureTextEntry', false)}
        disabled={boolean('disabled', false)}
        underline={boolean('underline', false) ? 'success' : undefined}
        multiline={boolean('multiline', false)}
        numberOfLines={number('numberOfLines', 3, {
          min: 1,
        })}
        suffix={boolean('suffix', false) && <Text>Suffix</Text>}
        onChangeText={v => action('onChangeText')(v)}
      />
    );
  })
  .add('Type', () => {
    return (
      <TextInput
        type="default"
        defaultValue="Default Text Input"
        onChangeText={v => action('onChangeText')(v)}
      />
    );
  })
  .add('Placeholder', () => {
    return <TextInput placeholder="Placeholder" />;
  })
  .add('SecureTextEntry', () => {
    return (
      <>
        <TextInput
          defaultValue="Example Text"
          style={{ marginBottom: 5 }}
          onChangeText={v => action('onChangeText')(v)}
        />
        <TextInput
          secureTextEntry
          defaultValue="Example Text"
          style={{ marginBottom: 5 }}
          onChangeText={v => action('onChangeText')(v)}
        />
        <TextInput
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
          defaultValue="Single Line"
          style={{ marginBottom: 5 }}
          onChangeText={v => action('onChangeText')(v)}
        />
        <TextInput
          multiline
          numberOfLines={3}
          defaultValue={longText}
          onChangeText={v => action('onChangeText')(v)}
        />
      </>
    );
  })
  .add('Underline', () => {
    return (
      <>
        <TextInput
          defaultValue="Success"
          underline="success"
          style={{ marginBottom: 5 }}
          onChangeText={v => action('onChangeText')(v)}
        />
        <TextInput
          defaultValue="Error"
          underline="error"
          onChangeText={v => action('onChangeText')(v)}
        />
      </>
    );
  })
  .add('Suffix', () => {
    return (
      <TextInput
        defaultValue="Text Input with Suffix"
        suffix={<Text>Suffix</Text>}
        onChangeText={v => action('onChangeText')(v)}
      />
    );
  });
