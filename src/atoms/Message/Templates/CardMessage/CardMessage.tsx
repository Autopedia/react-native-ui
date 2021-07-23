import React from 'react';
import styled from 'styled-components/native';
import Typography from '../../../../atoms/Typography';
import base from '../../../../styles/base';
import colors from '../../../../styles/colors';
import { MAX_WIDTH } from '../../Message.styles';

interface CardMessageProps {
  title: string;
  description: string;
  footer: React.ReactElement;
}

export const CardMessage: React.FC<CardMessageProps> = ({
  title,
  description,
  footer,
}) => {
  return (
    <SCard>
      <Typography.Heading size={5}>{title}</Typography.Heading>
      <Typography.Paragraph
        size={2}
        color={colors.MUTED}
        style={{ marginVertical: 10 }}
      >
        {description}
      </Typography.Paragraph>
      {footer}
    </SCard>
  );
};

const SCard = styled.View`
  ${props => base.message}
  ${props => `
    width: ${MAX_WIDTH}px;
    background-color: ${colors.WHITE};
    padding: 14px;
  `}
`;
