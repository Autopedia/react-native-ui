import React, { ReactNode } from 'react';
import { Alert, Linking, StyleSheet } from 'react-native';
import ParsedText from 'react-native-parsed-text';
import fonts from '../../styles/fonts';
import colors from '../../styles/colors';

const BOLD_PATTERN = /\*\*(\S(.*?\S)?)\*\*/gm;
const PHONENUMBER_PATTERN = /^\d{2,3}-\d{3,4}-\d{4}$/gm;

interface MarkdownProps {
  textColor?: string;
  selectable: boolean;
  children?: ReactNode;
}

const Markdown: React.FC<MarkdownProps> = ({
  children,
  textColor = colors.ON_BACKGROUND,
  selectable,
}) => {
  const mdTextStyle = markdownTextStyle(textColor);
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
};

const markdownTextStyle = (textColor: string) => {
  return StyleSheet.create({
    text: {
      color: textColor,
      fontSize: fonts.size.XS,
      lineHeight: fonts.lineHeight.XS,
    },
    bold: {
      fontWeight: 'bold',
    },
    url: {
      textDecorationLine: 'underline',
    },
    phone: {
      textDecorationLine: 'underline',
    },
  });
};

const handleUrlPress = async (url: string) => {
  const valid = await Linking.canOpenURL(url);
  if (valid) {
    Linking.openURL(url);
  } else {
    Alert.alert(
      '링크 접속 불가',
      '연결중 문제가 발생했습니다. 직접 복사하여 브라우저에서 시도해주세요',
    );
  }
};

const handlePhonePress = (phoneNumber: string) => {
  if (phoneNumber) {
    Linking.openURL(`tel:${phoneNumber}`);
  } else {
    Alert.alert(
      '연락처 정보 없음',
      '전화앱으로의 연결 중 문제가 발생했습니다. 직접 복사해서 사용해주세요.',
    );
  }
};

const renderBoldText = (matchingString: string) => {
  const match = matchingString.match(BOLD_PATTERN);
  if (match) {
    return `${match[0].replace(/\*\*(.*)\*\*/, '$1')}`;
  } else {
    return matchingString;
  }
};

export default React.memo(Markdown);
