import React from 'react';

import Typography from '../../../../atoms/Typography';
import colors from '../../../../styles/colors';
import { linebreakRemover } from '../../../../utils/formatters';
import {
  SContent,
  SContentInfo,
  SContentThumbnail,
} from '../../Message.styles';
import { EventMessageProps } from '../../Message.types';

export const EventMessage: React.FC<EventMessageProps> = ({
  title,
  thumbnailUrl,
}) => {
  return (
    <SContent>
      <SContentThumbnail source={{ uri: thumbnailUrl }} />
      <SContentInfo>
        <Typography.Paragraph size={2} color={colors.MUTED}>
          닥터차 이벤트
        </Typography.Paragraph>
        <Typography.Heading size={5}>
          {linebreakRemover(title)}
        </Typography.Heading>
      </SContentInfo>
    </SContent>
  );
};
