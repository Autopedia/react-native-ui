import { BaseInputProps } from './TextInput.types';
import { Colors, Fonts } from '@styles';
import { TextOnlyStyleKeys, ViewStyleKeys, pickStyle } from '@styles/utils';
import lodash from 'lodash';
import React, { useState } from 'react';
import {
  TextInputProps as RNTextInputProps,
  StyleProp,
  TextStyle,
} from 'react-native';
import styled from 'styled-components/native';

import Icon from '@atoms/Icon';

export interface TextInputProps
  /**
   * Commonly used props of BaseInputProps
   * @onChangeText refers to event when user changes the text of the component
   * @keyboardType refers to the type of the keyboard shown
   *               when user pressed the component for the first time
   */
  extends BaseInputProps<any>,
    Omit<
      RNTextInputProps,
      | 'editable'
      | 'placeholderTextColor'
      | 'style'
      | 'onChange'
      | 'defaultValue'
    > {
  type?: 'default';
  disabled?: boolean;
  suffix?: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

interface SContainerProps
  extends Pick<
    TextInputProps,
    'type' | 'disabled' | 'secureTextEntry' | 'suffix'
  > {}

interface STextInputProps
  extends Omit<RNTextInputProps, 'onChange'>,
    Pick<TextInputProps, 'type' | 'disabled'> {}
interface SFixProps extends Pick<TextInputProps, 'type' | 'disabled'> {}
interface SFixTextProps extends Pick<TextInputProps, 'type' | 'disabled'> {}

const TextInput = (props: TextInputProps) => {
  const [showText, setShowText] = useState(false);

  const fixWrapperProps = {
    style: pickStyle(props.style, ViewStyleKeys),
  };
  const containerProps: SContainerProps = lodash.pick(props, [
    'type',
    'disabled',
    'secureTextEntry',
    'suffix',
  ]);
  const textInputProps: STextInputProps = {
    ...lodash.omit(props, [
      'placeholderTextColor',
      'secureTextEntry',
      'onChange',
    ]),
    editable: !props.disabled,
    placeholderTextColor: Colors.MUTED,
    secureTextEntry: props.secureTextEntry && !showText,
    style: pickStyle(props.style, TextOnlyStyleKeys),
    onChangeText: value => {
      let propValue = value;

      if (props.disabled) {
        return;
      }
      if (props.keyboardType && props.keyboardType === 'numeric') {
        propValue = propValue.replace(/\D/g, '');
      }
      if (propValue.length === 0) {
        return;
      }
      if (props.onChange) {
        props.onChange(propValue);
      }
      if (props.onChangeText) {
        props.onChangeText(propValue);
      }
    },
  };

  return (
    <SFixWrapper {...fixWrapperProps}>
      <SContainer {...containerProps}>
        <STextInput {...textInputProps} />
        {props.secureTextEntry && (
          <SIcon
            touchable
            disabled={props.disabled}
            onPress={() => {
              setShowText(showText => (props.disabled ? false : !showText));
            }}
            source={
              showText
                ? require('@assets/icons/eye/eye-closed.png')
                : require('@assets/icons/eye/eye-opened.png')
            }
          />
        )}
      </SContainer>
      {props.suffix && (
        <SSuffix>
          {React.isValidElement(props.suffix) ? (
            props.suffix
          ) : (
            <SFixText>{props.suffix}</SFixText>
          )}
        </SSuffix>
      )}
    </SFixWrapper>
  );
};

const SFixWrapper = styled.View`
  flex-direction: row;
`;

const SContainer = styled.View<SContainerProps>`
  ${props => `
    position: relative;
    flex-grow: 1;
    justify-content: center;
    border-width: ${props.theme.border.BORDER_WIDTH};
    border-radius: ${props.theme.border.BORDER_RADIUS};
    padding: ${props.theme.spacing.SPACE_10} ${props.theme.spacing.SPACE_12};
  `}

  /* type (default: default) */
  ${props => {
    switch (props.type) {
      default:
        return `
          background-color: ${props.theme.colors.DEFAULT};
          border-color: ${props.theme.colors.BORDER_DEFAULT};
        `;
    }
  }}

  /* suffix (default: undefined) */
  ${props =>
    props.suffix &&
    `
      border-top-right-radius: 0px;
      border-bottom-right-radius: 0px;
  `}

  /* disabled (default: false) */
  ${props =>
    props.disabled &&
    `
      background-color: ${props.theme.colors.DISABLED};
      border-color: ${props.theme.colors.BORDER_DISABLED};
  `}
`;

const STextInput = styled.TextInput<STextInputProps>`
  ${props => `
    padding: 0px;
    margin: 0px;
    font-size: ${props.theme.fonts.fontSize.XS};
    height: ${props.theme.fonts.lineHeight.XS};
  `}

  /* multiline */
  ${props =>
    props.multiline &&
    `
      text-align-vertical: top;
      height: ${
        props.numberOfLines
          ? props.numberOfLines * Fonts.lineHeight.XS
          : props.theme.fonts.lineHeight.XS
      }px;
    `}

  /* type (default: default) */
   ${props => {
    switch (props.type) {
      default:
        return `
          color: ${props.theme.colors.ON_DEFAULT};
        `;
    }
  }}

   /* disabled (default: false) */
   ${props =>
    props.disabled &&
    `
      color: ${props.theme.colors.ON_DISABLED};
  `}
`;

const SIcon = styled(Icon)`
  ${props => `
    position: absolute;
    right: ${props.theme.spacing.SPACE_8};
  `}
`;

const SSuffix = styled.View<SFixProps>`
  ${props => `
    justify-content: center;
    padding: ${props.theme.spacing.SPACE_8} ${props.theme.spacing.SPACE_24};
    border-width: ${props.theme.border.BORDER_WIDTH};
    border-left-width: 0px;
    border-top-right-radius: ${props.theme.border.BORDER_RADIUS};
    border-bottom-right-radius: ${props.theme.border.BORDER_RADIUS};
  `}

  /* type (default: default) */
   ${props => {
    switch (props.type) {
      default:
        return `
          background-color: ${props.theme.colors.DEFAULT};
          border-color: ${props.theme.colors.BORDER_DEFAULT};
        `;
    }
  }}

  /* disabled (default: false) */
  ${props =>
    props.disabled &&
    `
      background-color: ${props.theme.colors.DISABLED};
      border-color: ${props.theme.colors.BORDER_DISABLED};
  `}
`;

const SFixText = styled.Text<SFixTextProps>`
  ${props => `
    font-size: ${props.theme.fonts.size.XS};
    font-family: ${props.theme.fonts.family.REGULAR};
  `}

  /* type (default: default) */
  ${props => {
    switch (props.type) {
      default:
        return `
          color: ${props.theme.colors.ON_DEFAULT};
        `;
    }
  }}

  /* disabled (default: false) */
  ${props =>
    props.disabled &&
    `
      color: ${props.theme.colors.ON_DISABLED};
  `}
`;

export type TextInputElement = React.ReactElement<
  TextInputProps,
  typeof TextInput
>;
export default TextInput;

export const textInputPropsGenerator = (name: string): RNTextInputProps => {
  const defaultProps: RNTextInputProps = {
    autoCapitalize: 'none',
    autoCorrect: false,
  };

  if (name === 'email') {
    return {
      ...defaultProps,
      keyboardType: 'email-address',
      textContentType: 'emailAddress',
    };
  }
  if (name === 'password') {
    return {
      ...defaultProps,
      secureTextEntry: true,
      textContentType: 'password',
    };
  }
  if (name === 'newPassword') {
    return {
      ...defaultProps,
      secureTextEntry: true,
      textContentType: 'newPassword',
    };
  }
  if (name === 'newPasswordConfirm') {
    return {
      ...defaultProps,
      secureTextEntry: true,
      textContentType: 'newPassword',
    };
  }
  if (name === 'name') {
    return {
      ...defaultProps,
      textContentType: 'name',
      keyboardType: 'default',
    };
  }
  return defaultProps;
};
