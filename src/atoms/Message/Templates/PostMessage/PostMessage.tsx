import React from 'react';

import Typography from '../../../../atoms/Typography';
import colors from '../../../../styles/colors';
import { linebreakRemover } from '../../../../utils/formatters';
import {
  SContent,
  SContentInfo,
  SContentThumbnail,
} from '../../Message.styles';
import { PostMessageProps } from '../../Message.types';

export const PostMessage: React.FC<PostMessageProps> = ({
  thumbnailUrl,
  title,
}) => {
  return (
    <SContent>
      <SContentThumbnail source={{ uri: thumbnailUrl }} />
      <SContentInfo>
        <Typography.Paragraph size={2} color={colors.MUTED}>
          닥터차 포스트
        </Typography.Paragraph>
        <Typography.Heading size={5}>
          {linebreakRemover(title)}
        </Typography.Heading>
      </SContentInfo>
    </SContent>
  );
};
