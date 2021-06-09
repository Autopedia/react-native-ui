import Typography from '@atoms/Typography';
import React from 'react';
import Hyperlink from 'react-native-hyperlink';
import styled from 'styled-components/native';
import { Colors } from '@styles';
interface ArticleProps {
  title: string;
  body: string;
  date?: string;
}
const Article: React.FC<ArticleProps> = ({ title, body, date }) => {
  return (
    <SContainer>
      {date && (
        <SDate size="sm" color="muted">
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
        <Typography.Paragraph>{body}</Typography.Paragraph>
      </Hyperlink>
    </SContainer>
  );
};

const SContainer = styled.View`
  ${props => `
   background-color: ${props.theme.colors.BACKGROUND};
    padding: ${props.theme.spacing.SPACE_24} ${props.theme.spacing.SPACE_16};
  `}
`;
const SDate = styled(Typography.Paragraph)`
  ${props => `
    margin-bottom: ${props.theme.spacing.SPACE_10};
  `}
`;
const SDivider = styled.View`
  ${props => `
    width: ${props.theme.spacing.SPACE_40};
    margin: ${props.theme.spacing.SPACE_10} 0px;
    border-bottom-width: ${props.theme.spacing.SPACE_2};
    border-bottom-color: ${props.theme.colors.PRIMARY};
  `}
`;

export default Article;
