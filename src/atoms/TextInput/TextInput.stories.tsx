import React from 'react';
import { storiesOf } from '@storybook/react-native';
import SThemeDecorator from '@decorators/styled-components.decorator';
import styled from 'styled-components/native';
import TextInput from './TextInput';
import { boolean, number, text } from '@storybook/addon-knobs';
import { Text } from 'react-native';

storiesOf('Atoms/TextInput', module)
  .addDecorator(SThemeDecorator)
  .add('Playground', () => {
    return (
      <SCenterContainer>
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
      </SCenterContainer>
    );
  })
  .add('Type', () => {
    return (
      <SCenterContainer>
        <TextInput type="default" value="Default Text Input" />
      </SCenterContainer>
    );
  })
  .add('Placeholder', () => {
    return (
      <SCenterContainer>
        <TextInput placeholder="Placeholder" />
      </SCenterContainer>
    );
  })
  .add('SecureTextEntry', () => {
    return (
      <SCenterContainer>
        <TextInput value="Example Text" style={{ marginBottom: 5 }} />
        <TextInput
          secureTextEntry
          value="Example Text"
          style={{ marginBottom: 5 }}
        />
        <TextInput secureTextEntry disabled value="Example Text" />
      </SCenterContainer>
    );
  })
  .add('Multiline', () => {
    const longText = 'Multi Line Long Text '.repeat(5);
    return (
      <SCenterContainer>
        <TextInput value="Single Line" style={{ marginBottom: 5 }} />
        <TextInput multiline numberOfLines={3} value={longText} />
      </SCenterContainer>
    );
  })
  .add('Suffix', () => {
    return (
      <SCenterContainer>
        <TextInput
          value="Text Input with Suffix"
          suffix={<Text>Suffix</Text>}
        />
      </SCenterContainer>
    );
  });

const SCenterContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 10px;
`;
