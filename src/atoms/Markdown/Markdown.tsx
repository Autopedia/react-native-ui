import React, { ReactNode } from 'react';
import { Alert, Linking, StyleSheet } from 'react-native';
import ParsedText from 'react-native-parsed-text';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const BOLD_PATTERN = /\*\*(\S(.*?\S)?)\*\*/gm;
const PHONENUMBER_PATTERN = /^\d{2,3}-\d{3,4}-\d{4}$/gm;

interface MarkdownProps {
  textColor?: string;
  linkColor?: string;
  selectable: boolean;
  children?: ReactNode;
  size?: keyof typeof fonts.size;
}

export const Markdown: React.FC<MarkdownProps> = React.memo(
  ({
    children,
    textColor = colors.ON_BACKGROUND,
    linkColor = colors.PRIMARY,
    size = 'XS',
    selectable,
  }) => {
    const mdTextStyle = markdownTextStyle({ textColor, size, linkColor });
    return (
      <ParsedText
        selectable={selectable}
        style={mdTextStyle.text}
        parse={[
          {
            type: 'url',
            style: mdTextStyle.url,
            onPress: handleUrlPress,
          },
          {
            pattern: BOLD_PATTERN,
            style: mdTextStyle.bold,
            renderText: renderBoldText,
          },
          {
            pattern: PHONENUMBER_PATTERN,
            style: mdTextStyle.phone,
            onPress: handlePhonePress,
          },
        ]}
      >
        {children}
      </ParsedText>
    );
  },
);

const markdownTextStyle = (style: {
  textColor: string;
  linkColor: string;
  size: keyof typeof fonts.size;
}) => {
  return StyleSheet.create({
    text: {
      color: style.textColor,
      fontSize: fonts.size[style.size],
      lineHeight: fonts.lineHeight[style.size],
    },
    bold: {
      fontWeight: 'bold',
    },
    url: {
      color: style.linkColor,
    },
    phone: {
      textDecorationLine: 'underline',
    },
  });
};

const handleUrlPress = async (url: string) => {
  const valid = await Linking.canOpenURL(url);
  if (valid) await Linking.openURL(url);
  else
    Alert.alert(
      '링크 접속 불가',
      '연결중 문제가 발생했습니다. 직접 복사하여 브라우저에서 시도해주세요',
    );
};

const handlePhonePress = (phoneNumber: string) => {
  Linking.openURL(`tel:${phoneNumber}`);
};

const renderBoldText = (matchingString: string) => {
  return `${matchingString.replace(/\*\*(.*)\*\*/, '$1')}`;
};
