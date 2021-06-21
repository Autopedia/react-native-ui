import Typography from '@atoms/Typography';
import FormLabel from '@atoms/FormLabel';
import { IterableProps } from '@global/types';
import { BaseInputElement } from '@global/types';
import { Fonts, Spacing } from '@styles';
import lodash from 'lodash';
import React from 'react';
import { FieldError, RegisterOptions } from 'react-hook-form';
import { Animated } from 'react-native';
import styled from 'styled-components/native';

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
  const [errorY] = React.useState(
    new Animated.Value(-(Fonts.size.XXS + Spacing.SPACE_1)),
  );
  React.useEffect(() => {
    if (props.error) {
      Animated.spring(errorY, { toValue: 0, useNativeDriver: true }).start();
    } else {
      Animated.spring(errorY, {
        toValue: -(Fonts.size.XXS + Spacing.SPACE_1),
        useNativeDriver: true,
      }).start();
    }
  }, [props.error]); // eslint-disable-line react-hooks/exhaustive-deps

  const containerProps = lodash.pick(props, ['first', 'last']);
  const formLabelProps = { required: Boolean(props.rules?.required) };

  return (
    <SContainer {...containerProps}>
      {props.label && <FormLabel {...formLabelProps}>{props.label}</FormLabel>}
      {props.children}
      <Animated.View
        style={{
          marginTop: Spacing.SPACE_1,
          zIndex: -1,
          transform: [{ translateY: errorY }],
        }}
      >
        {props.error?.message ? (
          <SError size="sm" color="error">
            {props.error.message || '입력값을 확인해주세요'}
          </SError>
        ) : null}
      </Animated.View>
      {props.footer && (
        <SFooterContainer>
          {typeof props.footer === 'string' ? (
            <SFooter color="muted" size="sm">
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
    margin: ${props.theme.spacing.SPACE_8} 0px;
  `}
`;

const SError = styled(Typography.Paragraph)``;

const SFooterContainer = styled.View`
  ${props => `
    margin-top: ${props.theme.spacing.SPACE_4};
  `}
`;

const SFooter = styled(Typography.Paragraph)``;

export type FormItemElement<V> = React.ReactElement<
  FormItemProps<V>,
  typeof FormItem
>;
export default FormItem;
