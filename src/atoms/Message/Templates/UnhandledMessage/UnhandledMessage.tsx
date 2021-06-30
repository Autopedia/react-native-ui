import React from 'react';
import Typography from '../../../../atoms/Typography';
import { SMyTextMessage, SOtherTextMessage } from '../../Message.styles';
import colors from '../../../../styles/colors';

interface UnhandledMessageProps {
  mine?: boolean;
}

const UnhandledMessage: React.FC<UnhandledMessageProps> = ({ mine }) => {
  return mine ? <MyUnhandledMessage /> : <OtherUnhandledMessage />;
};

const MyUnhandledMessage: React.FC = () => {
  return (
    <SMyTextMessage>
      <Typography.Paragraph color="primary_extralight" size={2}>
        지원하지 않는 형태의 메세지입니다.{'\n'}앱을 최신 버전으로 업데이트
        해주세요!
      </Typography.Paragraph>
    </SMyTextMessage>
  );
};

const OtherUnhandledMessage: React.FC = () => {
  return (
    <SOtherTextMessage>
      <Typography.Paragraph size={2} color={colors.MUTED}>
        지원하지 않는 형태의 메세지입니다.{'\n'}앱을 최신 버전으로 업데이트
        해주세요!
      </Typography.Paragraph>
    </SOtherTextMessage>
  );
};

export default UnhandledMessage;
