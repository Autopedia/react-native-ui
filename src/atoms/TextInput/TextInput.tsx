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
  label?: string;
  success?: string;
  disabled?: boolean;
  suffix?: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

interface SContainerProps
  extends Pick<TextInputProps, 'disabled' | 'secureTextEntry' | 'suffix'> {}
interface SHeaderProps
  extends Pick<TextInputProps, 'label' | 'error' | 'success'> {}
interface STextInputProps
  extends Omit<RNTextInputProps, 'onChange'>,
    Pick<TextInputProps, 'disabled' | 'error' | 'isDirty'> {}
interface SFixProps extends Pick<TextInputProps, 'disabled'> {}
interface SFixTextProps extends Pick<TextInputProps, 'disabled'> {}

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
    const headerProps: SHeaderProps = lodash.pick(props, [
      'label',
      'error',
      'success',
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
          {!!(props.success || props.error?.message || props.label) && (
            <SHeader {...headerProps}>
              {props.success || props.error?.message || props.label}
            </SHeader>
          )}
          <STextInput
            ref={ref}
            {...textInputProps}
            textAlignVertical="center"
            placeholderTextColor={grayscaleColors.GRAY_400}
          />
          {props.secureTextEntry && (
            <SIcon
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
          <SSuffix disabled={props.disabled}>
            {React.isValidElement(props.suffix) ? (
              props.suffix
            ) : (
              <SFixText disabled={props.disabled}>{props.suffix}</SFixText>
            )}
          </SSuffix>
        )}
      </SFixWrapper>
    );
  },
);

const SFixWrapper = styled.View`
  flex-direction: row;
  box-shadow: 0px 8px 24px rgba(0, 0, 0, 0.1);
`;

const SContainer = styled.View<SContainerProps>`
  position: relative;
  flex-grow: 1;
  justify-content: center;
  background-color: ${systemColors.WHITE};
  border-radius: 16px;
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
`;

const SHeader = styled.Text<SHeaderProps>`
  margin-bottom: 10px;
  font-family: ${fonts.family.MEDIUM};
  ${props => {
    if (props.success) {
      return `color: ${systemColors.SUCCESS}`;
    } else if (props.error) {
      return `color: ${systemColors.ERROR}`;
    } else {
      return `color: ${grayscaleColors.GRAY_400}`;
    }
  }}
`;

const STextInput = styled.TextInput<STextInputProps>`
  padding: 0px;
  margin: 0px;
  font-size: ${fonts.size.XS}px;
  height: ${fonts.lineHeight.XS}px;

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

  /* disabled (default: false) */
   ${props =>
    props.disabled &&
    `
      color: ${colors.ON_DISABLED};
  `}
`;
STextInput.displayName = 'RNTextInput';

const SIcon = styled(Icon)`
  position: absolute;
  right: 8px;
`;
SIcon.displayName = 'SecureTextEntryToggle';

const SSuffix = styled.View<SFixProps>`
  justify-content: center;
  background-color: ${systemColors.WHITE};
  padding: 8px 24px;
  border-top-right-radius: 16px;
  border-bottom-right-radius: 16px;
  /* disabled (default: false) */
  ${props =>
    props.disabled &&
    `
      background-color: ${colors.DISABLED};
  `}
`;

const SFixText = styled.Text<SFixTextProps>`
  font-size: ${fonts.size.XS}px;
  font-family: ${fonts.family.REGULAR};
  color: ${colors.ON_DEFAULT};

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

/* istanbul ignore next */
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
