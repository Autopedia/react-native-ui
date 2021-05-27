import React from 'react';
import { Spacing } from '@styles';
import Typography from '@atoms/Typography';
import { SCard } from '../../Message.styles';

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
        size="sm"
        color="muted"
        style={{ marginVertical: Spacing.SPACE_10 }}
      >
        {description}
      </Typography.Paragraph>
      {footer}
    </SCard>
  );
};

export default CardMessage;
