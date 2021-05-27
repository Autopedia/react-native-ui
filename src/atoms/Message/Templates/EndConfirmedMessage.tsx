import React from 'react';
import Typography from '@atoms/Typography';
import { EndConfirmedMessageProps } from '../Message.types';
import { SOtherTextMessage } from '../Message.styles';

const EndConfirmedMessage: React.FC<EndConfirmedMessageProps> = () => {
  return (
    <SOtherTextMessage>
      <Typography.Paragraph color="muted">
        상담이 종료되었습니다.
      </Typography.Paragraph>
    </SOtherTextMessage>
  );
};

export default EndConfirmedMessage;
