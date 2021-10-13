import lodash from 'lodash';
import React from 'react';
import { FieldError, RegisterOptions } from 'react-hook-form';
import { Animated } from 'react-native';
import styled from 'styled-components/native';

import FormLabel from '../../atoms/FormLabel';
import Typography from '../../atoms/Typography';
import { BaseInputElement, IterableProps } from '../../global/types';
import { Fonts, Spacing } from '../../styles';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';

interface FormItemProps<V> extends IterableProps {
  children: BaseInputElement<V | null>;
  name: string;
  label?: string;
  rules?: RegisterOptions;
  error?: FieldError;
  footer?: React.ReactNode;
}

type SContainerProps = Pick<FormItemProps<any>, 'first' | 'last'>;

const FormItem = <V extends unknown>(props: FormItemProps<V>) => {
  const [errorY] = React.useState(new Animated.Value(-(Fonts.size.XXS + 1)));
  React.useEffect(() => {
    if (props.error) {
      Animated.spring(errorY, { toValue: 0, useNativeDriver: false }).start();
    } else {
      Animated.spring(errorY, {
        toValue: -(Fonts.size.XXS + 1),
        useNativeDriver: false,
      }).start();
    }
  }, [props.error]); // eslint-disable-line react-hooks/exhaustive-deps

  const containerProps = lodash.pick(props, ['first', 'last']);
  const formLabelProps = { required: Boolean(props.rules?.required) };

  return (
    <SContainer {...containerProps}>
      {props.label && <FormLabel {...formLabelProps}>{props.label}</FormLabel>}
      {props.children}
      {props.footer && (
        <SFooterContainer>
          {typeof props.footer === 'string' ? (
            <SFooter color={colors.MUTED} size={2}>
              {props.footer}
            </SFooter>
          ) : (
            props.footer
          )}
        </SFooterContainer>
      )}
    </SContainer>
  );
};

const SContainer = styled.View<SContainerProps>`
  ${props => `
    margin: 8px 0px;
  `}
`;

const SError = styled(Typography.Paragraph)``;

const SFooterContainer = styled.View`
  ${props => `
    margin-top: 4px;
  `}
`;

const SFooter = styled(Typography.Paragraph)``;

export type FormItemElement<V> = React.ReactElement<
  FormItemProps<V>,
  typeof FormItem
>;
export default FormItem;
