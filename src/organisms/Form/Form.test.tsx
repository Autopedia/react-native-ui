/**
 * @format
 */

import { shallow } from 'enzyme';
import React from 'react';
import { useForm } from 'react-hook-form';
import Form, { Item } from './Form';
import TextInput from '@atoms/TextInput';

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  //@ts-ignore
  useEffect: f => f(),
}));

jest.mock('react-hook-form', () => ({
  useForm: jest.fn().mockImplementation(() => ({
    register: jest.fn(),
    setValue: jest.fn(),
    watch: jest.fn(),
    trigger: jest.fn(),
    formState: {
      errors: {
        tests: {},
      },
    },
  })),
}));

describe('[Form] Unit Test', () => {
  const TEST_NAME = 'test';
  const TEST_VALUE = 'testValue';
  const TEST_RULES = { required: true };
  const TEST_DEFAULTVALUES = { test: TEST_VALUE };

  it('should register value and rules on form', () => {
    const form = useForm();
    shallow(
      <Form form={form}>
        <Item name={TEST_NAME} rules={TEST_RULES}>
          <TextInput />
        </Item>
      </Form>,
    );

    expect(form.register).toHaveBeenCalledTimes(1);
    expect(form.register).toHaveBeenCalledWith(TEST_NAME, TEST_RULES);
  });

  it('should setValue if defaultValues exists', () => {
    const form = useForm();
    shallow(
      <Form form={form} defaultValues={TEST_DEFAULTVALUES}>
        <Item name={TEST_NAME}>
          <TextInput />
        </Item>
      </Form>,
    );

    expect(form.setValue).toHaveBeenCalledTimes(1);
    expect(form.setValue).toHaveBeenCalledWith(TEST_NAME, TEST_VALUE, {
      shouldDirty: true,
    });
  });

  it('should setValue on change', () => {
    const form = useForm();
    const formWrapper = shallow(
      <Form form={form}>
        <Item name={TEST_NAME}>
          <TextInput />
        </Item>
      </Form>,
    );

    const textInput = formWrapper.find('TextInput');

    textInput.simulate('change', TEST_VALUE);

    expect(form.setValue).toHaveBeenCalledTimes(1);
    expect(form.setValue).toHaveBeenCalledWith(TEST_NAME, TEST_VALUE, {
      shouldDirty: true,
      shouldValidate: true,
    });
  });
});
