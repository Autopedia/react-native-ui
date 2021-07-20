import lodash from 'lodash';
import React, { forwardRef, useState } from 'react';
import {
  Platform,
  StyleProp,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TextStyle,
} from 'react-native';
import styled from 'styled-components/native';

import Icon from '../../atoms/Icon';
import { BaseInputProps } from '../../global/types';
import { Colors, Fonts } from '../../styles';
import colors from '../../styles/colors';
import fonts from '../../styles/fonts';
import { grayscaleColors } from '../../styles/grayscale-colors';
import spacing from '../../styles/spacing';
import { systemColors } from '../../styles/system-colors';
import {
  pickStyle,
  TextOnlyStyleKeys,
  ViewStyleKeys,
} from '../../styles/utils';

export interface TextInputProps
  /**
   * Commonly used props of RNTextInputProps
   * @onChangeText refers to event when user changes the text of the component
   * @keyboardType refers to the type of the keyboard shown
   *               when user pressed the component for the first time
   */
  extends BaseInputProps<string>,
    Omit<
      RNTextInputProps,
      | 'editable'
      | 'placeholderTextColor'
      | 'style'
      | 'onChange'
      | 'defaultValue'
    > {
  type?: 'default' | 'large';
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
    Pick<TextInputProps, 'type' | 'disabled' | 'error' | 'isDirty'> {}
interface SFixProps extends Pick<TextInputProps, 'type' | 'disabled'> {}
interface SFixTextProps extends Pick<TextInputProps, 'type' | 'disabled'> {}

const TextInput = forwardRef(
  (props: TextInputProps, ref?: React.Ref<RNTextInput>) => {
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
      secureTextEntry: props.secureTextEntry
        ? props.secureTextEntry && !showText
        : false,
      style: pickStyle(props.style, TextOnlyStyleKeys),
      onChangeText: value => {
        let propValue = value;

        if (props.disabled) {
          return;
        }
        if (props.keyboardType && props.keyboardType === 'numeric') {
          propValue = propValue.replace(/\D/g, '');
        }

        props.onChange?.(propValue);
        props.onChangeText?.(propValue);
      },
    };

    return (
      <SFixWrapper {...fixWrapperProps}>
        <SContainer
          {...containerProps}
          style={Platform.select({
            android: {
              shadowColor: 'rgba(0,0,0,0.5)',
              shadowOpacity: 1,
              elevation: 15,
            },
          })}
        >
          <STextInput
            ref={ref}
            {...textInputProps}
            placeholderTextColor={grayscaleColors.GRAY_400}
          />
          {props.secureTextEntry && (
            <SIcon
              touchable
              disabled={props.disabled || false}
              onPress={() => {
                setShowText(prev => (props.disabled ? false : !prev));
              }}
              source={
                showText
                  ? require('../../assets/icons/eye/eye-closed.png')
                  : require('../../assets/icons/eye/eye-opened.png')
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
  },
);

const SFixWrapper = styled.View`
  flex-direction: row;
`;

const SContainer = styled.View<SContainerProps>`
  position: relative;
  flex-grow: 1;
  justify-content: center;
  border-radius: ${spacing.SPACE_16}px;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
  background-color: ${systemColors.WHITE};
  padding: 14px 16px;

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
      background-color: ${colors.DISABLED};
      border-color: ${colors.BORDER_DISABLED};
  `}

  ${props =>
    props.type === 'large' &&
    `
      padding: 24px 16px;
  `}
`;

const STextInput = styled.TextInput<STextInputProps>`
  padding: 0px;
  margin: 0px;
  font-size: ${fonts.size.XS}px;
  line-height: ${fonts.lineHeight.XS}px;

  /* multiline */
  ${props =>
    props.multiline &&
    `
      text-align-vertical: top;
      height: ${
        props.numberOfLines
          ? props.numberOfLines * Fonts.lineHeight.XS
          : fonts.lineHeight.XS
      }px;
    `}

  /* type (default: default) */
   ${props =>
    props.type === 'large' &&
    ` 
      font-size: ${fonts.size.XL}px;
      line-height: ${fonts.lineHeight.XL}px;
    `}

   /* disabled (default: false) */
   ${props =>
    props.disabled &&
    `
      color: ${colors.ON_DISABLED};
  `}
    
  /* underline */
  ${props => {
    if (props.isDirty) {
      if (props.error) {
        return `
          border-bottom-width: 1px;
          border-bottom-color: ${colors.ERROR};
        `;
      } else {
        return `
          border-bottom-width: 1px;
          border-bottom-color: ${colors.SUCCESS};
        `;
      }
    }
  }}
`;

const SIcon = styled(Icon)`
  position: absolute;
  right: ${spacing.SPACE_8}px;
`;

const SSuffix = styled.View<SFixProps>`
  justify-content: center;
  padding: ${spacing.SPACE_8}px ${spacing.SPACE_24}px;
  border-width: 1px;
  border-left-width: 0px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;

  /* type (default: default) */
  ${props => {
    switch (props.type) {
      default:
        return `
          background-color: ${colors.DEFAULT};
          border-color: ${colors.BORDER_DEFAULT};
        `;
    }
  }}

  /* disabled (default: false) */
  ${props =>
    props.disabled &&
    `
      background-color: ${colors.DISABLED};
      border-color: ${colors.BORDER_DISABLED};
  `}
`;

const SFixText = styled.Text<SFixTextProps>`
  font-size: ${fonts.size.XS}px;
  font-family: ${fonts.family.REGULAR}px;

  /* type (default: default) */
  ${props => {
    switch (props.type) {
      default:
        return `
          color: ${colors.ON_DEFAULT};
        `;
    }
  }}

  /* disabled (default: false) */
  ${props =>
    props.disabled &&
    `
      color: ${colors.ON_DISABLED};
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
