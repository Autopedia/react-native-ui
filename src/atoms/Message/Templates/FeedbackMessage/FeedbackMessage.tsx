import React from 'react';
import { Alert, Linking } from 'react-native';

import Button from '../../../../atoms/Button';
import { FeedbackMessageProps } from '../../Message.types';
import { CardMessage } from '../CardMessage';

export const FeedbackMessage: React.FC<FeedbackMessageProps> = ({ link }) => {
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

  const title = '피드백을 남겨주세요!';
  const description =
    '상담은 만족스러우셨나요?\n상담 내용에 대한 피드백을 바탕으로 더욱 발전하는 닥터차가 되겠습니다!';
  const footer = <Button onPress={openFeedback}>피드백 남기기</Button>;

  return (
    <CardMessage title={title} description={description} footer={footer} />
  );
};
