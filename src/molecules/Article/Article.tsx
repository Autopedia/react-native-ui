import React from 'react';
import Hyperlink from 'react-native-hyperlink';
import styled from 'styled-components/native';

import Typography from '../../atoms/Typography';
import { Colors } from '../../styles';
import colors from '../../styles/colors';
import spacing from '../../styles/spacing';

interface ArticleProps {
  title: string;
  body: string;
  date?: string;
}
const Article: React.FC<ArticleProps> = ({ title, body, date }) => {
  return (
    <SContainer>
      {date && (
        <SDate size={2} color={colors.MUTED}>
          {date}
        </SDate>
      )}
      <Typography.Heading size={5}>{title}</Typography.Heading>
      <SDivider />
      <Hyperlink
        linkDefault={true}
        linkStyle={{
          textDecorationLine: 'underline',
          color: Colors.PRIMARY_DARK,
        }}
      >
        <Typography.Paragraph size={1}>{body}</Typography.Paragraph>
      </Hyperlink>
    </SContainer>
  );
};

const SContainer = styled.View`
  ${props => `
   background-color: ${colors.BACKGROUND};
    padding: 24px 16px;
  `}
`;
const SDate = styled(Typography.Paragraph)`
  ${props => `
    margin-bottom: 10px;
  `}
`;
const SDivider = styled.View`
  ${props => `
    width: 40px;
    margin: 10px 0px;
    border-bottom-width: 2px;
    border-bottom-color: ${colors.PRIMARY};
  `}
`;

export default Article;
