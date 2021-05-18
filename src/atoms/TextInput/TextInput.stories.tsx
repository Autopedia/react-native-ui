import React from 'react';
import { storiesOf } from '@storybook/react-native';
import SThemeDecorator from '@decorators/styled-components.decorator';
import CenterContainerDecorator from '@decorators/center-container.decorator';
import TextInput from './TextInput';
import { boolean, number, text } from '@storybook/addon-knobs';
import { Text } from 'react-native';

storiesOf('Atoms/TextInput', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Playground', () => {
    return (
      <TextInput
        value={text('value', 'Text Input')}
        placeholder={text('placeholder', 'placeholder')}
        secureTextEntry={boolean('secureTextEntry', false)}
        disabled={boolean('disabled', false)}
        multiline={boolean('multiline', false)}
        numberOfLines={number('numberOfLines', 3, {
          min: 1,
        })}
        suffix={boolean('suffix', false) && <Text>Suffix</Text>}
      />
    );
  })
  .add('Type', () => {
    return <TextInput type="default" value="Default Text Input" />;
  })
  .add('Placeholder', () => {
    return <TextInput placeholder="Placeholder" />;
  })
  .add('SecureTextEntry', () => {
    return (
      <>
        <TextInput value="Example Text" style={{ marginBottom: 5 }} />
        <TextInput
          secureTextEntry
          value="Example Text"
          style={{ marginBottom: 5 }}
        />
        <TextInput secureTextEntry disabled value="Example Text" />
      </>
    );
  })
  .add('Multiline', () => {
    const longText = 'Multi Line Long Text '.repeat(5);
    return (
      <>
        <TextInput value="Single Line" style={{ marginBottom: 5 }} />
        <TextInput multiline numberOfLines={3} value={longText} />
      </>
    );
  })
  .add('Suffix', () => {
    return (
      <TextInput value="Text Input with Suffix" suffix={<Text>Suffix</Text>} />
    );
  });
