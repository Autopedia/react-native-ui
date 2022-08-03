import React, { ReactNode } from 'react';
import { Alert, Linking, StyleSheet } from 'react-native';
import ParsedText from 'react-native-parsed-text';

import colors from '../../styles/colors';
import fonts from '../../styles/fonts';

const BOLD_PATTERN = /\*\*(\S(.*?\S)?)\*\*/gm; // **Bold**
const ITALIC_PATTERN = /\*(\S(.*?\S)?)\*/gm; // *Italic*
const BOLDITALIC_PATTERN = /\*\*\*(\S(.*?\S)?)\*\*\*/gm; // ***Italic***
const PHONENUMBER_PATTERN = /(\d{2,4}-\d{3,4}-\d{4})|(\d{4}-\d{4})/; // 010-1234-1234
const MENTION_PATTERN = /\[(@[^:]+):([^\]]+)\]/; // [@username:url]
const HASHTAG_PATTERN = /\[(#[^:]+):([^\]]+)\]/; // [#keyword:url]
const LINK_PATTERN = /\[([^\]]+)\]\(([^\)]+)\)/; // [text](url)
const HEADING1_PATTERN = /^# (.*)$/gm; // # Heading1
const HEADING2_PATTERN = /^## (.*)$/gm; // # Heading1
const HEADING3_PATTERN = /^### (.*)$/gm; // # Heading1
const HAS_SCHEME = /\:\/\//; // https://, drcha:// etc.

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
    linkColor = colors.PRIMARY_DARK,
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
            pattern: HEADING1_PATTERN,
            style: mdTextStyle.heading1,
            renderText: renderSimpleText,
          },
          {
            pattern: HEADING2_PATTERN,
            style: mdTextStyle.heading2,
            renderText: renderSimpleText,
          },
          {
            pattern: HEADING3_PATTERN,
            style: mdTextStyle.heading3,
            renderText: renderSimpleText,
          },
          {
            pattern: LINK_PATTERN,
            style: mdTextStyle.url,
            onPress: handleLinkPress,
            renderText: renderSimpleText,
          },
          {
            pattern: MENTION_PATTERN,
            style: mdTextStyle.url,
            onPress: handleMentionPress,
            renderText: renderSimpleText,
          },
          {
            pattern: HASHTAG_PATTERN,
            style: mdTextStyle.url,
            onPress: handleHashtagPress,
            renderText: renderSimpleText,
          },
          {
            type: 'url',
            style: mdTextStyle.url,
            onPress: openLink,
          },
          {
            pattern: BOLDITALIC_PATTERN,
            style: mdTextStyle.boldItalic,
            renderText: renderSimpleText,
          },
          {
            pattern: BOLD_PATTERN,
            style: mdTextStyle.bold,
            renderText: renderSimpleText,
          },
          {
            pattern: ITALIC_PATTERN,
            style: mdTextStyle.italic,
            renderText: renderSimpleText,
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
    heading1: {
      fontFamily: fonts.family.BOLD,
      fontSize: fonts.size['L'],
      lineHeight: fonts.lineHeight['L'],
    },
    heading2: {
      fontFamily: fonts.family.MEDIUM,
      fontSize: fonts.size['M'],
      lineHeight: fonts.lineHeight['M'],
    },
    heading3: {
      fontFamily: fonts.family.MEDIUM,
      fontSize: fonts.size['S'],
      lineHeight: fonts.lineHeight['S'],
    },
    bold: {
      fontWeight: 'bold',
    },
    italic: {
      fontStyle: 'italic',
    },
    boldItalic: {
      fontWeight: 'bold',
      fontStyle: 'italic',
    },
    url: {
      color: style.linkColor,
      textDecorationLine: 'underline',
    },
    phone: {
      textDecorationLine: 'underline',
    },
  });
};

const openLink = async (url: string) => {
  let link = url;
  if (!url.match(HAS_SCHEME)) {
    link = `https://${url}`;
  }
  try {
    await Linking.openURL(link);
  } catch (error) {
    Alert.alert(
      '링크 접속 불가',
      '연결중 문제가 발생했습니다. 직접 복사하여 브라우저에서 시도해주세요',
    );
  }
};

const handlePhonePress = (phoneNumber: string) => {
  Linking.openURL(`tel:${phoneNumber}`);
};

const handleMentionPress = (mentionMarkdown: string) => {
  const mention = mentionMarkdown.match(MENTION_PATTERN);
  openLink(mention[2]);
};

const handleHashtagPress = (hashtagMarkdown: string) => {
  const hashtag = hashtagMarkdown.match(HASHTAG_PATTERN);
  openLink(hashtag[2]);
};

const handleLinkPress = (linkMarkdown: string) => {
  const link = linkMarkdown.match(LINK_PATTERN);
  openLink(link[2]);
};

const renderSimpleText = (matchingString: string, matches: any) => {
  return matches[1];
};
