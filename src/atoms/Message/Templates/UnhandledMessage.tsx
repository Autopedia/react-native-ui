import React from 'react';
import Typography from '@atoms/Typography';
import { SMyTextMessage, SOtherTextMessage } from '../Message.styles';

interface UnhandledMessageProps {
  mine?: boolean;
}

const UnhandledMessage: React.FC<UnhandledMessageProps> = ({ mine }) => {
  return mine ? <MyUnhandledMessage /> : <OtherUnhandledMessage />;
};

const MyUnhandledMessage: React.FC = () => {
  return (
    <SMyTextMessage>
      <Typography.Paragraph color="primaryExtraLight" size="sm">
        지원하지 않는 형태의 메세지입니다.{'\n'}앱을 최신 버전으로 업데이트
        해주세요!
      </Typography.Paragraph>
    </SMyTextMessage>
  );
};

const OtherUnhandledMessage: React.FC = () => {
  return (
    <SOtherTextMessage>
      <Typography.Paragraph color="muted" size="sm">
        지원하지 않는 형태의 메세지입니다.{'\n'}앱을 최신 버전으로 업데이트
        해주세요!
      </Typography.Paragraph>
    </SOtherTextMessage>
  );
};

export default UnhandledMessage;
