import React from 'react';
import { linebreakRemover } from '@utils/formatters';
import Typography from '@atoms/Typography';
import {
  SContent,
  SContentThumbnail,
  SContentInfo,
} from '../../Message.styles';
import { CounselCaseMessageProps } from '../../Message.types';

const CounselCaseMessage: React.FC<CounselCaseMessageProps> = ({
  thumbnailUrl,
  title,
}) => {
  return (
    <SContent>
      <SContentThumbnail source={{ uri: thumbnailUrl }} />
      <SContentInfo>
        <Typography.Paragraph size="xs" color="muted">
          닥터차 상담사례
        </Typography.Paragraph>
        <Typography.Heading size={5}>
          {linebreakRemover(title)}
        </Typography.Heading>
      </SContentInfo>
    </SContent>
  );
};

export default CounselCaseMessage;
