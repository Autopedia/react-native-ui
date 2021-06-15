import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterContainerDecorator from '@decorators/center-container.decorator';
import SThemeDecorator from '@decorators/styled-components.decorator';
import FormItem from './FormItem';
import { Text } from 'react-native';
import { text } from '@storybook/addon-knobs';
import TextInput from '@atoms/TextInput';
import Select from '@molecules/Select';
import Checkbox from '@atoms/Checkbox';
import styled from 'styled-components/native';

const dummyOptions = [
  { value: 'Option 1', label: 'Option 1' },
  {
    value: 'Option 2',
    label: 'Option 2 With LOOOONG NAME',
    sublabel: 'With Sublabel',
  },
  { value: 'Option 3', label: 'Option 3' },
];

storiesOf('Molecules/FormItem', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Label', () => {
    return (
      <FormItem name="FormItem" label="FormItem Label">
        <FormItemContainer>
          <Text>FormItem Children</Text>
        </FormItemContainer>
      </FormItem>
    );
  })
  .add('Footer', () => {
    return (
      <>
        <FormItem name="FormItem" label="FormItem without footer">
          <FormItemContainer>
            <Text>FormItem Children</Text>
          </FormItemContainer>
        </FormItem>
        <FormItem
          name="FormItem"
          label="FormItem with footer"
          footer={
            <FormItemContainer>
              <Text>FormItem Footer</Text>
            </FormItemContainer>
          }
        >
          <FormItemContainer>
            <Text>FormItem Children</Text>
          </FormItemContainer>
        </FormItem>
        <FormItem
          name="FormItem"
          label="FormItem with string footer"
          footer="string footer"
        >
          <FormItemContainer>
            <Text>FormItem Children</Text>
          </FormItemContainer>
        </FormItem>
      </>
    );
  })
  .add('Rules', () => {
    return (
      <>
        <FormItem
          name="FormItem"
          label="Required"
          rules={{
            required: true,
          }}
        >
          <FormItemContainer>
            <Text>FormItem Children</Text>
          </FormItemContainer>
        </FormItem>
        <FormItem name="FormItem" label="Not required">
          <FormItemContainer>
            <Text>FormItem Children</Text>
          </FormItemContainer>
        </FormItem>
      </>
    );
  })
  .add('Error', () => {
    return (
      <>
        <FormItem
          name="FormItem"
          label="Error"
          error={{ type: 'required', message: 'Error message' }}
        >
          <FormItemContainer>
            <Text>FormItem Children</Text>
          </FormItemContainer>
        </FormItem>

        <FormItem name="FormItem" label="No error">
          <FormItemContainer>
            <Text>FormItem Children</Text>
          </FormItemContainer>
        </FormItem>
      </>
    );
  })
  .add('Children', () => {
    return (
      <>
        <FormItem name="FormItem" label="TextInput FormItem">
          <TextInput></TextInput>
        </FormItem>
        <FormItem name="FormItem" label="Select FormItem">
          <Select options={dummyOptions} layout="inline"></Select>
        </FormItem>
        <FormItem name="FormItem" label="Checkbox FormItem">
          <Checkbox></Checkbox>
        </FormItem>
      </>
    );
  });

const FormItemContainer = styled.View`
  width: ${props => props.theme.spacing.SCREEN_WIDTH};
  height: ${props => props.theme.spacing.SPACE_40};
  border: 1px solid darkgrey;
  background: #e9e9e9;
  justify-content: center;
  align-items: center;
`;
