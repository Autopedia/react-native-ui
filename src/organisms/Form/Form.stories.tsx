import React from 'react';

import { storiesOf } from '@storybook/react-native';

import { Checkbox, TextInput, Typography } from '../../atoms/index';
import CenterContainerDecorator from '../../decorators/center-container.decorator';
import SThemeDecorator from '../../decorators/styled-components.decorator';
import { Select } from '../../molecules/index';
import { Form, Item, useForm } from './Form';

interface FromInputs {
  email: string;
  password: string;
  agreement: boolean;
  gender: string;
}

const FormWrapper: React.FC = () => {
  const form = useForm<FromInputs>({
    shouldUnregister: false,
  });

  return (
    <Form
      form={form}
      style={{ width: '80%' }}
      defaultValues={{
        email: 'test@drcha.com',
        password: '1234',
        agreement: false,
        gender: 'male',
      }}
    >
      <Typography.Heading size={1}>Sign Up</Typography.Heading>

      <Item
        name="email"
        label="Email"
        rules={{ required: 'This field is required.', minLength: 5 }}
      >
        <TextInput placeholder="example@drcha.com" />
      </Item>
      <Item
        name="password"
        label="Password"
        rules={{ required: 'This field is required.', minLength: 5 }}
      >
        <TextInput secureTextEntry placeholder="****" />
      </Item>
      <Item
        name="gender"
        label="Gender"
        rules={{ required: 'This field is required.' }}
      >
        <Select
          layout="inline"
          options={[
            {
              value: 'male',
              label: 'Male',
            },
            {
              value: 'female',
              label: 'Female',
            },
            {
              value: 'others',
              label: 'Others',
            },
          ]}
        ></Select>
      </Item>
      <Item
        name="agreement"
        label="Marketing Agreement"
        rules={{ required: 'This field is required.' }}
      >
        <Checkbox />
      </Item>
    </Form>
  );
};

storiesOf('Organisms/Form', module)
  .addDecorator(SThemeDecorator)
  .addDecorator(CenterContainerDecorator)
  .add('Default', () => {
    return <FormWrapper />;
  });
