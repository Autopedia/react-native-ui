import { Alert } from 'react-native';
import Button from '@atoms/Button';
import { CardMessage } from '.';
import { OutdatedMessageProps } from '../Message.types';

const OutdatedMessage: React.FC<OutdatedMessageProps> = ({
  onPressFinish,
  disabled,
  days,
}) => {
  const finishChat = () => {
    Alert.alert('상담 종료', '지금 상담을 종료하시겠습니까?', [
      {
        text: '취소',
      },
      {
        text: '종료',
        style: 'destructive',
        onPress: onPressFinish,
      },
    ]);
  };
  const dayMention = days ? `${days}일 동안 ` : '';
  const outdatedMessageProps = {
    title: '상담이 자동종료될\n예정입니다',
    description:
      dayMention +
      '대화기록이 없어 24시간 뒤에 상담이 자동종료될 예정입니다.\n상담 진행을 원하시면, 채팅을 해주세요!',
    footer: (
      <Button
        layout="block"
        size="sm"
        color="error"
        disabled={disabled}
        onPress={finishChat}
      >
        지금 상담 종료하기
      </Button>
    ),
  };

  return <CardMessage {...outdatedMessageProps} />;
};

export default OutdatedMessage;
