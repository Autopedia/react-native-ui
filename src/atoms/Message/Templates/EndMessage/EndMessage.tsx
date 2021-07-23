import React from 'react';
import { Alert } from 'react-native';
import { EndMessageProps } from '../../Message.types';
import Button from '../../../../atoms/Button';
import { CardMessage } from '../CardMessage';

export const EndMessage: React.FC<EndMessageProps> = ({
  onPressFinish,
  disabled,
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

  const title = '상담이 종료되었습니다';
  const description =
    '상담은 만족스러우셨나요?\n24시간 후에 상담이 자동 종료됩니다!\n계속 상담을 진행하시면 자동 종료는 취소됩니다.';
  const footer = (
    <Button type="block" color="error" disabled={disabled} onPress={finishChat}>
      지금 상담 종료하기
    </Button>
  );

  return (
    <CardMessage title={title} description={description} footer={footer} />
  );
};
