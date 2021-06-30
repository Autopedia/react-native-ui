import React from 'react';
import { Spacing } from '../../../../styles';
import Typography from '../../../../atoms/Typography';
import { MAX_WIDTH } from '../../Message.styles';
import styled from 'styled-components/native';
import colors from '../../../../styles/colors';

interface CardMessageProps {
  title: string;
  description: string;
  footer: React.ReactElement;
}

const CardMessage: React.FC<CardMessageProps> = ({
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
        style={{ marginVertical: Spacing.SPACE_10 }}
      >
        {description}
      </Typography.Paragraph>
      {footer}
    </SCard>
  );
};

const SCard = styled.View`
  ${props => props.theme.base.message}
  ${props => `
    width: ${MAX_WIDTH}px;
    background-color: ${props.theme.colors.WHITE};
    padding: ${props.theme.spacing.SPACE_14};
  `}
`;

export default CardMessage;
