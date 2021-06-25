import React from 'react';
import Typography from '@atoms/Typography';
import { EndConfirmedMessageProps } from '../../Message.types';
import { SOtherTextMessage } from '../../Message.styles';
import colors from '@styles/colors';

const EndConfirmedMessage: React.FC<EndConfirmedMessageProps> = () => {
  return (
    <SOtherTextMessage>
      <Typography.Paragraph size={2} color={colors.MUTED}>
        상담이 종료되었습니다.
      </Typography.Paragraph>
    </SOtherTextMessage>
  );
};

export default EndConfirmedMessage;
