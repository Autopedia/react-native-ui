import React from 'react';
import { Linking, Alert } from 'react-native';
import { FeedbackMessageProps } from '../Message.types';
import { CardMessage } from '.';
import Button from '@atoms/Button';

const FeedbackMessage: React.FC<FeedbackMessageProps> = ({ link }) => {
  const openFeedback = async () => {
    const valid = await Linking.canOpenURL(link);

    if (valid) {
      Linking.openURL(link);
    } else {
      Alert.alert(
        '피드백 작성 불가',
        '죄송합니다. 현재 피드백을 남기실 수 없습니다.',
      );
    }
  };

  const props = {
    title: '피드백을 남겨주세요!',
    description:
      '상담은 만족스러우셨나요?\n상담 내용에 대한 피드백을 바탕으로 더욱 발전하는 닥터차가 되겠습니다!',
    footer: (
      <Button layout="block" size="sm" onPress={openFeedback}>
        피드백 남기기
      </Button>
    ),
  };

  return <CardMessage {...props} />;
};

export default FeedbackMessage;
