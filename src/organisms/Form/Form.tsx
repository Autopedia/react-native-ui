import Divider, {
  FormDividerElement,
} from '../../atoms/FormDivider/FormDivider';
import FormItem from '../../molecules/FormItem';
import Item, { FormItemElement } from '../../molecules/FormItem/FormItem';
import lodash from 'lodash';
import React, { useEffect } from 'react';
import { useForm, FieldError, Path, UseFormReturn } from 'react-hook-form';
import { StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import { BaseInputElement } from '../../global/types';

type FormChild<V> = FormItemElement<V> | FormDividerElement;
interface FormProps<I> {
  children: FormChild<I[keyof I]> | Array<FormChild<I[keyof I]>>;
  form: UseFormReturn<I>;
  defaultValues?: I;
  style?: StyleProp<ViewStyle>;
}

const Form = <I extends Record<string, any>>({
  form,
  defaultValues,
  ...props
}: FormProps<I>) => {
  const reactChildren = Array.isArray(props.children)
    ? props.children
    : [props.children];
  const children = reactChildren.map((element, index) => {
    if (element.type === FormItem) {
      //@ts-ignore
      type V = I[typeof element.props.name];
      const child = element as FormItemElement<V>;
      let grandChild = child.props.children as BaseInputElement<V>;

      return React.cloneElement(
        child,
        {
          ...child.props,
          key: child.props.name + index,
          first: index === 0,
          last: index === reactChildren.length - 1,
          rules: { ...child.props.rules },
          error: form.formState.errors[child.props.name] as FieldError,
        },
        React.cloneElement(grandChild, {
          ...grandChild.props,
          defaultValue:
            grandChild.props.defaultValue || defaultValues?.[child.props.name],
          value: form.watch(child.props.name as Path<I>) as V,
          onChange: (value: V) => {
            if (grandChild.props.onChange) {
              grandChild.props.onChange(value);
            }
            form.setValue(child.props.name as Path<I>, value, {
              shouldDirty: true,
              shouldValidate: true,
            });
          },
        }),
      );
    } else {
      return element;
    }
  });

  const fields = children
    .filter(child => child.type === FormItem)
    .map(child => {
      const formItem = child as FormItemElement<any>;

      return {
        name: formItem.props.name,
        rules: formItem.props.rules,
      };
    });

  useEffect(() => {
    fields.forEach(field => {
      form.register(field.name as Path<I>, field.rules);
      if (defaultValues?.[field.name]) {
        form.setValue(field.name as Path<I>, defaultValues[field.name], {
          shouldDirty: true,
        });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const containerProps: SContainerProps = lodash.pick(props, 'style');

  return <SContainer {...containerProps}>{children}</SContainer>;
};

type SContainerProps = Pick<FormProps<any>, 'style'>;
const SContainer = styled.View``;

export { useForm, Item, Divider };
export default Form;
